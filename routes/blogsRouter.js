const express = require("express");
const blogsRouter = express.Router();
const Blog = require("../models/Blog.js");

blogsRouter.get("/", async (req, res) => {
    try {
        const data = (await Blog.find()).filter(e => e.privacy === "public");
        res.status(200).json({ status: "ok", data: data });
    } catch (error) {
        console.log(error)
        res.json({ status: "error", error: error.message });
    }
})

module.exports = blogsRouter;