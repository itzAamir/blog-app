import React from 'react';
import { Switch, Route } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import NewBlog from "./components/newBlog/NewBlog";
import MyBlogs from "./components/myBlogs/MyBlogs";
import BlogPage from "./components/blogPage/BlogPage";
import EditPage from "./components/editPage/EditPage";
import SettingPage from "./components/settingsPage/SettingsPage";
import ThemesPage from "./components/themesPage/ThemesPage";
import Error from "./components/Error 404";
import axios from "axios";

// Production
// axios.defaults.baseURL = "https://react-blogging-app.herokuapp.com/api";

// Development
axios.defaults.baseURL = "http://localhost:3001/api";

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/registration" component={Registration} />
            <Route path="/login" component={Login} />
            <Route path="/create-blog" component={NewBlog} />
            <Route path="/edit/:id" component={EditPage} />
            <Route path="/my-blogs" component={MyBlogs} />
            <Route path="/blogs/:id" component={BlogPage} />
            <Route path="/settings" component={SettingPage} />
            <Route path="/theme" component={ThemesPage} />
            <Route component={Error} />
        </Switch>
    )
}

export default App
