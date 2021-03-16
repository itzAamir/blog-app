import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import NoData from "../NoData";

const BlogWrapper = () => {
   const theme = localStorage.getItem("theme-mode");
   const [cards, setCards] = useState("");
   useEffect(() => {
      axios
         .get("/blogs")
         .then((res) => {
            if (res.data.data.length === 0) {
               setCards(<NoData />);
            } else {
               setCards(
                  res.data.data.map((e) => <BlogCards key={e._id} data={e} />)
               );
            }
         })
         .catch((err) => console.error(err));
   }, []);

   return (
      <div className={`blog-wrapper ${theme === "dark" && "bg-dark"}`}>
         {cards}
      </div>
   );
};

export default BlogWrapper;
