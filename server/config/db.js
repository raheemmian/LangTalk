const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "langtalk",
})

conn.connect((err) => {
    if (err) {
        console.log('error connecting ' + err.stack)
    } else {
        console.log('connected to mysql database')
    }

})

module.exports = conn;