import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import ProfileSection from "../ProfileSection";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import "./MyBlogs.css";
import MyBlogCards from "./MyBlogCards";
import NoData from "../NoData";

const MyBlogs = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [sideBarState, setSideBarState] = useState("hide");
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
               if (res.data.data.length === 0) {
                  setCard(<NoData />);
               } else {
                  setCard(
                     res.data.data.map((e) => (
                        <MyBlogCards key={e._id} data={e} />
                     ))
                  );
               }
            })
            .catch((err) => console.error(err));
      } else {
         history.push("/login");
      }
   }, [cookie, history, card]);

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
         <section id="my-blogs-section">
            <div className="blog-wrapper">{card}</div>
         </section>
      </>
   );
};

export default MyBlogs;
