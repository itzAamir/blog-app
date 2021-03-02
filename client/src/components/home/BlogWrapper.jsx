import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";

const BlogWrapper = () => {
   const [cards, setCards] = useState("");
   useEffect(() => {
      axios
         .get("https://blog-app-serve.herokuapp.com/app/blogs")
         .then((res) => {
            const newBlogsArr = [];
            res.data.data.forEach((e) => {
               newBlogsArr.push(e.blogs);
            });
            const finalBlogsArr = [];
            newBlogsArr.forEach((e, i) => {
               finalBlogsArr.push(...newBlogsArr[i]);
            });
            if (finalBlogsArr.length !== 0) {
               setCards(
                  finalBlogsArr
                     .filter((elem) => elem.privacy === "public")
                     .map((e) => <BlogCards key={e._id} data={e} />)
               );
            } else {
               setCards(<h1>No Blogs To Show</h1>);
            }
         })
         .catch((err) => console.error(err));
   }, []);
   return <div className="blog-wrapper">{cards}</div>;
};

export default BlogWrapper;
