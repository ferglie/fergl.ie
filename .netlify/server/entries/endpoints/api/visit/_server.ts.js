import dotenv from "dotenv";
import { MongoClient } from "mongodb";
dotenv.config();
const options = {};
const uri = process.env["MONGODB_URI"];
let client;
let createDbConnection;
console.log("URI IS", uri);
if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  createDbConnection = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  createDbConnection = client.connect();
}
const createDbConnection$1 = createDbConnection;
const GET = async (req, res) => {
  try {
    const client2 = await createDbConnection$1;
    const db = client2.db();
    await db.collection("visits").insertOne({
      source: "10.1.1.1"
    });
    const count = await db.collection("visits").countDocuments() + 16954;
    return new Response(JSON.stringify({
      body: {
        count
      }
    }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({
      body: {
        error: `Error getting visit count
${e}`
      }
    }), { status: 500 });
  }
};
const POST = async (req) => {
  try {
    const client2 = await createDbConnection$1;
    const db = client2.db();
    await db.collection("visits").insertOne({
      source: "10.1.1.1"
    });
    return {
      status: 201,
      body: {
        message: "ta"
      }
    };
  } catch (e) {
    return {
      status: 500,
      body: {
        error: `Error getting visit count
${e}`
      }
    };
  }
};
export {
  GET,
  POST
};
