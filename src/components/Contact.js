import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {


  return (
    <section className="contact">
      <div className="contact-container">
        <h2>צור קשר</h2>
        <div className="contact-content">
          <div className="quick-contact">
            <a href="tel:+972542656989" className="contact-icon">
              <FontAwesomeIcon icon={faPhone} /> התקשר
            </a>
            <a href="mailto:zanogil@gmail.com" className="contact-icon">
              <FontAwesomeIcon icon={faEnvelope} /> שלח אימייל
            </a>
            <a href="https://wa.me/+972542656989?text=%D7%94%D7%99%D7%99%27%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%93%D7%A8%D7%9A%20%D7%94%D7%90%D7%AA%D7%A8%20" className="contact-icon">
              <FontAwesomeIcon icon={faWhatsapp} /> שלח ווצאפ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
