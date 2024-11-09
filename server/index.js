const express = require("express")
const dotenv = require("dotenv");
dotenv.config();
const app = express()
const port = process.env.PORT  || 5000;
//Making routes
app.get("/",(req,res)=>{
    res.send("server Running...")
})
app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})