const mysql = require("mysql2");

const dbinfo = {
  host: "localhostt",
  user: "root",
  password: "cdac",
  database: "dbinfo",
};

const checkConnection = () => {
  const connection = mysql.createConnection(dbinfo);

  // ASYNC
  connection.connect();

  console.log("CONNECTION SUCCESS");

  // ASYNC
  connection.end();
};

checkConnection();