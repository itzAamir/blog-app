const express = require("express");
const blogsRouter = express.Router();
const Register = require("../models/Registers.js");

blogsRouter.get("/", async (req, res) => {
    try {
        const data = await Register.find().select("blogs")
        res.status(200).json({ status: "ok", data: data });
    } catch (error) {
        console.log(error)
        res.json({ status: "error", error: error.message });
    }
})

module.exports = blogsRouter;