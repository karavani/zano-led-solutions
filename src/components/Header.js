import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <h1 className="logo">פתרונות טכנולוגיים ללד</h1>
          <img src="/zano_icon.png" alt="Icon" className="header-icon" />
        </div>
        <nav className="nav">
          <a href="#home">דף הבית</a>
          <a href="#services">שירותים</a>
          <a href="#projects">פרויקטים</a>
          <a href="#contact">צור קשר</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
