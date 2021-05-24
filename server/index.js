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

db.connect((err) =>{
    if (err) {
        console.log('error connecting ' + err.stack)
    }else{
        console.log('connected')
    }

})

//---------------login and sign up page --------------------------------//

app.post('/user', (req, res) => {
    const username = req.body.username;
    console.log(username)
    db.query( "select username from users where username = ?", username, (err,results,fields) => {
        if(err) {
            console.log(err)
        }
        else if (results.length > 0) {
            res.send(true)
        }
        //var rows = JSON.parse(JSON.stringify(results[0]))
        else {
            res.send(false)
        }
    })
})

app.post('/login', (req,res) => {
    const username = req.body.username
    const password = req.body.password

    db.query("select username, password from users where username = ? and password = ?", [username, password], (err, results) => {
        if(err){ 
            console.log(err)
        }
        else if(results.length > 0){
            res.send(true)
        }else{
            res.send(false)
        }
    })

})

app.post('/register', (req, res) => {

    const username = req.body.username
    const password = req.body.password
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const role = req.body.role

    db.query("insert into users (username, password, firstname, lastname, role) values (?,?,?,?,?);", [username, password, firstname, lastname, role], 
    (err, result) => {
        console.log(err)
    })
})

//--------------- EO login and sign up page --------------------------------//

app.listen(Port, () => {
    console.log("running on port 3001")
})
