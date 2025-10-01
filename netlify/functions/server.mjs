import { createServer } from '../../dist/server/server.js'

const server = createServer()

export default async function handler(request, context) {
  return server(request, context)
}

export const config = {
  path: '/*',
  preferStatic: true,
}
