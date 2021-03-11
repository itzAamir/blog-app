import React, { useEffect, useState } from "react";
import axios from "axios";

const Form = ({ onSubmit, id }) => {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [markdown, setMarkdown] = useState("");

   useEffect(() => {
      axios
         .get(`/blog/${id}`)
         .then((res) => {
            let data = res.data.data;
            setTitle(data.title);
            setDescription(data.description);
            setMarkdown(data.markdown);
         })
         .catch((err) => console.error(err));
      return "";
   }, [id]);

   return (
      <form onSubmit={(e) => onSubmit(title, description, markdown, e)}>
         <div className="mb-3">
            <label htmlFor="blog-title" className="form-label">
               Title:
            </label>
            <input
               type="text"
               className="form-control"
               id="blog-title"
               placeholder="Enter cool title."
               maxLength="50"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
            <small className="form-text text-muted">
               Max length: 50 characters
            </small>
         </div>
         <div className="mb-3">
            <label htmlFor="blog-desc" className="form-label">
               Description:
            </label>
            <textarea
               type="text-area"
               className="form-control"
               id="blog-desc"
               placeholder="Enter consice description ..."
               maxLength="150"
               value={description}
               onChange={(e) => setDescription(e.target.value)}
            />
            <small className="form-text text-muted">
               Max length: 150 characters
            </small>
         </div>
         <div className="mb-3">
            <label htmlFor="blog-markdown" className="form-label">
               Markdown:
            </label>
            <textarea
               type="text-area"
               className="form-control"
               rows="10"
               id="blog-markdown"
               placeholder="# The Quick Brown Fox Jumps Over The Lazy Dog..."
               value={markdown}
               onChange={(e) => setMarkdown(e.target.value)}
            />
         </div>
         <legend>Do you want to make it public or private?</legend>

         <div>
            <div className="form-check form-check-inline">
               <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="public"
                  value="public"
                  defaultChecked
               />
               <label className="form-check-label" htmlFor="public">
                  Public
               </label>
            </div>
            <div className="form-check form-check-inline">
               <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="private"
                  value="private"
               />
               <label className="form-check-label" htmlFor="private">
                  Private
               </label>
            </div>
         </div>
         <button type="submit" className="btn btn-success mt-4 full-width">
            Publish
         </button>
      </form>
   );
};

export default Form;
