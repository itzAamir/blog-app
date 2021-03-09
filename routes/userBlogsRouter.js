const express = require("express");
const userBlogsRouter = express.Router();
const Blog = require("../models/Blog.js");

userBlogsRouter.get("/:uid", async (req, res) => {
    const { uid } = req.params;
    try {
        const blogs = await Blog.find({ userId: uid });
        res.status(200).json({ status: "ok", data: blogs });
    } catch (error) {
        console.log(error.message)
        res.json({ status: "error", error: error.message })
    }
})

module.exports = userBlogsRouter;