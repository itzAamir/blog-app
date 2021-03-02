const express = require("express");
const blogRouter = express.Router();
const Register = require("../models/Registers.js");

blogRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Register.findOne({ "blogs._id": id });
        res.send(data);
    } catch (error) {
        res.send(error)
    }
});

blogRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Register.deleteOne({ "blogs._id": id });
        res.send(result);
    } catch (error) {
        res.send(error);
    }
});

module.exports = blogRouter;