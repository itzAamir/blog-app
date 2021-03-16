import React from "react";
import { NavLink } from "react-router-dom";
import COLORS from "../../utils/COLORS";

const BlogCards = ({ data }) => {
   const theme = localStorage.getItem("theme-mode");
   const picUrl = `https://ui-avatars.com/api/?name=${data.author}&rounded=true&bold=true&background=e4e2e2&color=6c757d1&size=30`;

   return (
      <div
         className="card"
         style={{
            width: "100%",
            color: theme === "dark" && COLORS.fontColor,
            background: theme === "dark" && COLORS.extremeDarkBg,
         }}
      >
         {/* <img
            className="card-img-top"
            src="https://www.picsum.photos/500"
            alt="Card cap"
         /> */}

         <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description}</p>
            <NavLink
               to={{
                  pathname: `/blogs/${data._id}`,
               }}
            >
               Read More...
            </NavLink>
         </div>
         <div className="profile-info">
            <img src={picUrl} alt="profile-pic" className="profile-pic" />
            <span className="text-muted">{data.author}</span>
         </div>
      </div>
   );
};

export default BlogCards;
