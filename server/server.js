require("dotenv").config()
const express = require("express")
const cors = require("cors")
const colors = require("colors")
const connectDB = require("./config/db")

const app = express()

//=====ConnectDatabase======
connectDB()

const PORT = 4000
app.listen(PORT, console.log(`Server Running on Port ${PORT}`.yellow.bold))
