const express = require("express");
const bcrypt = require("bcryptjs");
const registerRouter = express.Router();
const Register = require("../models/Registers.js");

registerRouter.post("/", async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    let register = new Register({
        username,
        email,
        password: hashedPass
    });
    try {
        const result = await register.save();
        res.status(201).json({ status: "ok", data: result });
    } catch (error) {
        if (error.code === 11000) {
            if (Object.entries(error.keyPattern)[0][0] === "username") {
                res.json({ status: "error", error: "username already exist" });
            } else if (Object.entries(error.keyPattern)[0][0] === "email") {
                res.json({ status: "error", error: "email already exist" });
            }

        } else {
            res.json({ status: "error", error: error.message });
        }
    }
})

module.exports = registerRouter;