const mongoose = require("mongoose");

// TODO -> Create tags schema, user-profile-pic

const BlogSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
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

module.exports = mongoose.model("Blog", BlogSchema);
