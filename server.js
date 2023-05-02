const express = require('express');
const mysql = require('mysql');
const app = express();

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database-name'
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL server');
});

// Create a table for storing contact form data if it doesn't exist
const createTableQuery = `CREATE TABLE IF NOT EXISTS messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  message TEXT
)`;

connection.query(createTableQuery, (err) => {
  if (err) throw err;
  console.log('Table created or already exists');
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;
  const insertQuery = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
  connection.query(insertQuery, [name, email, message], (err) => {
    if (err) throw err;
    console.log('Message saved to database');
    res.send('Message sent successfully');
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

