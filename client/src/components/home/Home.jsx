import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import BlogWrapper from "./BlogWrapper";
import ProfileSection from "../ProfileSection";
import "./home.css";

const Home = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(true);
   const [sideBarState, setSideBarState] = useState("hide");
   const history = useHistory();
   const theme = localStorage.getItem("theme-mode");

   useEffect(() => {
      const cookie = Cookies.get("uid");
      if (cookie === undefined) {
         setIsLoggedIn(false);
      } else {
         axios
            .post("/verifyCookie", {
               cookie,
            })
            .then((res) => {
               if (res.data.status !== "ok") {
                  setIsLoggedIn(false);
               }
            })
            .catch((err) => console.error(err));
      }
      return "";
   }, [history]);

   const handleToggle = () => {
      if (sideBarState === "hide") {
         setSideBarState("show");
      } else {
         setSideBarState("hide");
      }
   };

   return (
      <section id="home-section">
         <Navbar onToggle={handleToggle} navState={sideBarState} />
         <div className="main-section">
            <ProfileSection isLoggedIn={isLoggedIn} navState={sideBarState} />
            <div className={`blogs-section ${theme === "dark" && "bg-dark"}`}>
               <BlogWrapper />
            </div>
         </div>
      </section>
   );
};

export default Home;
