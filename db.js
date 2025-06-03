// const mysql = require('mysql2');
import mysql from 'mysql2';
const db = mysql.createConnection({
  
 host: "yourproject.up.railway.internal", // ✅ Private internal hostname
  port: 3306,
  user: "root",
  password: "hFxQGDypVhtzFLcPMJGnVgiIstIudTIN",
  database: "railway",


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