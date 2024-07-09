import React, { useState } from "react";
import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import StoreLogo from "../../assets/storeLogo.webp";
import { AiFillLock } from "react-icons/ai";
import { CgMail } from "react-icons/cg";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handlelogin = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setSuccessMessage(
          "Login Successfully, Now you can redirect to Home Page"
        );

        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      });
  };

  return (
    <div className="auth_container max-width flex">
      <form onSubmit={handlelogin} className="auth_form">
        <h1 className="form_heading">Welcome</h1>
        <img src={StoreLogo} alt="Logo" />
        {successMessage && (
          <div className="successMessage">{successMessage}</div>
        )}
        {errorMessage && <div className="errorMessage">{errorMessage}</div>}
        <div>
          <label htmlFor="email">Email</label>
          <div className="input-field">
            <CgMail className="auth_icon" />
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="password">Pasword</label>
          <div className="input-field">
            <AiFillLock className="auth_icon" />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="parent flex">
          <label className="remember">
            <input type="checkbox" /> Remember Me
          </label>
          <Link to="#" className="child2">
            Forgot Password?
          </Link>
        </div>
        <button type="submit" className="auth_Btn">
          Login
        </button>
        <p className="auth_privacy">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
