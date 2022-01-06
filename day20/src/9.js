const mysql = require("mysql2");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhostt",
  user: "root",
  password: "cdac",
  database: "dbinfo",
};

const checkConnection = async () => {
  const connection = mysql.createConnection(dbinfo);

  // ASYNC
  await connection.connectAsync();

  // ...
  console.log("CONNECTION SUCCESS");

  // ASYNC
  await connection.endAsync();
};

checkConnection();