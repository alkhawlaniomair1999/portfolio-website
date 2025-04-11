import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = ({ toggleTheme, theme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className={`navbar ${showMenu ? "expanded" : ""}`}>
      {/* الجزء الأيسر: اسم الموقع أو الشعار */}
      <div className="navbar-left">
        <p>Omair Alkhawlani</p>
      </div>

      {/* الجزء الأوسط: قائمة الروابط الثابتة لأجهزة الديسكتوب */}
      <div className="navbar-center">
        <ul className="navbar-links">
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {showMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* الجزء الأيمن: زر القائمة المنسدلة وزر تبديل الثيم */}
      <div className="navbar-right">
        {/* زر القائمة المنسدلة يظهر فقط على الأجهزة الصغيرة */}
       
        {/* زر تبديل الوضع الليلي/النهاري */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark/light mode"
        >
          {theme === "dark" ? (
            <img
              src={process.env.PUBLIC_URL + "/assets/sun.png"}
              alt="Switch to light mode"
            />
          ) : (
            <img
              src={process.env.PUBLIC_URL + "/assets/moon.png"}
              alt="Switch to dark mode"
            />
          )}
        </button>
      </div>

      {/* القائمة المنسدلة: تظهر على الأجهزة الصغيرة عند تفعيلها */}
      {showMenu && (
        <motion.ul
          className="navbar-dropdown"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <li onClick={closeMenu}>
            <a href="#home">Home</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#about">About</a>
          </li>
          <li onClick={closeMenu}>
            <a href="#contact">Contact</a>
          </li>
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
