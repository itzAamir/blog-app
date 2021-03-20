import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import NoData from "../NoData";
import Spinner from "../Spinner";

const BlogWrapper = () => {
   const theme = localStorage.getItem("theme-mode");
   const [cards, setCards] = useState("");
   const [isLoading, setIsLoading] = useState("");

   useEffect(() => {
      setIsLoading(true);
      axios
         .get("/blogs")
         .then((res) => {
            if (res.data.data.length === 0) {
               setCards(<NoData />);
            } else {
               setCards(
                  res.data.data.map((e) => <BlogCards key={e._id} data={e} />)
               );
               setIsLoading(false);
            }
         })
         .catch((err) => console.error(err));
   }, []);

   return (
      <div className={`blog-wrapper ${theme === "dark" && "bg-dark"}`}>
         {isLoading ? <Spinner /> : cards}
      </div>
   );
};

export default BlogWrapper;
