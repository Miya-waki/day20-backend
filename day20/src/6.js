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

  let sql = `INSERT INTO user (name, password) values ("${user.name}", "${user.password}")`;
  connection.query(sql);

  connection.end();
};

// CALLING THE METHOD
const user = { name: "ABCD", password: "asdfadfasf" };
addUser(user);
// addUser({ ...user, username: "pqrs" });