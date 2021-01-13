var mysql = require('mysql');

// create connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'soul-blog',
});

conn.connect(err => {
  if (err) throw err;
  console.log('Success connect to mysql database');
});

module.exports = conn;
