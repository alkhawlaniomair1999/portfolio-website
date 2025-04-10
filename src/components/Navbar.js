import React from "react";
import { motion } from "framer-motion";

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        Omair Alkhawlani
      </div>
      <div className="navbar-center">
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? (
            // إذا كان الوضع الليلي مفعّل، عرض أيقونة الشمس للتحول للوضع النهاري
            <img src={process.env.PUBLIC_URL + 'assets/sun.png'} alt="Switch to light mode" />
          ) : (
            // إذا كان الوضع النهاري مفعّل، عرض أيقونة القمر للتحول للوضع الليلي
            <img src={process.env.PUBLIC_URL + 'assets/moon.png'} alt="Switch to dark mode" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;



