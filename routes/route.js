const express = require("express");
const router = express.Router();
const registerRouter = require("./register.js");
const loginRouter = require("./login.js");
const newBlogRouter = require("./newBlog.js");
const verifyCookieRouter = require("./verifyCookie.js");
const userBlogsRouter = require("./userBlogsRouter.js");
const blogsRouter = require("./blogsRouter.js");
const blogRouter = require("./blogRouter.js");

// @route POST -> /app/register -> home
router.use("/register", registerRouter);

// @route POST -> /app/login -> home
router.use("/login", loginRouter);

// @route POST -> /app/verifyCookie -> home
router.use("/verifyCookie", verifyCookieRouter);

// @route GET -> /app/blogs -> send all the blogs of users
router.use("/blogs", blogsRouter);

// @route GET -> /app/blogs/:uid -> send all the blogs of single user
router.use("/user-blogs", userBlogsRouter);

// @route Patch -> /app/blogs/:uid -> store the blog uploaded by user with id
router.use("/newblog", newBlogRouter);

// @route GET -> /app/blog/:id -> send single blog data of given id
router.use("/blog", blogRouter);

module.exports = router;