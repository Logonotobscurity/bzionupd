"use client"

import { useEffect } from 'react'
import {
  initializeWebVitals,
  getWebVitalsTracker,
} from '@/lib/web-vitals'
import {
  initializeErrorLogger,
  getErrorLogger,
} from '@/lib/error-logger'
import {
  initializePerformanceMonitor,
  getPerformanceMonitor,
} from '@/lib/performance-monitor'

/**
 * useMonitoring Hook
 * Initializes all monitoring services (Web Vitals, Error Logging, Performance Metrics)
 * Should be called once in the root layout
 * 
 * @example
 * export default function RootLayout({ children }) {
 *   useMonitoring({ userId: 'user-123' })
 *   return <html>...</html>
 * }
 */
export function useMonitoring(options?: {
  userId?: string
  webVitalsEndpoint?: string
  errorLoggingEndpoint?: string
  performanceMetricsEndpoint?: string
  enableWebVitals?: boolean
  enableErrorLogging?: boolean
  enablePerformanceMonitoring?: boolean
}) {
  const {
    userId,
    webVitalsEndpoint = '/api/monitoring/web-vitals',
    errorLoggingEndpoint = '/api/monitoring/errors',
    performanceMetricsEndpoint = '/api/monitoring/metrics',
    enableWebVitals = true,
    enableErrorLogging = true,
    enablePerformanceMonitoring = true,
  } = options || {}

  useEffect(() => {
    // Initialize Web Vitals tracking
    if (enableWebVitals) {
      initializeWebVitals(webVitalsEndpoint)
    }

    // Initialize error logging
    if (enableErrorLogging) {
      initializeErrorLogger(userId, errorLoggingEndpoint)

      // Log page visibility changes
      const handleVisibilityChange = () => {
        const logger = getErrorLogger()
        if (logger) {
          if (document.hidden) {
            logger.trackUserAction('page_hidden')
          } else {
            logger.trackUserAction('page_visible')
          }
        }
      }

      // Log page unload for cleanup
      const handleBeforeUnload = () => {
        const logger = getErrorLogger()
        if (logger) {
          logger.trackUserAction('page_unload')
          logger.flush()
        }
      }

      document.addEventListener('visibilitychange', handleVisibilityChange)
      window.addEventListener('beforeunload', handleBeforeUnload)

      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange)
        window.removeEventListener('beforeunload', handleBeforeUnload)
      }
    }

    // Initialize performance monitoring
    if (enablePerformanceMonitoring) {
      const monitor = initializePerformanceMonitor()
      monitor.trackLongTasks()

      // Report metrics periodically (every 5 minutes)
      const reportInterval = setInterval(() => {
        monitor.reportMetrics()
      }, 5 * 60 * 1000)

      return () => {
        clearInterval(reportInterval)
      }
    }
  }, [
    userId,
    enableWebVitals,
    enableErrorLogging,
    enablePerformanceMonitoring,
    webVitalsEndpoint,
    errorLoggingEndpoint,
    performanceMetricsEndpoint,
  ])
}

/**
 * Get monitoring services
 */
export function getMonitoring() {
  return {
    webVitals: getWebVitalsTracker(),
    errorLogger: getErrorLogger(),
    performanceMonitor: getPerformanceMonitor(),
  }
}

/**
 * Hook to track user action
 */
export function useTrackAction(action: string, data?: Record<string, any>) {
  useEffect(() => {
    const logger = getErrorLogger()
    if (logger) {
      logger.trackUserAction(action, data)
    }
  }, [action, data])
}

/**
 * Hook to measure component render time
 */
export function useMeasureRender(componentName: string) {
  useEffect(() => {
    const startTime = performance.now()
    return () => {
      const duration = performance.now() - startTime
      const monitor = getPerformanceMonitor()
      if (monitor && duration > 16) {
        // Only log if slower than 60fps (16ms)
        monitor.recordMetric({
          name: 'component_render',
          value: duration,
          unit: 'ms',
          tags: { component: componentName },
          timestamp: Date.now(),
        })
      }
    }
  }, [componentName])
}
