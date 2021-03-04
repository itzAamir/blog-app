import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./Registration.css";
import axios from "axios";

const Registration = () => {
   const history = useHistory();
   const usernameRef = useRef();
   const emailRef = useRef();
   const passwordRef = useRef();
   const confirmPassRef = useRef();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const username = usernameRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const confirmPass = confirmPassRef.current.value;
      if (password !== confirmPass) {
         alert("Password does not match");
      } else {
         let params = {
            username,
            email,
            password,
         };
         axios
            .post("/register", params)
            .then((res) => {
               if (res.data.status === "error") {
                  alert(res.data.error);
               } else if (res.data.status === "ok") {
                  history.push("/login");
               } else {
                  console.log(res.data);
               }
            })
            .catch((err) => console.error(err));
      }
   };

   return (
      <section id="register-section">
         <div className="img-wrapper">
            <div className="registration-wrapper">
               <div className="registration-card">
                  <div className="title-wrapper">
                     <h1>Register</h1>
                  </div>
                  <form onSubmit={handleSubmit}>
                     <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                           type="text"
                           name="username"
                           ref={usernameRef}
                           className="form-control"
                           id="username"
                           placeholder="Enter your user-name"
                           required
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                           type="email"
                           name="email"
                           ref={emailRef}
                           className="form-control"
                           id="email"
                           placeholder="Enter your email"
                           required
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                           type="password"
                           name="password"
                           ref={passwordRef}
                           className="form-control"
                           id="password"
                           placeholder="Enter your password"
                           required
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="confirm-password">
                           Confirm Password
                        </label>
                        <input
                           type="password"
                           className="form-control"
                           ref={confirmPassRef}
                           id="confirm-password"
                           placeholder="Confirm your password"
                           required
                        />
                     </div>
                     <button
                        type="submit"
                        className="btn btn-success"
                        style={{ width: "100%" }}
                     >
                        Register
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Registration;
