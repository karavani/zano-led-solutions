import React from "react";
import "./Home.css";

const Home = () => {
  const handleClick = () => {
    window.location.href = "#contact";
  };

  return (
    <div className="home" id="home">
      <div className="home-overlay">
        <div>
          <img src="./digiliog-logo-b-bg-shadow.png" alt="Icon" className="home-logo" />
        </div>
    <div>

        <h2>מתן פתרונות מתקדמים בעולם הלד</h2>
        <p>
          אנו מתמחים בתיקון, התקנה ותמיכה טכנית למסכי ותאורת לד תוך התאמה אישית
          לצרכי הלקוח.
        </p>
        <button onClick={handleClick}>צור קשר עוד היום!</button>
    </div>
      </div>
    </div>
  );
};

export default Home;
