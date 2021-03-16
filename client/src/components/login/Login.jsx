import React, { useRef } from "react";
import { useHistory, NavLink } from "react-router-dom";
import axios from "axios";
import "./login.css";

const Login = () => {
   const emailRef = useRef();
   const passRef = useRef();
   const history = useHistory();

   const handleLogin = (e) => {
      e.preventDefault();
      const email = emailRef.current.value;
      const password = passRef.current.value;
      let params = {
         email,
         password,
      };
      axios
         .post("/login", params, {
            withCredentials: true,
         })
         .then((res) => {
            if (res.data.status === "ok") {
               history.push("/");
            } else {
               alert(res.data.data);
            }
         })
         .catch((err) => console.error(err));
   };

   return (
      <section id="login-section">
         <div className="login-wrapper">
            <div className="title-wrapper">
               <h1>Login</h1>
            </div>
            <form onSubmit={handleLogin}>
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
                     ref={passRef}
                     className="form-control"
                     id="password"
                     placeholder="Enter your password"
                  />
               </div>
               <button
                  type="submit"
                  className="btn btn-success mt-2"
                  style={{ width: "100%" }}
               >
                  Login
               </button>
            </form>
            Not Registered?{" "}
            <NavLink
               to={{
                  pathname: "/registration",
               }}
            >
               click here
            </NavLink>
         </div>
         <div className="login-illustration-wrapper">
            <div className="login-illustration" />
         </div>
      </section>
   );
};

export default Login;
