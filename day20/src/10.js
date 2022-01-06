const mysql = require("mysql2");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "dbinfo",
};

const addUser = async (user) => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `INSERT INTO user (username, password) values (?, ?)`;
  connection.queryAsync(sql, [user.username, user.password]);
  console.log("Record Added!");

  await connection.endAsync();
};

const user = { name: "rohit1", password: "adsfadfasfdas" };
addUser(user);