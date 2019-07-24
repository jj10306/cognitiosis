const mongoose = require('mongoose');
const { UserSchema } = require('./User')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
      type: String,
      required: true
    },
    likes: {
        type: [UserSchema],
        required: true
    },
    dislikes: {
        type: [UserSchema],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = {
    PostSchema,
    Post: mongoose.model('post', PostSchema)
};