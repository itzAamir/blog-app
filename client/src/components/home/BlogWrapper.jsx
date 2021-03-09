import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";

const BlogWrapper = () => {
   const [cards, setCards] = useState("");
   useEffect(() => {
      axios
         .get("/blogs")
         .then((res) => {
            setCards(
               res.data.data.map((e) => <BlogCards key={e._id} data={e} />)
            );
         })
         .catch((err) => console.error(err));
   }, []);
   return <div className="blog-wrapper">{cards}</div>;
};

export default BlogWrapper;
