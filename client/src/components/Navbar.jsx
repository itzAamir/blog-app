import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import * as fa from "react-icons/fa";
import { CgClose } from "react-icons/cg";

const Navbar = ({ onToggle, navState }) => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const cookie = Cookies.get("uid");

   useEffect(() => {
      if (cookie) {
         setIsLoggedIn(true);
      }
   }, [cookie]);

   const handleLogout = () => {
      document.title = "Logging Out...";
      document.cookie = "uid= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
      window.location = "/";
      document.title = "Blog-App";
   };

   return (
      <nav className="navbar-dark bg-dark">
         <div className="hamburger" onClick={() => onToggle()}>
            {navState === "hide" ? (
               <fa.FaBars style={{ height: "1.7rem", width: "1.7rem" }} />
            ) : (
               <CgClose style={{ height: "1.7rem", width: "1.7rem" }} />
            )}
         </div>
         <div className="logo">
            <NavLink
               to={{
                  pathname: "/",
               }}
               style={{ color: "white" }}
            >
               <h1>Blogs</h1>
            </NavLink>
         </div>

         <ul className="nav-options">
            <li>
               <a
                  href="https://www.itzaamir.in"
                  target="_blank"
                  rel="noreferrer"
               >
                  FOUNDER
               </a>
            </li>
            <input
               type="text"
               className="form-control"
               placeholder="Search Here..."
               style={{ width: "60%" }}
            />
            {isLoggedIn ? (
               <button className="btn btn-danger" onClick={handleLogout}>
                  Log out
               </button>
            ) : (
               " "
            )}
         </ul>
      </nav>
   );
};

export default Navbar;
