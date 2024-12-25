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
        <p className="contact-description">
          נשמח לשמוע ממך! מלא את הטופס למטה או צור קשר ישיר באמצעות הטלפון, האימייל או הווצאפ.
        </p>
        <div className="contact-content">
          <form>
            <div className="form-group">
              <label htmlFor="name">שם מלא</label>
              <input id="name" type="text" placeholder="הכנס את שמך" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">אימייל</label>
              <input id="email" type="email" placeholder="הכנס את האימייל שלך" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">הודעה</label>
              <textarea id="message" placeholder="כתוב את ההודעה שלך כאן" required></textarea>
            </div>
            <button type="submit" className="btn-submit">
              שלח הודעה
            </button>
          </form>
          <div className="quick-contact">
            <a href="tel:+1234567890" className="contact-icon">
              <FontAwesomeIcon icon={faPhone} /> התקשר
            </a>
            <a href="mailto:info@example.com" className="contact-icon">
              <FontAwesomeIcon icon={faEnvelope} /> שלח אימייל
            </a>
            <a href="https://wa.me/1234567890" className="contact-icon">
              <FontAwesomeIcon icon={faWhatsapp} /> שלח ווצאפ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
