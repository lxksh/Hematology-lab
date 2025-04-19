import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useLogout } from "../pages/Logout";
import { useAuthContext } from "../pages/useAuthContext";
import { Link } from "react-router-dom";
import "../styles/pred_dropdown.css";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <h1 style={{ margin: "0" }}>Hematology Lab</h1>
        <nav>
          {user ? (
            <div>
              <Link to="/dashboard">Home</Link>
              <div className="button-dropdown">
                <div className="dropdown-btn">Prediction &#9662;</div>
                <ul className="dropdown-content">
                  <li><Link to="/dt">Decision Tree</Link></li>
                  <li><Link to="/rf">Random Forest</Link></li>
                  <li><Link to="/svm">SVM</Link></li>
                  <li><Link to="/knn">KNN</Link></li>
                  <li><Link to="/nb">Gaussian Naive Bayes</Link></li>
                  <li><Link to="/lr">Linear Regression</Link></li>
                  <li><Link to="/models">All models</Link></li>
                </ul>
              </div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          ) : (
            <div>
              <Link to="/">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
