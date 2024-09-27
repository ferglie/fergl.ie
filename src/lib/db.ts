import dotenv from 'dotenv';
import { MongoClient, type MongoClientOptions } from 'mongodb';

dotenv.config();

const options: MongoClientOptions = {
	// useUnifiedTopology: true,
	// useNewUrlParser: true
};
const uri = process.env['MONGODB_URI'];
let client: MongoClient;
let createDbConnection: Promise<MongoClient>;

console.log('URI IS', uri);
if (!uri) {
	throw new Error('Please add your Mongo URI to .env');
}

if (process.env.NODE_ENV === 'development') {
	if (!global._mongoClientPromise) {
		client = new MongoClient(uri, options);
		global._mongoClientPromise = client.connect();
	}
	createDbConnection = global._mongoClientPromise;
} else {
	client = new MongoClient(uri, options);
	createDbConnection = client.connect();
}
export default createDbConnection;
