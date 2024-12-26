import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import emailjs from 'emailjs-com';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    console.log("Form submitted with the following details:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // You can use the emailjs library to send emails

    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    //   name: name,
    //   email: email,
    //   message: message,
    // }, 'YOUR_USER_ID')
    // .then((response) => {
    //   console.log('Success:', response.status, response.text);
    //   // You can add more logic here to handle the response
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    //   // You can add more logic here to handle the error
    // });
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2>צור קשר</h2>
        <p className="contact-description">
          נשמח לשמוע ממך! מלא את הטופס למטה או צור קשר ישיר באמצעות הטלפון, האימייל או הווצאפ.
        </p>
        <div className="contact-content">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">שם מלא</label>
              <input id="name" name="name" type="text" placeholder="הכנס את שמך" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">אימייל</label>
              <input id="email" name="email" type="email" placeholder="הכנס את האימייל שלך" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">הודעה</label>
              <textarea id="message" name="message" placeholder="כתוב את ההודעה שלך כאן" required></textarea>
            </div>
            <button type="submit" className="btn-submit">
              שלח הודעה
            </button>
          </form>
          <div className="quick-contact">
            <a href="tel:+972542656989" className="contact-icon">
              <FontAwesomeIcon icon={faPhone} /> התקשר
            </a>
            <a href="mailto:zanogil@gmail.com" className="contact-icon">
              <FontAwesomeIcon icon={faEnvelope} /> שלח אימייל
            </a>
            <a href="https://wa.me/+972542656989" className="contact-icon">
              <FontAwesomeIcon icon={faWhatsapp} /> שלח ווצאפ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
