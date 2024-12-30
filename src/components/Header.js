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
          <a href="#home">דף הבית</a>
          <a href="#services">שירותים</a>
          <a href="#projects">פרויקטים</a>
          <a href="#contact">צור קשר</a>
        </nav>
        <div className="header-logo">
          <img src="/digiliog-logo-b-bg-shadow.png" alt="Icon" className="header-icon" />
        <button
          className="burger"
          onClick={toggleNav}
          aria-expanded={isNavOpen}
          aria-controls="main-navigation"
          >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
