// const mysql = require('mysql2');
import mysql from 'mysql2';
const db = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '12345', // yahan password ho to daalein
  database: 'student1',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

// module.exports = db;
export default db;