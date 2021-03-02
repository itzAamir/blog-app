const express = require("express");
const newBlogRouter = express.Router();
const Register = require("../models/Registers.js");

newBlogRouter.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { author, title, description, markdown, privacy } = req.body;

    const blogs = {
        author, title, description, markdown, privacy
    }

    try {
        let user = await Register.findByIdAndUpdate(
            { _id: id },
            { $push: { blogs: blogs } },
        )
        res.status(201).json({ status: "ok", data: "Blog uploaded!" });
    } catch (error) {
        res.json({ status: "error", error: error.message })
    }
});


module.exports = newBlogRouter;