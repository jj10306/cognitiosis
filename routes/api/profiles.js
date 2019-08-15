const express = require('express')
const router = express.Router()

const { Profile } = require('../../models/Profile')
const { User} = require('../../models/User')

router.get('/', (req,res) => {
    console.log(1);
    res.send("in da cut")
    let username = req.query.username;
    console.log(username)
    Profile.findOne({ username })
        .then(profile => {
            res.send(profile);
            }
        )
})

module.exports = router;