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
   const history = useHistory();
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
   }, [history]);

   return (
      <section id="home-section">
         <Navbar />
         <div className="main-section">
            <ProfileSection isLoggedIn={isLoggedIn} />
            <div className="blogs-section">
               <BlogWrapper />
            </div>
         </div>
      </section>
   );
};

export default Home;
