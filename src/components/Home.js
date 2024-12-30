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
            src="./digiliog-logo-b-bg.png"
            alt="Digilog Logo"
            className="home-logo"
          />
        </div>
        <div>
          <h1>מתן פתרונות מתקדמים בעולם הלד</h1>
          <p>
            אנו מתמחים בתיקון, התקנה ותמיכה טכנית למסכי ותאורת לד תוך התאמה
            אישית לצרכי הלקוח.
          </p>
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
