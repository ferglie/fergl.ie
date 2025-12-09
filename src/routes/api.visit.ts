import { createFileRoute } from '@tanstack/react-router'
import createDbConnection from '../lib/db'

export const Route = createFileRoute('/api/visit')({
  server: {
    handlers: {
      GET: async ({ request }: { request: Request }) => {
        try {
          const client = await createDbConnection

          const db = client.db()

          // Get client IP from request headers
          const forwardedFor = request.headers.get('x-forwarded-for')
          const clientIp = forwardedFor?.split(',')[0] || 'unknown'

          const visitData = {
            source: clientIp,
            timestamp: new Date(),
          }
          console.log(
            '[GET /api/visit] Inserting visit:',
            JSON.stringify(visitData),
          )

          await db.collection('visits').insertOne(visitData)
          console.log('[GET /api/visit] Visit inserted successfully')

          const count = await db.collection('visits').countDocuments()
          console.log('[GET /api/visit] Total visit count:', count)

          return new Response(
            JSON.stringify({
              body: {
                count,
              },
            }),
            {
              status: 200,
              headers: {
                'Content-Type': 'application/json',
              },
            },
          )
        } catch (e) {
          console.error('[GET /api/visit] ERROR:', e)
          console.error(
            '[GET /api/visit] Error name:',
            e instanceof Error ? e.name : 'Unknown',
          )
          console.error(
            '[GET /api/visit] Error message:',
            e instanceof Error ? e.message : String(e),
          )
          console.error(
            '[GET /api/visit] Error stack:',
            e instanceof Error ? e.stack : 'No stack trace',
          )

          return new Response(
            JSON.stringify({
              body: {
                error: `Error getting visit count: ${e instanceof Error ? e.message : String(e)}`,
              },
            }),
            {
              status: 500,
              headers: {
                'Content-Type': 'application/json',
              },
            },
          )
        }
      },
      POST: async ({ request }: { request: Request }) => {
        console.log('[POST /api/visit] Starting request')

        try {
          console.log('[POST /api/visit] Attempting to connect to MongoDB...')
          const client = await createDbConnection
          console.log('[POST /api/visit] MongoDB connection established')

          const db = client.db()
          console.log('[POST /api/visit] Database reference obtained')

          // Get client IP from request headers
          const forwardedFor = request.headers.get('x-forwarded-for')
          const clientIp = forwardedFor?.split(',')[0] || 'unknown'

          const visitData = {
            source: clientIp,
            timestamp: new Date(),
          }
          console.log(
            '[POST /api/visit] Inserting visit:',
            JSON.stringify(visitData),
          )

          await db.collection('visits').insertOne(visitData)
          console.log('[POST /api/visit] Visit inserted successfully')

          return new Response(
            JSON.stringify({
              message: 'ta',
            }),
            {
              status: 201,
              headers: {
                'Content-Type': 'application/json',
              },
            },
          )
        } catch (e) {
          console.error('[POST /api/visit] ERROR:', e)
          console.error(
            '[POST /api/visit] Error name:',
            e instanceof Error ? e.name : 'Unknown',
          )
          console.error(
            '[POST /api/visit] Error message:',
            e instanceof Error ? e.message : String(e),
          )
          console.error(
            '[POST /api/visit] Error stack:',
            e instanceof Error ? e.stack : 'No stack trace',
          )

          return new Response(
            JSON.stringify({
              error: `Error recording visit: ${e instanceof Error ? e.message : String(e)}`,
            }),
            {
              status: 500,
              headers: {
                'Content-Type': 'application/json',
              },
            },
          )
        }
      },
    },
  },
})
