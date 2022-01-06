const mysql = require("mysql2");

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "dbinfo",
};

const connection = mysql.createConnection(dbinfo);

connection.connect();

// QUERY
const user = { name: "virat", password: "adsfasdff" };
let sql = `INSERT INTO user (name, password) values ("${user.name}", "${user.password}")`;
connection.query(sql);

console.log("RECORD ADDED");

connection.end();