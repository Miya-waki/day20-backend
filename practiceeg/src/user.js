const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "my_database",
};

async function checkconnection(){
    const  Connection= mysql.createConnection(dbinfo);
   await Connection.connectAsync();
   console.log("connection sucessful");

  await Connection.endAsync();
};

async function adduser(user){
    const  Connection= mysql.createConnection(dbinfo);
   await Connection.connectAsync();
   console.log("connection sucessful");
   const sql= `insert into user values(?,?,?,?);`;
  await Connection.queryAsync(sql,[user.id,user.name,user.password,user.number]);


  await Connection.endAsync();
};

// checkconnection();
const data1 = {id:1,name:"rahul",password:"rahul@123",number:"7579107000"};
const selectAlluser = async() =>{
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("sucessfulll");
    const sql =`select*from user`;
    const list = await connection.queryAsync(sql,[]);
    console.log(list);
    await connection.endAsync();
    return list;
};

// selectAlluser();
// adduser(data1);
module.exports={selectAlluser};