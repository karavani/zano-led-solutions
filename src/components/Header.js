import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <nav
          id="main-navigation"
          className={`nav ${isNavOpen ? "nav-open" : ""}`}
          aria-label="Main Navigation"
        >
          <a href="#home" onClick={toggleNav}>דף הבית</a>
          <a href="#services" onClick={toggleNav}>שירותים</a>
          <a href="#projects" onClick={toggleNav}>פרויקטים</a>
          <a href="#contact" onClick={toggleNav}>צור קשר</a>
        </nav>
        <div className="header-logo">
          <img src="./digiliog-logo-b-bg.png" alt="Icon" className="header-icon" />
        <button
          className="burger"
          onClick={toggleNav}
          aria-expanded={isNavOpen}
          aria-controls="main-navigation"
          >
          <span className={`burger-line ${isNavOpen ? "nav-open" : ""}`}></span>
          <span className={`burger-line ${isNavOpen ? "nav-open" : ""}`}></span>
          <span className={`burger-line ${isNavOpen ? "nav-open" : ""}`}></span>
        </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
