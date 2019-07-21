const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require('../../../config/middleware/auth')

const { User } = require('../../../models/User')

router.get('/user', auth, (req, res) => {
    User.findById(req.userData.id)
        .select("-password")
        .then(user => res.json(user));
})


router.post('/', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({msg: "please enter all fields"});
    }

    User.findOne({ username })
        .then(user => {
            if (!user) return res.status(400).json({msg: "User does not exist"})


        bcrypt.compare(password, user.password)
            .then(isMatch => {
                if(!isMatch) return res.status(400).json({msg: 'Invalid credentials'})

                jwt.sign(
                    { id: user.id }, //payload
                    config.get('jwtSecret'), //jwt key
                    { expiresIn: 3600 }, //how long till it expires
                    (err, token) => {
                        if (err) throw err;

                        res.json({
                            token,
                            user: {
                                id: user.id,
                                name: user.name,
                                email: user.email
                            }
                        });
                    }
                )
            })
        });


});

module.exports = router;