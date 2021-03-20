import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import ProfileSection from "../ProfileSection";
// import CommentSection from "../CommentSection";
import "./BlogPage.css";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

// Todo -> Add tags feature

const BlogPage = () => {
   const { id } = useParams();
   const [data, setData] = useState("");
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [sideBarState, setSideBarState] = useState("hide");
   const cookie = Cookies.get("uid");
   const theme = localStorage.getItem("theme-mode");

   useEffect(() => {
      if (!cookie) {
         console.log("Not Logged In");
      } else {
         setIsLoggedIn(true);
      }

      const url = `/blog/${id}`;
      axios
         .get(url)
         .then((res) => {
            setData(res.data.data);
         })
         .catch((err) => console.error(err));
   }, [id, cookie]);

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
         <section
            id="blog-page"
            className={theme === "dark" ? "bg-dark" : null}
            style={{ color: theme === "dark" && "white" }}
         >
            <div className="blog-title">
               <h2>{data.title}</h2>
               <span className="text-muted">
                  Published At:{" "}
                  {`${new Date(data.createdAt).toLocaleDateString()} ${new Date(
                     data.createdAt
                  ).toLocaleTimeString()}`}
               </span>
            </div>
            <hr />
            <div className="blog-content">
               <Markdown>{data.markdown}</Markdown>
            </div>
         </section>
      </>
   );
};

export default BlogPage;
