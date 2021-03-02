import React, { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";

const MyBlogCards = ({ data }) => {
   const [username, setUsername] = useState("");
   const { _id, title, description, privacy } = data;
   const cookie = Cookies.get("uid");

   const badgeClass =
      privacy === "public" ? "badge badge-primary" : "badge badge-secondary";

   const handleDelete = () => {
      console.log(data._id);
   };

   useEffect(() => {
      if (cookie) {
         setUsername(JSON.parse(atob(cookie.split(".")[1])).username);
      }
   }, [cookie]);

   return (
      <div>
         <div className="card" style={{ width: "100%" }}>
            {/* <img
               className="card-img-top"
               src="https://www.picsum.photos/500"
               alt="Card cap"
            /> */}
            <div className="card-body">
               <h5 className="card-title">
                  {title} <span className={badgeClass}>{privacy}</span>
               </h5>
               <p className="card-text">{description}</p>
               <NavLink to={{ pathname: "/blogs/" + _id }}>
                  Read More...
               </NavLink>
               {username === data.author ? (
                  <div className="icons-wrapper">
                     <EditIcon style={{ cursor: "pointer" }} />
                     <DeleteIcon
                        style={{ fill: "red", cursor: "pointer" }}
                        onClick={handleDelete}
                     />
                  </div>
               ) : (
                  ""
               )}
            </div>
         </div>
      </div>
   );
};

export default MyBlogCards;
