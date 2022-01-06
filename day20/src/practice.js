const mysql= require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
const dbinfo ={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"dbinfo",
};
async function connectionCheck(){
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("Connection Sucess!!");
    await connection.endAsync();

}
async function addUSer(user){
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("Connection Sucess!!");
    let sql =`insert into user(id,name,password) values(?,?,?)`;
    await connection.queryAsync(sql,[user.id,user.name,user.password]);
    await connection.endAsync();
    console.log("record added");

}

//connectioncheck();
const user ={ name:"rahul",password:"cdac"};
addUSer(user);
