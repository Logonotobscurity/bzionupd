/**
 * Error Logging Service
 * Centralized error logging with automatic reporting
 */

export interface ErrorLogEntry {
  id: string
  message: string
  stack?: string
  context?: Record<string, any>
  severity: 'info' | 'warning' | 'error' | 'critical'
  timestamp: number
  url: string
  userAgent: string
  sessionId: string
  userId?: string
  breadcrumbs: Breadcrumb[]
  sourceMap?: {
    file: string
    line: number
    column: number
  }
}

export interface Breadcrumb {
  message: string
  timestamp: number
  category: string
  data?: Record<string, any>
}

export interface ErrorLogPayload extends ErrorLogEntry {
  environment: string
  version: string
}

class ErrorLogger {
  private sessionId: string
  private userId?: string
  private breadcrumbs: Breadcrumb[] = []
  private maxBreadcrumbs: number = 50
  private reportEndpoint: string = '/api/monitoring/errors'
  private environment: string = process.env.NODE_ENV || 'development'
  private version: string = process.env.NEXT_PUBLIC_VERSION || '1.0.0'
  private errorQueue: ErrorLogEntry[] = []
  private maxQueueSize: number = 20

  constructor(userId?: string) {
    this.sessionId = this.generateSessionId()
    this.userId = userId
    this.setupGlobalErrorHandlers()
  }

  /**
   * Generate unique session ID
   */
  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  }

  /**
   * Setup global error handlers
   */
  private setupGlobalErrorHandlers(): void {
    if (typeof window === 'undefined') return

    // Handle uncaught errors
    window.addEventListener('error', (event) => {
      this.captureError({
        message: event.message,
        stack: event.error?.stack,
        context: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        },
        severity: 'error',
      })
    })

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.captureError({
        message: event.reason?.message || 'Unhandled Promise Rejection',
        stack: event.reason?.stack,
        severity: 'error',
      })
    })
  }

  /**
   * Capture and log an error
   */
  captureError(error: {
    message: string
    stack?: string
    context?: Record<string, any>
    severity?: 'info' | 'warning' | 'error' | 'critical'
  }): ErrorLogEntry {
    const entry: ErrorLogEntry = {
      id: `error-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      message: error.message,
      stack: error.stack,
      context: error.context,
      severity: error.severity || 'error',
      timestamp: Date.now(),
      url: typeof window !== 'undefined' ? window.location.href : '',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      sessionId: this.sessionId,
      userId: this.userId,
      breadcrumbs: [...this.breadcrumbs],
    }

    // Parse stack trace for source mapping
    if (error.stack) {
      const match = error.stack.match(/at (.*?):(\d+):(\d+)/)
      if (match) {
        entry.sourceMap = {
          file: match[1],
          line: parseInt(match[2], 10),
          column: parseInt(match[3], 10),
        }
      }
    }

    // Add to queue
    this.errorQueue.push(entry)
    if (this.errorQueue.length > this.maxQueueSize) {
      this.errorQueue.shift()
    }

    // Send to endpoint
    this.sendToEndpoint(entry)

    // Log in development
    if (this.environment === 'development') {
      console.error('[Error Logger]', error.message, {
        stack: error.stack,
        context: error.context,
        breadcrumbs: this.breadcrumbs,
      })
    }

    return entry
  }

  /**
   * Capture an exception
   */
  captureException(error: Error, context?: Record<string, any>): ErrorLogEntry {
    return this.captureError({
      message: error.message,
      stack: error.stack,
      context,
      severity: 'error',
    })
  }

  /**
   * Capture a message
   */
  captureMessage(
    message: string,
    severity: 'info' | 'warning' | 'error' | 'critical' = 'info',
    context?: Record<string, any>
  ): ErrorLogEntry {
    return this.captureError({
      message,
      context,
      severity,
    })
  }

  /**
   * Add breadcrumb for tracking user actions
   */
  addBreadcrumb(breadcrumb: {
    message: string
    category?: string
    data?: Record<string, any>
  }): void {
    this.breadcrumbs.push({
      message: breadcrumb.message,
      timestamp: Date.now(),
      category: breadcrumb.category || 'user-action',
      data: breadcrumb.data,
    })

    // Keep only the most recent breadcrumbs
    if (this.breadcrumbs.length > this.maxBreadcrumbs) {
      this.breadcrumbs.shift()
    }
  }

  /**
   * Track user action
   */
  trackUserAction(action: string, data?: Record<string, any>): void {
    this.addBreadcrumb({
      message: action,
      category: 'user-action',
      data,
    })
  }

  /**
   * Track page navigation
   */
  trackPageNavigation(url: string, data?: Record<string, any>): void {
    this.addBreadcrumb({
      message: `Navigation to ${url}`,
      category: 'navigation',
      data: { url, ...data },
    })
  }

  /**
   * Track API call
   */
  trackApiCall(
    method: string,
    url: string,
    status?: number,
    duration?: number
  ): void {
    this.addBreadcrumb({
      message: `${method} ${url}`,
      category: 'api-call',
      data: { method, url, status, duration },
    })
  }

  /**
   * Set user context
   */
  setUser(userId: string, userData?: Record<string, any>): void {
    this.userId = userId
    this.addBreadcrumb({
      message: `User ${userId} set`,
      category: 'user',
      data: userData,
    })
  }

  /**
   * Clear user context
   */
  clearUser(): void {
    this.userId = undefined
    this.addBreadcrumb({
      message: 'User cleared',
      category: 'user',
    })
  }

  /**
   * Send error to endpoint
   */
  private sendToEndpoint(entry: ErrorLogEntry): void {
    const payload: ErrorLogPayload = {
      ...entry,
      environment: this.environment,
      version: this.version,
    }

    if (!navigator.sendBeacon) {
      // Fallback to fetch
      fetch(this.reportEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {
        // Silently fail
      })
      return
    }

    // Use sendBeacon for reliable delivery
    navigator.sendBeacon(this.reportEndpoint, JSON.stringify(payload))
  }

  /**
   * Get all logged errors
   */
  getErrors(): ErrorLogEntry[] {
    return [...this.errorQueue]
  }

  /**
   * Clear error queue
   */
  clearErrors(): void {
    this.errorQueue = []
  }

  /**
   * Get breadcrumbs
   */
  getBreadcrumbs(): Breadcrumb[] {
    return [...this.breadcrumbs]
  }

  /**
   * Clear breadcrumbs
   */
  clearBreadcrumbs(): void {
    this.breadcrumbs = []
  }

  /**
   * Get session info
   */
  getSessionInfo(): {
    sessionId: string
    userId?: string
    environment: string
    version: string
  } {
    return {
      sessionId: this.sessionId,
      userId: this.userId,
      environment: this.environment,
      version: this.version,
    }
  }

  /**
   * Flush all pending errors
   */
  async flush(): Promise<void> {
    // Send any remaining errors
    for (const error of this.errorQueue) {
      await this.sendToEndpoint(error)
    }
  }
}

// Singleton instance
let logger: ErrorLogger | null = null

/**
 * Initialize error logger
 */
export function initializeErrorLogger(userId?: string, reportEndpoint?: string): ErrorLogger {
  if (!logger) {
    logger = new ErrorLogger(userId)
    if (reportEndpoint) {
      logger['reportEndpoint'] = reportEndpoint
    }
  }
  return logger
}

/**
 * Get error logger instance
 */
export function getErrorLogger(): ErrorLogger | null {
  return logger
}

/**
 * Quick capture error
 */
export function captureError(error: Error, context?: Record<string, any>): void {
  const instance = getErrorLogger()
  if (instance) {
    instance.captureException(error, context)
  }
}

/**
 * Quick capture message
 */
export function captureMessage(
  message: string,
  severity?: 'info' | 'warning' | 'error' | 'critical',
  context?: Record<string, any>
): void {
  const instance = getErrorLogger()
  if (instance) {
    instance.captureMessage(message, severity, context)
  }
}

/**
 * Quick add breadcrumb
 */
export function addBreadcrumb(
  message: string,
  category?: string,
  data?: Record<string, any>
): void {
  const instance = getErrorLogger()
  if (instance) {
    instance.addBreadcrumb({ message, category, data })
  }
}
