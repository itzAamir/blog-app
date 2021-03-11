import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
   return (
      <section
         style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
         }}
      >
         <h1>Page Not Found</h1>
         <NavLink
            to={{
               pathname: "/",
            }}
         >
            Go Back
         </NavLink>
      </section>
   );
};

export default Error;
