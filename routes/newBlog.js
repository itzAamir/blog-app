const express = require("express");
const newBlogRouter = express.Router();
const mongoose = require("mongoose");
const Blog = require("../models/Blog.js");

newBlogRouter.post("/:uid", async (req, res) => {
    const { uid } = req.params;
    const { author, title, description, markdown, privacy } = req.body;

    const blogs = {
        userId: uid,
        author, title, description, markdown, privacy
    }

    try {
        const newBlog = new Blog(blogs);
        const result = await newBlog.save();
        res.status(201).json({ status: "Blog Uploaded", data: result });
    } catch (error) {
        console.log(error);
        res.json({ status: "error", error: error.message })
    }
});

newBlogRouter.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { title, description, markdown, privacy } = req.body;
    const params = {
        title, description, markdown, privacy
    };
    try {
        const result = await Blog.findByIdAndUpdate(id, params);
        res.json({ status: "ok", data: "Blog Updated" });
    } catch (error) {
        res.json({ status: "error", data: error.message });
    }
})

module.exports = newBlogRouter;