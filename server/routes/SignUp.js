const express = require('express');
const router = express.Router();


// insert the sign up data in the database.
router.post('/insert', (req, res) => {

    const username = req.body.username
    const password = req.body.password
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const role = req.body.role

    db.query("insert into users (username, password, firstname, lastname, role) values (?,?,?,?,?);", [username, password, firstname, lastname, role],
        (err, result) => {
            if (err) {
                console.log(err)
            }
        })
})
// check if the user already exists.
router.post('/user', (req, res) => {
    const username = req.body.username;
    console.log(username)
    db.query("select username from users where username = ?", username, (err, results, fields) => {
        if (err) {
            console.log(err)
        }
        else if (results.length > 0) { //if user found then send true
            res.send(true)
        }
        //var rows = JSON.parse(JSON.stringify(results[0]))
        else {
            res.send(false)
        }
    })
})

module.exports = router;