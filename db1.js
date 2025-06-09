// // db1.js
// //const { MongoClient } = require("mongodb");
// import { MongoClient } from 'mongodb'
// //const uri = "mongodb://babulal:667031c0f5706f13c9c89042@ac-0zdxixf-shard-00-00.bslfstu.mongodb.net:27017,ac-0zdxixf-shard-00-01.bslfstu.mongodb.net:27017,ac-0zdxixf-shard-00-02.bslfstu.mongodb.net:27017/?ssl=true&replicaSet=atlas-9gamx9-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
// const uri = 'mongodb://babulal:667031c0f5706f13c9c89042@ac-0zdxixf-shard-00-00.bslfstu.mongodb.net:27017,ac-0zdxixf-shard-00-01.bslfstu.mongodb.net:27017,ac-0zdxixf-shard-00-02.bslfstu.mongodb.net:27017/?ssl=true&replicaSet=atlas-9gamx9-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';
// //const client = new MongoClient(uri, { useUnifiedTopology: true });
// let db = null;

// const client = new MongoClient(uri);

// async function insertUser(userData) {
//   try {
//     await client.connect();
//     const db = client.db("myappdb");
//     const users = db.collection("users"); // ✅ unchanged
//     const result = await users.insertOne(userData);
//     return result;
//   } catch (err) {
//     throw err;
//   } finally {
//     await client.close();
//   }
// }

// async function getUserByName(name) {
//   try {
//     await client.connect();
//     const db = client.db("myappdb");
//     const users = db.collection("users"); // ✅ unchanged
//     const user = await users.findOne({ name });
//     return user;
//   } catch (err) {
//     throw err;
//   } finally {
//     await client.close();
//   }
// }

// export { insertUser, getUserByName };
// db.js
//import { MongoClient, } from 'mongodb';
import { MongoClient, ObjectId } from 'mongodb';

//const uri = 'mongodb://babulal:667031c0f5706f13c9c89042@ac-0zdxixf-shard-00-00.bslfstu.mongodb.net:27017,ac-0zdxixf-shard-00-01.bslfstu.mongodb.net:27017,ac-0zdxixf-shard-00-02.bslfstu.mongodb.net:27017/?ssl=true&replicaSet=atlas-9gamx9-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';
const uri = process.env.MONGO_URI;
let db = null;
const client = new MongoClient(uri);

export async function connectDB() {
  try {
    await client.connect();
    db = client.db('test'); // Change this if needed
    console.log('✅ MongoDB connected!');
  } catch (err) {
    console.error('❌ DB Connection Error:', err);
  }
}

export function getUsersCollection() {
  if (!db) {
    throw new Error('DB not connected yet.');
  }
  return db.collection('users');
}
export { ObjectId };