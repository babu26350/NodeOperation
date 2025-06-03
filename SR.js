// updateSr.js
import db from './db.js'; // Adjust path if your db connection file is elsewhere

const updateSr = () => {
  const alterQuery = `
    ALTER TABLE new_table MODIFY sr INT NOT NULL AUTO_INCREMENT
  `;

  db.query(alterQuery, (err, result) => {
    if (err) {
      console.error("Error updating 'sr' column:", err.message);
    } else {
      console.log("'sr' column updated to AUTO_INCREMENT successfully.");
    }
    db.end(); // Always close connection after query
  });
};

updateSr();
