import React, { useEffect, useState } from "react";
import "./themes.css";
import Navbar from "../Navbar";
import ProfileSection from "../ProfileSection";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const ThemesPage = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [sideBarState, setSideBarState] = useState("hide");
   const cookie = Cookies.get("uid");
   const history = useHistory();

   useEffect(() => {
      if (cookie) {
         setIsLoggedIn(true);
      } else {
         history.push("/");
      }
   }, [cookie, history]);

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
         <section id="themes-page">
            <h1>Themes page is under development 🥺 </h1>
         </section>
      </>
   );
};

export default ThemesPage;
