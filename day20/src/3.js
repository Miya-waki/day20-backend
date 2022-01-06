const mysql = require("mysql2");

const rag = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "dbinfo",
};

const connection = mysql.createConnection(rag);

connection.connect();

// QUERY
let sql = `INSERT INTO user (name, password) values ("rahul", "rohitkapadfasfsa")`;
connection.query(sql);

console.log("RECORD ADDED");

connection.end();
