import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Traffic Management</div>
      <ul className="navbar-links">
        <li><a href="#intro">Introduction</a></li>
        <li><a href="#causes">Causes</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
