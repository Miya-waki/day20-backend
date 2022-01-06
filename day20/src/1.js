//1
const mysql      = require("mysql2");
//2 database information
const dbinfo ={
  host:     "localhost",
  user:      "root",
  password: "cdac",
  database:  "dbinfo",
};

//const connection = mysql.createConnection();
//3
const connection = mysql.createConnection(dbinfo);

//4
connection.connect();

//query
console.log("connection success!!!1");

//last step
connection.end();



