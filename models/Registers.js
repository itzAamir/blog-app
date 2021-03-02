const mongoose = require("mongoose");

// TODO -> Create tags schema, user-profile-pic

const BlogSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    markdown: {
        type: String,
        required: true
    },
    privacy: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const RegisterSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    blogs: [BlogSchema]
});

module.exports = mongoose.model("User", RegisterSchema);