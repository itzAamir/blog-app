import React, { useEffect, useState } from "react";
import "./themes.css";
import Navbar from "../Navbar";
import ProfileSection from "../ProfileSection";
import Cookies from "js-cookie";
import DropDown from "./Dropdown";
import { useHistory } from "react-router-dom";

const ThemesPage = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [sideBarState, setSideBarState] = useState("hide");
   const cookie = Cookies.get("uid");
   const history = useHistory();
   const theme = localStorage.getItem("theme-mode");
   const [themeMode, setThemeMode] = useState("");

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

   const handleThemeChange = (e) => {
      const mode = e.target.innerText.toLowerCase();
      if (mode === "light mode") {
         setThemeMode("light");
         localStorage.setItem("theme-mode", "light");
      } else if (mode === "dark mode") {
         setThemeMode("dark");
         localStorage.setItem("theme-mode", "dark");
      }
   };

   return (
      <>
         <Navbar onToggle={handleToggle} navState={sideBarState} />
         <ProfileSection isLoggedIn={isLoggedIn} navState={sideBarState} />
         <section
            id="themes-page"
            className={theme === "dark" ? "bg-dark text-white" : null}
         >
            <div className="theme-illustration">
               <div className={theme === "dark" ? "working" : "sleeping"}></div>
            </div>
            <p className="mb-5 equal-width">
               {theme === "light" ? (
                  <>
                     {" "}
                     <b>Want to wake him up?</b> Change the theme to dark-mode
                     👇{" "}
                  </>
               ) : (
                  <b>Better 😉 </b>
               )}
            </p>
            <DropDown
               onThemeChange={handleThemeChange}
               currentTheme={themeMode}
            />
            <em className="equal-width">
               *Theme settings will be saved for your next visit
            </em>
         </section>
      </>
   );
};

export default ThemesPage;
