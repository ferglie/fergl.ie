import server from '../../dist/server/server.js'

export default async function handler(event, context) {
  const request = new Request(event.rawUrl, {
    method: event.httpMethod,
    headers: new Headers(event.headers),
    body: event.body ? event.body : undefined,
  })

  const response = await server.fetch(request)
  
  const headers = {}
  response.headers.forEach((value, key) => {
    headers[key] = value
  })

  return {
    statusCode: response.status,
    headers,
    body: await response.text(),
  }
}

export const config = {
  path: '/*',
  preferStatic: true,
}
