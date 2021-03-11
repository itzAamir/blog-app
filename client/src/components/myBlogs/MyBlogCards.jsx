import React, { useState, useEffect } from "react";
import axios from "axios";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";

const MyBlogCards = ({ data }) => {
   const [username, setUsername] = useState("");
   const { _id, title, description, privacy } = data;
   const cookie = Cookies.get("uid");

   const badgeClass =
      privacy === "public" ? "badge badge-primary" : "badge badge-secondary";

   useEffect(() => {
      if (cookie) {
         setUsername(JSON.parse(atob(cookie.split(".")[1])).username);
      }
      return "";
   }, [cookie]);

   const handleDelete = () => {
      const isDelete = window.confirm("Are you sure about this?");
      if (isDelete)
         axios
            .delete(`/blog/${_id}`)
            .then((res) => {
               alert(res.data.data);
            })
            .catch((err) => alert(err));
   };

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
                     <NavLink
                        to={{
                           pathname: `edit/${_id}`,
                        }}
                     >
                        <IconButton>
                           <EditIcon />
                        </IconButton>
                     </NavLink>
                     <IconButton onClick={handleDelete}>
                        <DeleteIcon style={{ fill: "red" }} />
                     </IconButton>
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
