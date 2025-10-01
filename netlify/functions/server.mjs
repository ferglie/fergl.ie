import server from '../../dist/server/server.js'

export default async function handler(event, context) {
  try {
    // Construct the full URL
    const protocol = event.headers['x-forwarded-proto'] || 'https'
    const host = event.headers['host']
    const path = event.rawUrl || event.path
    const url = `${protocol}://${host}${path}`

    // Create a Web API Request object
    const request = new Request(url, {
      method: event.httpMethod,
      headers: new Headers(event.headers),
      body: event.body && event.httpMethod !== 'GET' && event.httpMethod !== 'HEAD' 
        ? (event.isBase64Encoded ? Buffer.from(event.body, 'base64') : event.body)
        : undefined,
    })

    // Call the TanStack Start server
    const response = await server.fetch(request)
    
    // Convert headers to plain object
    const headers = {}
    response.headers.forEach((value, key) => {
      headers[key] = value
    })

    // Read the response body
    const body = await response.text()

    return {
      statusCode: response.status,
      headers,
      body,
      isBase64Encoded: false,
    }
  } catch (error) {
    console.error('Function error:', error)
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
      body: `Internal Server Error: ${error.message}`,
    }
  }
}

export const config = {
  path: '/*',
}
