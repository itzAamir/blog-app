import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import ProfileSection from "../ProfileSection";
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
   const cookie = Cookies.get("uid");

   useEffect(() => {
      if (!cookie) {
         console.log("Not Logged In");
      } else {
         setIsLoggedIn(true);
      }

      const url = `https://blog-app-serve.herokuapp.com/app/blog/${id}`;
      axios
         .get(url)
         .then((res) => {
            setData(res.data.blogs.filter((e) => e._id === id)[0]);
         })
         .catch((err) => console.error(err));
   }, [id, cookie]);

   return (
      <>
         <Navbar />
         <ProfileSection isLoggedIn={isLoggedIn} />
         <section id="blog-page">
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
