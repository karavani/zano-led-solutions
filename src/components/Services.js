import React from "react";
import { useInView } from "react-intersection-observer";
import "./Services.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Services = () => {
  const { ref: ledServicesRef, inView: ledServicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  const { ref: lightingServicesRef, inView: lightingServicesInView } =
    useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

  return (
    <section
      className="services"
      style={{ backgroundImage: "url('C:\Program Files (x86)\Dev\zanoSite\led-solutions-website\public\led-tech1.png')" }}
    >
      <div className="container">
        <div className="section-header">
          <h2>השירותים שלנו</h2>
        </div>

        <div
          className={`service-category-wrapper ${
            ledServicesInView ? "in-view" : ""
          }`}
          ref={ledServicesRef}
        >
          <h3>שירותים בתחום מסכי הלד</h3>
          <div className="service-category-content">

          <LazyLoadImage
          className="service-image"
            src="/led-tech1.png"
            alt="תאורה חכמה בחדר ארונות"
            effect="blur"
          />
          <div className="service-category">
            <div className="service">
              <h4>תיקון מודולים:</h4>
              <p>
                מסך הלד שלכם לא עובד כמו שצריך? אנחנו כאן בשבילכם! תיקון
                מודולים, החלפת פיקסלים ובדיקות יסודיות מבטיחים לכם מסך מתפקד
                במצב מושלם.
              </p>
            </div>
            <div className="service">
              <h4>הגדרה ותכנות מסכים:</h4>
              <p>
                התאמת תצוגת המסך לצרכים שלכם בעזרת תכנות מקצועי של קבצי RCFG.
                אנחנו נתאים את המסך לתוכן שלכם בצורה הטובה ביותר.
              </p>
            </div>
            <div className="service">
              <h4>ייעוץ ותמיכה טכנית:</h4>
              <p>
                נתקלתם בבעיה טכנית? המומחים שלנו זמינים לספק תמיכה מקצועית
                ומהירה, כך שתוכלו להמשיך ליהנות מביצועי מסך מושלמים.
              </p>
            </div>
            {/* <div className="service">
              <h4>התקנות:</h4>
              <p>
                בין אם מדובר במערכת חדשה או בשדרוג קיימת, אנו מבצעים התקנות
                מדויקות ומקצועיות שמתאימות לכל פרויקט.
              </p>
            </div> */}
          </div>
        </div>
        </div>

        <div
          className={`service-category-wrapper ${
            lightingServicesInView ? "in-view" : ""
          }`}
          ref={lightingServicesRef}
        >
          <h3>שירותים בתחום תאורת הלד</h3>
          <div className="service-category-content">
          <LazyLoadImage
          className="service-image"
            src="led-tech3.png"
            alt="תאורה חכמה בחדר ארונות"
            effect="blur"
          />
          <div className="service-category">
            <div className="service">
              <h4>התקנת פסי לד מכל הסוגים:</h4>
              <p>
                מפסי לד רגילים ועד תאורה חכמה עם שליטה מרחוק – אנו מבצעים התקנות
                מותאמות אישית לכל סביבה.
              </p>
            </div>
            <div className="service">
              <h4>פתרונות דימור וחיישנים:</h4>
              <p>
                תאורה שתגיב אליכם! שליטה חכמה בתאורה עם חיישנים מתקדמים ודימרים
                יוצרת חוויה נוחה ומותאמת.
              </p>
            </div>
            <div className="service">
              <h4>פתרונות תאורה למסעדות, ברים ולקוחות פרטיים:</h4>
              <p>
                מעצבים תאורה שמגדירה את האווירה. פתרונות מותאמים אישית שמתאימים
                לכל צורך.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
