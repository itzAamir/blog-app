import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import ProfileSection from "../ProfileSection";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import "./MyBlogs.css";
import MyBlogCards from "./MyBlogCards";

const MyBlogs = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [card, setCard] = useState("");
   const cookie = Cookies.get("uid");
   const history = useHistory();

   useEffect(() => {
      if (cookie) {
         setIsLoggedIn(true);
         let uid = JSON.parse(atob(cookie.split(".")[1])).id;
         axios
            .get(`/user-blogs/${uid}`)
            .then((res) => {
               setCard(
                  res.data.data.map((e) => <MyBlogCards key={e._id} data={e} />)
               );
            })
            .catch((err) => console.error(err));
      } else {
         history.push("/login");
      }
   }, [cookie, history]);

   return (
      <>
         <Navbar />
         <ProfileSection isLoggedIn={isLoggedIn} />
         <section id="my-blogs-section">
            <div className="blog-wrapper">{card}</div>
         </section>
      </>
   );
};

export default MyBlogs;
