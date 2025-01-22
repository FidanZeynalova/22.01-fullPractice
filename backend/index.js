const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
const  route  = require("./routes/routes")

app.use(cors())
dotenv.config()
app.use(express.json())

require("./config/config")
app.use("/shop",route)

app.listen(process.env.port,()=>{
    console.log("Listen 5050 port");
})