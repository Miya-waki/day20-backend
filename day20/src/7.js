const mysql = require("mysql2");
const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "dbinfo",
};

const addUser = (user) => {
  const connection = mysql.createConnection(dbinfo);

  connection.connect();

  // ANYONE CAN HACK THIS. ::  SQL INJECTION
  // let sql = `INSERT INTO user (username, password) values ("${user.username}", "${user.password}")`;
  let sql = `INSERT INTO user (name, password) values (?, ?)`;
  connection.query(sql, [user.name, user.password]); // MASKING THE QUERY PARAMES

  console.log("USER ADDED");

  connection.end();
};

const user = { name: "CDAC", password: "asfasdfsadfd" };
addUser(user);