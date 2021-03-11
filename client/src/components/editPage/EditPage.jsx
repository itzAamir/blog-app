import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import ProfileSection from "../ProfileSection";
import "../newBlog/newBlog.css";
import EditForm from "./EditForm";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory, useParams } from "react-router-dom";

const EditPage = () => {
   const cookie = Cookies.get("uid");
   const history = useHistory();
   const blogId = useParams().id;
   const [isLoggedIn, setIsLoggedIn] = useState(true);
   const [sideBarState, setSideBarState] = useState("hide");
   useEffect(() => {
      if (cookie === undefined) {
         setIsLoggedIn(false);
         history.push("/login");
      }
      return "";
   }, [cookie, history, blogId]);

   const handleSubmit = (title, description, markdown, e) => {
      e.preventDefault();
      const privacy = e.target.elements["inlineRadioOptions"].value;
      if (
         title.length <= 3 ||
         description.length <= 3 ||
         markdown.length <= 3
      ) {
         alert("Please Increase the length of characters");
      } else {
         const params = {
            title,
            description,
            markdown,
            privacy,
         };
         axios
            .patch(`/newblog/${blogId}`, params)
            .then((res) => {
               alert(res.data.data);
               history.push("/my-blogs");
            })
            .catch((err) => alert(err));
      }
   };

   const handleToggle = () => {
      if (sideBarState === "hide") {
         setSideBarState("show");
      } else {
         setSideBarState("hide");
      }
   };

   const handleCancel = () => {
      history.push("/my-blogs");
   };

   return (
      <section>
         <>
            <Navbar onToggle={handleToggle} navState={sideBarState} />
            <ProfileSection isLoggedIn={isLoggedIn} navState={sideBarState} />
            <section id="new-blog-section">
               <h1>New Article</h1>
               <EditForm onSubmit={handleSubmit} id={blogId} />
               <button
                  onClick={handleCancel}
                  className="btn btn-danger mt-4 full-width"
               >
                  Cancel
               </button>
            </section>
         </>
      </section>
   );
};

export default EditPage;
