const express = require("express");
const loginRouter = express.Router();
const bcrypt = require("bcryptjs");
const Register = require("../models/Registers.js");
const jwt = require("jsonwebtoken");

loginRouter.post("/", async (req, res) => {
    const { email, password } = req.body;
    const user = await Register.findOne({ email: email });
    if (user !== null) {
        const validUser = await bcrypt.compare(password, user.password);
        if (validUser) {
            token = await jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
                expiresIn: "1d"
            });

            res.cookie("uid", token, {
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
                httpOnly: false
            });

            res.status(200).json({ status: "ok", data: "login verified" });
        } else {
            res.json({ status: "error", data: "incorrect email/password" })
        }
    } else {
        res.json({ status: "error", data: "incorrect email/password" })
    }
})

module.exports = loginRouter;