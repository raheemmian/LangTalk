/*
  Nodejs entry point 
  start by getting express server and mysql
  cors - express middleware
*/

const express = require('express')
const app = express()//server
const mysql = require("mysql")
const cors = require("cors")

//parses all json from the frontend
app.use(express.json())
app.use(cors())

/*
Global database usage 
Allows database usage in any file
*/
global.db = require('./config/db')



/*
  testing the port is running.
*/
const port = 3001
app.listen(port, () => {
  console.log("running on port 3001")
  //res.send("hello world");
})


/*
  Login Page Requests
*/
app.use('/login', require('./routes/Login'));

/*
  Sign Up Page Requests
*/
app.use('/signup', require('./routes/SignUp'));


/*
  Home Page Requests
*/
app.use('/home', require('./routes/Home'));

