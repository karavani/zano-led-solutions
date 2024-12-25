import React from "react";
import "./LedAnimation.css"; // Import the CSS for animation

const LedAnimation = () => {
  const leds = Array.from({ length: 10 }); // Adjust the number of LEDs here

  return (
    <div className="led-container">
      {leds.map((_, index) => (
        <div key={index} className={`led led-${index}`} />
      ))}
    </div>
  );
};

export default LedAnimation;
