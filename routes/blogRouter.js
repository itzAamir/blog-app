const express = require("express");
const blogRouter = express.Router();
const Blog = require("../models/Blog.js");

blogRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Blog.findById(id);
        res.status(200).json({ status: "ok", data })
    } catch (error) {
        res.send(error)
    }
});

blogRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Blog.findByIdAndDelete(id);
        res.status(200).json({ status: "ok", data: "Deleted" });
    } catch (error) {
        res.send(error);
    }
});

module.exports = blogRouter;