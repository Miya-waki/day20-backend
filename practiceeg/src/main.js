const express = require("express");
const app = express();
app.use(express.json());
const {selectAlluser} = require("./user.js")

app.get("/users", async (req,res)=>{
    const list =  await selectAlluser();
    console.log(list);
    res.json(list);



});
app.listen(4000,()=>{
    console.log("server start");
})
