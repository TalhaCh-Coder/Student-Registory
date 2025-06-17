// NavigationBar.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
   return (
      <nav
         className="navigationBar"
         style={{
            backgroundColor: "#f8f9fa",
            padding: "10px 20px",
            display: "flex",
            justifyContent: "space-between",
         }}
      >
         <h3>🎓 Student Registry</h3>
         <div
            className="navitems"
            style={{
               width: "50%",
               display: "flex",
               justifyContent: "space-evenly",
               alignItems: "center",
            }}
         >
            <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
               Home
            </Link>
            <Link
               to="/students"
               style={{ textDecoration: "none", color: "#333" }}
            >
               Students
            </Link>
            <Link to="/add" style={{ textDecoration: "none", color: "#333" }}>
               Add Student
            </Link>
            <Link to="/about" style={{ textDecoration: "none", color: "#333" }}>
               About
            </Link>
         </div>
      </nav>
   );
};

export default NavigationBar;
