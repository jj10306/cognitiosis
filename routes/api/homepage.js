const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const config = require("config");
const jwt = require("jsonwebtoken");

const { User } = require('../../models/User')
const { Profile } = require('../../models/Profile')
const auth = require('../../config/middleware/auth')
router.get('/', auth, (req, res) => {
    res.send('yo')
});
router.post('/', (req, res) => {
    const { name, email, username, password } = req.body;

    console.log(req.body);

    if (!name || !email || !username || !password) {
        return res.status(400).json({msg: "please enter all field"});
    }

    User.findOne({ username })
        .then(user => {
            console.log(user);
            if (user) return res.status(400).json({msg: "User w/ that username already exists"})

            const newUser = new User({
                name, email, username, password
            });
            const newProfile = new Profile({
                username,
                posts: [],
                teachers: [],
                students: []
            });

            // Create salt and hash
            bcrypt.genSalt(10, (err, salt) => {

                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;

                    newUser.password = hash;
                    newProfile.save();
                    newUser.save()
                        .then(user => {

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
        });


});

module.exports = router;