const express = require('express');
const router = express.Router()

const { Post } = require('../../models/Post');
const { User } = require('../../models/User');


router.get("/", (req, res) => {
    console.log("in get")
    Post.find({})
        .then(posts => {
            res.send(posts);
        })
        .catch(err => {
            console.log("An error occured when fetching all posts from the DB")
        })
})

router.post("/", (req, res) => {
    console.log(req.body);
    let { title, content, user } = req.body;
    let { username, name: author } = user;

    const newPost = new Post({
            username,
            author,
            title,
            content,
            likes: [],
            dislikes: [],
        }
    );
    User.findOne({ username })
        .then(user => {
            console.log(user)
            newPost.save()
                .then(post => {
                    res.send(post)
                })
                .catch(err => {
                    console.log("An error occurred saving the new post to the DB" + err)
                });
        })
        .catch(err => {
            console.log("an error occured while updating User's posts")
        })




});


module.exports = router;