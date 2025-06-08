// db1.js
const { MongoClient } = require("mongodb");

const uri = "mongodb://babulal:667031c0f5706f13c9c89042@ac-0zdxixf-shard-00-00.bslfstu.mongodb.net:27017,ac-0zdxixf-shard-00-01.bslfstu.mongodb.net:27017,ac-0zdxixf-shard-00-02.bslfstu.mongodb.net:27017/?ssl=true&replicaSet=atlas-9gamx9-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, { useUnifiedTopology: true });

async function insertUser(userData) {
  try {
    await client.connect();
    const db = client.db("myappdb");
    const users = db.collection("users"); // ✅ unchanged
    const result = await users.insertOne(userData);
    return result;
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

async function getUserByName(name) {
  try {
    await client.connect();
    const db = client.db("myappdb");
    const users = db.collection("users"); // ✅ unchanged
    const user = await users.findOne({ name });
    return user;
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

export { insertUser, getUserByName };
