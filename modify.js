import mysql from 'mysql2';

// Database connection setup
const db = mysql.createConnection({
  host: "mysql-production-dc95.up.railway.app",  // apna host yahan daalo
  port: 3306,
  user: "root",                                  // apna user yahan daalo
  password: "hFxQGDypVhtzFLcPMJGnVgiIstIudTIN",// apna password yahan daalo
  database: "railway",                           // apna database name yahan daalo
});

db.connect((err) => {
  if (err) {
    console.error("Connection error:", err);
    return;
  }
  console.log("Connected to MySQL database.");

  // ALTER TABLE queries
  const alterAge = "ALTER TABLE your_table_name MODIFY COLUMN Age INT;";
  const alterName = "ALTER TABLE your_table_name MODIFY COLUMN Name VARCHAR(255);";

  // Pehle Age column modify karo
  db.query(alterAge, (err, results) => {
    if (err) {
      console.error("Error modifying Age column:", err);
    } else {
      console.log("Age column modified successfully.");
      
      // Ab Name column modify karo
      db.query(alterName, (err, results) => {
        if (err) {
          console.error("Error modifying Name column:", err);
        } else {
          console.log("Name column modified successfully.");
        }
        db.end();
      });
    }
  });
});
