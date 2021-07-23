const express = require('express')
const app = express()//server
const mysql = require("mysql")
const cors = require("cors")
global.db = require('./config/db')
//parses all json from the frontend
app.use(express.json())
app.use(cors())


//login
app.use('/login', require('./routes/login'));

const port = 3001
app.get('/', function (req, res) {
    res.send('hello world')
  })

app.listen(port, () => {
    console.log("running on port 3001")
    //res.send("hello world");
})
