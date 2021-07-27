const express = require('express');
const router = express.Router();

router.post('/favorites', (req, res) => {
    // gets the users favorites, gets the first name, last name and the language name they teach
    const username = req.body.username
    const q = 'select users.firstname, users.lastname, languageTable.languageName ' +
        'from users, language, languageTable ' +
        'where language.languageID = languageTable.languageID and users.userID = language.userID and users.userID in ( ' +
        'select favID ' +
        'from users, favorites ' +
        'where users.userID = favorites.userID and users.username = ?);'

    db.query(q, [username],
        (err, result) => {
            let d = []
            if (err) {
                console.log(err)
            }
            else if (result.length == 0) { 
                //empty list
                res.send([])
            }
            else {
                Object.keys(result).forEach((key) => {
                    var row = result[key]
                    if (d.length == 0) {
                        var o = {
                            title: row.languageName,
                            data: [row.firstname + ' ' + row.lastname]
                        }
                        d.push(o)
                    }
                    else {
                        let obj = d.find((o, i) => {
                            if (o.title == row.languageName) {
                                d[i].data.push(row.firstname + ' ' + row.lastname)
                                return true
                            }
                        });
                        if (typeof obj == 'undefined') {
                            var o = {
                                title: row.languageName,
                                data: [row.firstname + ' ' + row.lastname]
                            }
                            d.push(o)
                        }
                    }
                })
                res.send(d)
            }
        })
})

module.exports = router;