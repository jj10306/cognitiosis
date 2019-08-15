const express = require('express');
const router = express.Router()

const { Post } = require('../../models/Post');
const { User } = require('../../models/User');


router.put("/", (req, res) => {
    // let id = req.query.id;
    console.log(1);
    res.send("yo");
})



module.exports = router;