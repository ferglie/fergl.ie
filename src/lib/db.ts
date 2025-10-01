import { MongoClient } from 'mongodb'
import type { MongoClientOptions } from 'mongodb'

const options: MongoClientOptions = {}

const uri = process.env.MONGODB_URI

console.log('URI IS', uri)

if (!uri) {
  throw new Error('Please add your Mongo URI to .env')
}

let client: MongoClient
let createDbConnection: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  // In development, use a global variable to preserve the connection across hot reloads
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options)
    ;(global as any)._mongoClientPromise = client.connect()
  }
  createDbConnection = (global as any)._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  createDbConnection = client.connect()
}

export default createDbConnection
