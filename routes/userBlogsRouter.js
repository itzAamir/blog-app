const express = require("express");
const userBlogsRouter = express.Router();
const Register = require("../models/Registers.js");

userBlogsRouter.get("/:uid", async (req, res) => {
    const { uid } = req.params;
    try {
        const user = await Register.findById(uid);
        res.status(200).json({ status: "ok", data: user.blogs });
    } catch (error) {
        console.log(error)
        res.json({ status: "error", error: error.message })
    }
})

module.exports = userBlogsRouter;