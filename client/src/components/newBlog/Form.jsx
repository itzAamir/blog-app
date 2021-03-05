import React, { useRef } from "react";

const Form = ({ onSubmit }) => {
   const titleRef = useRef();
   const descRef = useRef();
   const markdownRef = useRef();

   return (
      <form onSubmit={(e) => onSubmit({ titleRef, descRef, markdownRef }, e)}>
         <div className="mb-3">
            <label htmlFor="blog-title" className="form-label">
               Title:
            </label>
            <input
               ref={titleRef}
               type="text"
               className="form-control"
               id="blog-title"
               placeholder="Enter cool title."
               maxLength="50"
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
               ref={descRef}
               type="text-area"
               className="form-control"
               id="blog-desc"
               placeholder="Enter consice description ..."
               maxLength="150"
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
               ref={markdownRef}
               type="text-area"
               className="form-control"
               rows="10"
               id="blog-markdown"
               placeholder="#The Quick Brown Fox Jumps Over The Lazy Dog..."
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
