import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const handleClick = () => {
    window.location.href = "#contact";
  };

  const handleMouseEnter = () => {
    document.querySelector(".down-arrow").style.visibility = "visible";
    document.querySelector(".down-arrow").style.display = "inline-block";
  };

  const handleMouseLeave = () => {
    document.querySelector(".down-arrow").style.visibility = "hidden";
    document.querySelector(".down-arrow").style.display = "none";
  };

  return (
    <div className="home" id="home">
      <div className="home-overlay">
        <div>
          <img
            src="./digiliog-logo-b-bg-shadow.png"
            alt="Icon"
            className="home-logo"
          />
        </div>
        <div>
          <h1>ברוכים הבאים לפתרונות טכנולוגיים ללד</h1>
          <p>אנו מציעים את הפתרונות המתקדמים ביותר לתאורת לד ומסכים.</p>
          <button
            className="home-button"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            צור קשר עוד היום{" "}
            <FontAwesomeIcon icon={faArrowDown} className="down-arrow" />
          </button>
        </div>
        <div className="down-arrow"></div>
      </div>
    </div>
  );
};

export default Home;
