const express = require('express')
const app = express()//server
const mysql = require("mysql")
const cors = require("cors")

//parses all json from the frontend
app.use(express.json())
app.use(cors())

const Port = 3001

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "langtalk",
})

db.connect((err) => {
    if (err) {
        console.log('error connecting ' + err.stack)
    } else {
        console.log('connected')
    }

})



app.listen(Port, () => {
    console.log("running on port 3001")
})
