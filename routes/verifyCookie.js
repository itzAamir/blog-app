const express = require("express");
const verifyCookieRouter = express.Router();
const jwt = require("jsonwebtoken");

verifyCookieRouter.post("/", async (req, res) => {
    const { cookie } = req.body;
    try {
        const verification = await jwt.verify(cookie, process.env.JWT_SECRET)
        res.json({ status: "ok", data: "user verified" })
    } catch (error) {
        res.status(400).json({ status: "error", error: "invalid signature" })
    }
})

module.exports = verifyCookieRouter;