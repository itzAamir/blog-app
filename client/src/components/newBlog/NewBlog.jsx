import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import ProfileSection from "../ProfileSection";
import "./newBlog.css";
import Form from "./Form";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const NewBlog = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(true);
   const [uid, setUid] = useState("");
   const [username, setUsername] = useState("");
   const [sideBarState, setSideBarState] = useState("hide");
   const history = useHistory();

   useEffect(() => {
      const cookie = Cookies.get("uid");
      if (cookie === undefined) {
         setIsLoggedIn(false);
         history.push("/login");
      } else {
         setUid(JSON.parse(atob(cookie.split(".")[1])).id);
         setUsername(JSON.parse(atob(cookie.split(".")[1])).username);
      }
   }, [history]);

   const handleSubmit = (data, e) => {
      e.preventDefault();
      const { titleRef, descRef, markdownRef } = data;
      const title = titleRef.current.value;
      const desc = descRef.current.value;
      const markdown = markdownRef.current.value;
      const privacy = e.target.elements["inlineRadioOptions"].value;
      if (title.length <= 3 || desc.length <= 3 || markdown.length <= 3) {
         alert("Please Increase the length of characters");
      } else {
         const params = {
            author: username,
            title,
            description: desc,
            markdown,
            privacy,
         };
         axios
            .post(`/newblog/${uid}`, params)
            .then((res) => {
               e.target.reset();
               alert(res.data.status);
               history.push("/my-blogs");
            })
            .catch((err) => alert(err));
      }
   };

   const handleToggle = () => {
      if (sideBarState === "hide") {
         setSideBarState("show");
      } else {
         setSideBarState("hide");
      }
   };

   return (
      <>
         <Navbar onToggle={handleToggle} navState={sideBarState} />
         <ProfileSection isLoggedIn={isLoggedIn} navState={sideBarState} />
         <section id="new-blog-section">
            <h1>New Article</h1>
            <Form onSubmit={handleSubmit} />
         </section>
      </>
   );
};

export default NewBlog;
