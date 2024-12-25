import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">פתרונות טכנולוגיים ללד</h1>
        <div className="burger" onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <nav className={`nav ${isNavOpen ? "active" : ""}`}>
        <Link to="/">דף הבית</Link>
        <Link to="/services">שירותים</Link>
        <Link to="/projects">פרויקטים</Link>
        <Link to="/contact">צור קשר</Link>
      </nav>
    </header>
  );
};

export default Header;
