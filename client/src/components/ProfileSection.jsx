import React, { useState, useEffect } from "react";
import PostAddIcon from "@material-ui/icons/PostAdd";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PaletteIcon from "@material-ui/icons/Palette";
import SettingsIcon from "@material-ui/icons/Settings";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import HomeIcon from "@material-ui/icons/Home";

const LoggedOut = () => {
   return (
      <div className="logged-out-profile-section">
         <p>
            <b>
               <a href="/login">login</a> to become cool
            </b>
         </p>
      </div>
   );
};

const ProfileSection = ({ isLoggedIn, navState }) => {
   const [username, setUsername] = useState("");
   const [screenWidth, setScreenWidth] = useState(window.innerWidth);

   const handleLogout = () => {
      document.title = "Logging Out...";
      document.cookie = "uid= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
      window.location = "/";
      document.title = "Blog-App";
   };

   useEffect(() => {
      const cookie = Cookies.get("uid");
      if (cookie !== undefined) {
         setUsername(JSON.parse(atob(cookie.split(".")[1])).username);
      }

      const screenSetter = () => {
         setScreenWidth(window.innerWidth);
      };

      window.addEventListener("resize", screenSetter);
      return () => window.removeEventListener("resize", screenSetter);
   }, []);
   const picUrl = `https://ui-avatars.com/api/?name=${username}&rounded=true&bold=true&background=e4e2e2&color=6c757d&length=2&size=50`;

   return (
      <>
         <div className={`profile-section ${navState}`}>
            {!isLoggedIn ? (
               <LoggedOut />
            ) : (
               <>
                  <div className="user-info">
                     <img src={picUrl} alt="profile" />
                     <h4>{username}</h4>
                  </div>
                  <hr />
                  <div className="new-blog-btn-wrapper">
                     <NavLink
                        to={{
                           pathname: "/create-blog",
                        }}
                        className="btn btn-primary"
                     >
                        <PostAddIcon /> CREATE NEW BLOG
                     </NavLink>
                  </div>
                  <hr />
                  <div className="profile-section-utils">
                     <NavLink
                        to={{
                           pathname: "/",
                        }}
                     >
                        <span className="profile-section-utils-icons">
                           <HomeIcon />
                        </span>
                        Home
                     </NavLink>
                     <NavLink
                        to={{
                           pathname: "/my-blogs",
                        }}
                     >
                        <span className="profile-section-utils-icons">
                           <FileCopyIcon />
                        </span>
                        My Blogs
                     </NavLink>
                     <NavLink
                        to={{
                           pathname: "/theme",
                        }}
                     >
                        <span className="profile-section-utils-icons">
                           <PaletteIcon />
                        </span>
                        Themes
                     </NavLink>
                     <NavLink
                        to={{
                           pathname: "/settings",
                        }}
                     >
                        <span className="profile-section-utils-icons">
                           <SettingsIcon />
                        </span>
                        Settings
                     </NavLink>
                  </div>
               </>
            )}
            {isLoggedIn && screenWidth <= 800 ? (
               <button
                  className="btn btn-danger full-width"
                  style={{
                     position: "absolute",
                     bottom: "0",
                     left: "0",
                     borderRadius: "0",
                  }}
                  onClick={handleLogout}
               >
                  Log Out
               </button>
            ) : (
               <></>
            )}
            <footer>© 2021 Copyright: itzAamir</footer>
         </div>
      </>
   );
};

export default ProfileSection;
