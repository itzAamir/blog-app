const express = require("express");
const newBlogRouter = express.Router();
const mongoose = require("mongoose");
const Blog = require("../models/Blog.js");

newBlogRouter.patch("/:uid", async (req, res) => {
    const { uid } = req.params;
    const { author, title, description, markdown, privacy } = req.body;

    const blogs = {
        userId: uid,
        author, title, description, markdown, privacy
    }

    try {
        const newBlog = new Blog(blogs);
        const result = await newBlog.save();
        res.status(201).json({ status: "ok", data: "Blog Uploaded" });
    } catch (error) {
        res.json({ status: "error", error: error.message })
    }
});


module.exports = newBlogRouter;