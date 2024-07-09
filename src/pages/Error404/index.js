import React from "react";
import "./error404.css";
import { Link } from "react-router-dom";
import Error404 from "../../assets/404.webp";

const ErrorPage = () => {
  return (
    <div className="error-container max-width flex">
      <section className="error-image">
        <img src={Error404} alt="404 Error page" />
      </section>

      <section className="error-content">
        <h2>OOPS! page Not Found</h2>
        <p>Sorry, the page you're looking for dosen't exist. </p>
        <Link to="/">RETURN HOME</Link>
      </section>
    </div>
  );
};

export default ErrorPage;
