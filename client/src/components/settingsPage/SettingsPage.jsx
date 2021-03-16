import React, { useEffect, useState } from "react";
import "./settings.css";
import Navbar from "../Navbar";
import ProfileSection from "../ProfileSection";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const SettingsPage = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [sideBarState, setSideBarState] = useState("hide");
   const cookie = Cookies.get("uid");
   const history = useHistory();
   const theme = localStorage.getItem("theme-mode");

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
         <section
            id="settings-page"
            className={theme === "dark" ? "bg-dark" : null}
            style={{ color: theme === "dark" && "white" }}
         >
            <h2>Settings page is under development 🥺 </h2>
         </section>
      </>
   );
};

export default SettingsPage;
