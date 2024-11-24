import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa"; // Importing the 'add' icon from react-icons
import "./style/MainNavBar.css"; 

function MainNavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__left">
          <Link to="/" className="navbar__brand">
            <img
              src="https://example.com/your-logo.png" // Replace with your actual logo
              alt="Brand Logo"
              className="navbar__logo"
            />
          </Link>
        </div>

        <div className="navbar__center">
          <Link to="/" className="navbar__link">
            Home
          </Link>
          <Link to="/shoes" className="navbar__link">
            All Shoes
          </Link>
        </div>

        <div className="navbar__right">
          <Link to="/shoes/add" className="navbar__add-button">
            <FaPlusCircle size={30} />
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default MainNavBar;
