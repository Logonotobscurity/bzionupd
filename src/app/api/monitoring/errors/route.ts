/**
 * Error Logging API Route
 * Receives and processes error logs from clients
 */

import { NextRequest, NextResponse } from 'next/server'

export interface ErrorLogReport {
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
  breadcrumbs: Array<{
    message: string
    timestamp: number
    category: string
    data?: Record<string, any>
  }>
  sourceMap?: {
    file: string
    line: number
    column: number
  }
  environment: string
  version: string
}

/**
 * POST /api/monitoring/errors
 * Receive error logs from clients
 */
export async function POST(request: NextRequest) {
  try {
    const errorLog: ErrorLogReport = await request.json()

    // Validate required fields
    if (!errorLog.message || !errorLog.sessionId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Determine if error should be logged based on severity
    const shouldLog =
      errorLog.severity === 'critical' ||
      errorLog.severity === 'error' ||
      (process.env.NODE_ENV === 'development' && errorLog.severity === 'warning')

    if (shouldLog) {
      console.error(`[Error Log] [${errorLog.severity.toUpperCase()}]`, {
        id: errorLog.id,
        message: errorLog.message,
        url: errorLog.url,
        sessionId: errorLog.sessionId,
        userId: errorLog.userId,
        timestamp: new Date(errorLog.timestamp).toISOString(),
      })

      // Log detailed info for critical errors
      if (errorLog.severity === 'critical') {
        console.error('[Error Details]', {
          stack: errorLog.stack,
          context: errorLog.context,
          sourceMap: errorLog.sourceMap,
          breadcrumbs: errorLog.breadcrumbs.slice(-5), // Last 5 breadcrumbs
        })
      }
    }

    // Store error log (you can implement database storage here)
    // await storeErrorLog(errorLog)

    // Send to external error tracking service (e.g., Sentry, Rollbar)
    // await sendToErrorTrackingService(errorLog)

    // Send alerts for critical errors
    if (errorLog.severity === 'critical') {
      // await sendAlert(errorLog)
    }

    // Return success response
    return NextResponse.json(
      { success: true, id: errorLog.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Error Logging API] Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

/**
 * GET /api/monitoring/errors
 * Retrieve error logs (with authentication)
 */
export async function GET(request: NextRequest) {
  try {
    // Add authentication check here
    const authHeader = request.headers.get('authorization')
    if (!authHeader) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Query parameters for filtering
    const { searchParams } = new URL(request.url)
    const severity = searchParams.get('severity')
    const sessionId = searchParams.get('sessionId')
    const limit = parseInt(searchParams.get('limit') || '50', 10)

    // Retrieve error logs from storage
    // const errors = await getErrorLogs({ severity, sessionId, limit })

    const errors = {
      total: 0,
      limit,
      errors: [],
    }

    return NextResponse.json(errors, { status: 200 })
  } catch (error) {
    console.error('[Error Logging API] Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

/**
 * DELETE /api/monitoring/errors/:id
 * Delete an error log (with authentication)
 */
export async function DELETE(request: NextRequest) {
  try {
    // Add authentication check here
    const authHeader = request.headers.get('authorization')
    if (!authHeader) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const id = request.nextUrl.pathname.split('/').pop()
    if (!id) {
      return NextResponse.json(
        { error: 'Missing error ID' },
        { status: 400 }
      )
    }

    // Delete error log from storage
    // await deleteErrorLog(id)

    return NextResponse.json(
      { success: true, id },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Error Logging API] Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
