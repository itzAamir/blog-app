import React from "react";

const Spinner = () => {
   const theme = localStorage.getItem("theme-mode");

   return (
      <div
         className={`spinner-wrapper text-${
            theme !== "dark" ? "dark" : "light"
         }`}
      >
         <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
         </div>
      </div>
   );
};

export default Spinner;
