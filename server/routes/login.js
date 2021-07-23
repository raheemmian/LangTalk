const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.query("select username, password from users where username = ? and password = ?", [username, password], (err, result) => {
        if (err) {
            console.log(err)
        }
        else if (result.length > 0) { //send true if there is a match in the database
            res.send(true)
        } else {
            res.send(false)
        }
    })
    console.log("hel;l")
});

module.exports = router;