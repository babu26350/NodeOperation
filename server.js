// import express from 'express';
// import cors from 'cors';
// import db from './db.js';
// //import {insertUser, getUserByName } from './db1.js';
// import { connectDB, getUsersCollection } from './db1.js';
// const app = express();
 //app.use(cors());
// app.use(express.json());
// app.use(express.static('public'));

// import path from 'path';
// import { fileURLToPath } from 'url';


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// await connectDB();
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
// console.log("server ce")

// app.get('/users', (req, res) => {

//   const sql = 'SELECT * FROM my_table';

//   db.query(sql, (err, result) => { 
//     if (err) {
//       console.error('Error fetching data from my_table:', err.message);
//       return res.status(500).json({ error: 'Database error: ' + err.message });
//     }

//     if (result.length === 0) {
//       return res.status(404).json({ message: 'No records found in my_table' });
//     }
 
//     res.json(result);
//   });
// });
// app.post("/api/users2", async (req, res) => {
//   try {
//     const result = await insertUser(req.body);
//     res.status(201).json({ message: "User inserted", id: result.insertedId });
//   } catch (err) {
//     console.error("❌ Insert Error:", err);
//     res.status(500).json({ error: "Failed to insert user" });
//   }
// });

// app.get("/api/users2", async (req, res) => {
//   try {
//     const usersCollection = getUsersCollection();
//     const users = await usersCollection.find().toArray();
//     res.json(users);
//   } catch (err) {
//     console.error("❌ GET Error:", err);
//     res.status(500).json({ error: "Failed to fetch users" });
//   }
// });

// app.get('/users1', (req, res) => {
//   // const alterSr = "ALTER TABLE my_table MODIFY COLUMN Sr INT AUTO_INCREMENT PRIMARY KEY;";

//   // db.query(alterSr, (err, results) => {
//   //   if (err) {
//   //     console.error("Error modifying Sr column:", err);
//   //     res.status(500).send({ error: 'Failed to modify Sr column', details: err });
//   //   } else {
//   //     console.log("Sr column modified successfully.");
//   //     res.send({ message: "Sr column modified successfully." });
//   //   }
//   // });
//    const sql = 'SELECT * FROM my_table';

//   db.query(sql, (err, result) => { 
//     if (err) {
//       console.error('Error fetching data from my_table:', err.message);
//       return res.status(500).json({ error: 'Database error: ' + err.message });
//     }

//     if (result.length === 0) {
//       return res.status(404).json({ message: 'No records found in my_table' });
//     }
 
//     res.json(result);
//   });
// });
  

// app.post('/users', (req, res) => {
//   const { Name, Age } = req.body;
// console.log(Name)
//   if (!Name || !Age) {
//     return res.status(400).json({ error: 'Name and Age are required' });
//   }

//   const sql = 'INSERT INTO my_table (Name, Age) VALUES (?, ?)';
//   db.query(sql, [Name, Age], (err, result) => {
//     if (err) {
//       console.error('Error inserting data:', err.message);
//       return res.status(500).json({ error: 'Database error: ' + err.message });
//     }
//      res.status(201).json({ message: 'User added successfully', id: result.insertId });
//   });
//   });

// app.put('/users/:id', (req, res) => {
//   const { id } = req.params;
//   const { Name, Age } = req.body;
// console.log('done')
//   if (!Name || !Age) {
//     return res.status(400).json({ error: 'Name and Age are required' });
//   }

//   const sql = 'UPDATE my_table SET Name = ?, Age = ? WHERE Sr = ?';
//   db.query(sql, [Name, Age, id], (err, result) => {
//     if (err) {
//       console.error('Error updating user:', err.message);
//       return res.status(500).json({ error: 'Database error: ' + err.message });
//     }

//     if (result.affectedRows === 0) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     res.json({ message: 'User updated successfully' });
//   });
// });
// // Fallback route for undefined endpoints


// app.delete('/users/:id', (req, res) => {
//   const { id } = req.params;

//   const sql = 'DELETE FROM my_table WHERE Sr = ?';
//   db.query(sql, [id], (err, result) => {
//     if (err) {
//       console.error('Error deleting user:', err.message);
//       return res.status(500).json({ error: 'Database error: ' + err.message });
//     }

//     if (result.affectedRows === 0) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     res.json({ message: 'User deleted successfully' });
//   });
// });
// app.use((req, res) => {
//   res.status(404).json({ error: 'Route not found11' });
// });
// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
// server.js
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
//import { connectDB, getUsersCollection } from './db1.js';
import { connectDB, getUsersCollection, ObjectId } from './db1.js';

import dotenv from 'dotenv';
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
//app.use(express.static(path.join(__dirname, 'public')));


await connectDB();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Create (POST)
// app.post('/api/users', async (req, res) => {
//   const { name, age, email } = req.body;
//   try {
//     const result = await getUsersCollection().insertOne({ name, age, email });
//     res.status(201).json({ message: 'User added', id: result.insertedId });
//   } catch (err) {
//     console.error('❌ Insert Error:', err);
//     res.status(500).json({ error: 'Insert failed' });
//   }
// });

app.post('/api/users', async (req, res) => {
  const { name, age, email, secret } = req.body; // 🔐 secret key body me hona chahiye
  const expectedSecret = process.env.SECRET_KEY;

  if (!secret || secret !== expectedSecret) {
    return res.status(403).json({ error: 'Unauthorized: Invalid secret key' });
  }

  try {
    const result = await getUsersCollection().insertOne({ name, age, email });
    res.status(201).json({ message: 'User added', id: result.insertedId });
  } catch (err) {
    console.error('❌ Insert Error:', err);
    res.status(500).json({ error: 'Insert failed' });
  }
});
app.get('/api', (req, res) => {
  
  console.log('➡ Serving index.html');
  
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Read All (GET)
app.get('/api/users', async (req, res) => {
  try {
    
    const users = await getUsersCollection().find().toArray();
    res.json(users);
  } catch (err) {
    console.error('❌ Fetch Error:', err);
    res.status(500).json({ error: 'Fetch failed' });
  }
});

// Read by Name (GET)
app.get('/api/users/:name', async (req, res) => {
  try {
    const user = await getUsersCollection().findOne({ name: req.params.name });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Fetch error' });
  }
});

// Update (PUT)
// app.put('/api/users/:id', async (req, res) => {
//   const { name, age, email } = req.body;
//   const { id } = req.params;
//   try {
//     const result = await getUsersCollection().updateOne(
//       { _id: new ObjectId(id) },
//       { $set: { name, age, email } }
//     );
//     if (result.modifiedCount > 0) {
//       res.json({ message: 'User updated' });
//     } else {
//       res.status(404).json({ message: 'User not found or not modified' });
//     }
//   } catch (err) {
//     console.error('❌ Update Error:', err);
//     res.status(500).json({ error: 'Update failed' });
//   }
// });

// Delete (DELETE)
// app.delete('/api/users/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await getUsersCollection().deleteOne({ _id: new ObjectId(id) });
//     if (result.deletedCount > 0) {
//       res.json({ message: 'User deleted' });
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (err) {
//     console.error('❌ Delete Error:', err);
//     res.status(500).json({ error: 'Delete failed' });
//   }
// });
// Update (PUT)
// app.put('/api/users/:id', async (req, res) => {
//   const { name, age, email } = req.body;
//   const { id } = req.params;
//   try {
//     const result = await getUsersCollection().updateOne(
//       { _id: new ObjectId(id) },
//       { $set: { name, age, email } }
//     );
//     if (result.modifiedCount > 0) {
//       res.json({ message: 'User updated' });
//     } else {
//       res.status(404).json({ message: 'User not found or not modified' });
//     }
//   } catch (err) {
//     console.error('❌ Update Error:', err);
//     res.status(500).json({ error: 'Update failed' });
//   }
// });

// Delete (DELETE)
// app.delete('/api/users/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await getUsersCollection().deleteOne({ _id: new ObjectId(id) });
//     if (result.deletedCount > 0) {
//       res.json({ message: 'User deleted' });
//     } else {
//       res.status(404).json({ message: 'User not found' });
//     }
//   } catch (err) {
//     console.error('❌ Delete Error:', err);
//     res.status(500).json({ error: 'Delete failed' });
//   }
// });
app.put('/api/users/:id', async (req, res) => {
  const { name, age, email, secret } = req.body;
  const { id } = req.params;

  // Secret key validation
  if (secret !== SECRET_KEY) {
    return res.status(403).json({ error: 'Unauthorized: Invalid secret key' });
  }

  try {
    const result = await getUsersCollection().updateOne(
      { _id: new ObjectId(id) },
      { $set: { name, age, email } }
    );
    if (result.modifiedCount > 0) {
      res.json({ message: 'User updated' });
    } else {
      res.status(404).json({ message: 'User not found or not modified' });
    }
  } catch (err) {
    console.error('❌ Update Error:', err);
    res.status(500).json({ error: 'Update failed' });
  }
});

// Delete (DELETE) with secret key check
app.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const secret = req.headers['x-secret-key']; // Example: secret passed in header

  // Secret key validation
  if (secret !== SECRET_KEY) {
    return res.status(403).json({ error: 'Unauthorized: Invalid secret key' });
  }

  try {
    const result = await getUsersCollection().deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount > 0) {
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    console.error('❌ Delete Error:', err);
    res.status(500).json({ error: 'Delete failed' });
  }
});
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
