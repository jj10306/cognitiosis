const mongoose = require('mongoose');
const { UserSchema } = require('./User')
const { PostSchema } = require('./Post')
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    posts: {
        type: [PostSchema],
        required: true
    },
    teachers: {
        type: [UserSchema],
        required: true
    },
    students: {
        type: [UserSchema],
        required: true
    }

});

module.exports = {
    ProfileSchema,
    Profile: mongoose.model('profile', ProfileSchema)
};