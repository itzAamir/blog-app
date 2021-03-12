import React from "react";
import { NavLink } from "react-router-dom";

const NoData = () => {
   return (
      <div
         style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "80vh",
         }}
      >
         <h3>No blogs available</h3>
         <span>
            {" "}
            <NavLink
               to={{
                  pathname: "/create-blog",
               }}
            >
               Click here
            </NavLink>{" "}
            to get started
         </span>
      </div>
   );
};

export default NoData;
