import React from 'react';
import { Switch, Route } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import NewBlog from "./components/newBlog/NewBlog";
import MyBlogs from "./components/myBlogs/MyBlogs";
import BlogPage from "./components/blogPage/BlogPage";
import Error from "./components/Error 404";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/app";

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/registration" component={Registration} />
            <Route path="/login" component={Login} />
            <Route path="/create-blog" component={NewBlog} />
            <Route path="/my-blogs" component={MyBlogs} />
            <Route path="/blogs/:id" component={BlogPage} />
            <Route component={Error} />
        </Switch>
    )
}

export default App
