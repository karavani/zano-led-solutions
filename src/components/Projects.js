import React from "react";
import { useInView } from "react-intersection-observer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Projects.css";

const Projects = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });
  const [ref5, inView5] = useInView({ triggerOnce: true });
  const [ref6, inView6] = useInView({ triggerOnce: true });
  // const [ref7, inView7] = useInView({ triggerOnce: true });

  return (
    <div className="projects">
      <h2>פרויקטים נבחרים</h2>
      <p>
        אנו גאים להציג מבחר מהפרויקטים המיוחדים שביצענו, המשלבים מקצועיות,
        חדשנות והתאמה אישית לצרכים של כל לקוח.
      </p>

      <div className="project-grid">
        <div ref={ref1} className={`project ${inView1 ? "visible" : "hidden"}`}>
          <LazyLoadImage
            src="led-project1.jpg"
            alt="תאורת RGB במועדון בנמל תל אביב"
            effect="blur"
          />
          <h3>תאורת RGB במועדון בנמל תל אביב</h3>
          <h4>מה עשינו:</h4>
          <p>
            התקנת פסי לדים RGB מתקדמים ליצירת אווירה סוחפת במועדון יוקרתי בנמל
            תל אביב.
          </p>
          <h4>התוצאה:</h4>
          <p>חוויה ויזואלית מרשימה, המשלבת תאורה דינמית ואסתטיקה ייחודית.</p>
        </div>

        <div ref={ref2} className={`project ${inView2 ? "visible" : "hidden"}`}>
          <LazyLoadImage
            src="led-project7.jpg"
            alt="עץ 'שורשים של תקווה' – פרויקט מיוחד לטקס נובה"
            effect="blur"
          />
          <h3>עץ "שורשים של תקווה" – פרויקט מיוחד לטקס נובה</h3>
          <h4>מה עשינו:</h4>
          <p>
            יצרנו עץ ענק בגובה 5 מטרים להנצחת הנופלים, המשלב תאורת לד מדויקת
            וחדשנית.
          </p>
          <h4>התוצאה:</h4>
          <p>מיצב עוצמתי ומרגש שזכה לשבחים רבים בטקס.</p>
        </div>
        <div ref={ref3} className={`project ${inView3 ? "visible" : "hidden"}`}>
          <LazyLoadImage
            src="led-project3.jpg"
            alt="תאורה חכמה בחדר ארונות"
            effect="blur"
          />
          <h3>תאורה חכמה בחדר ארונות</h3>
          <h4>מה עשינו:</h4>
          <p>
            התקנת לדים בארון בחדר ארונות עם מנגנון הדלקה וכיבוי איטיים, תוך
            שילוב חיישני תנועה וחיישנים בדלתות.
          </p>
          <h4>התוצאה:</h4>
          <p>פתרון תאורה מתקדם ונוח לשימוש יומיומי עם טאץ' יוקרתי.</p>
        </div>

        <div ref={ref4} className={`project ${inView4 ? "visible" : "hidden"}`}>
          <LazyLoadImage
            src="led1.jpg"
            alt="תחזוקת מסך לד ענק – 100 מ"
            effect="blur"
          />
          <h3>תחזוקת מסך לד ענק – 100 מ"ר</h3>
          <h4>מה עשינו:</h4>
          <p>
            תיקון והחלפת פיקסלים לצד תחזוקה כוללת של מסך לד עצום בגודל 100 מ"ר.
          </p>
          <h4>התוצאה:</h4>
          <p>
            מסך במצב מושלם, המציג תמונה חדה ומדויקת לשימושים מסחריים ואירועים.
          </p>
        </div>
        <div ref={ref5} className={`project ${inView5 ? "visible" : "hidden"}`}>
          <LazyLoadImage
            src="kankai-project.jpg"
            alt="תאורת פסי לד בבר סושי 'KanKai Bar' בתל אביב"
            effect="blur"
          />
          <h3>תאורת פסי לד בבר סושי "KanKai Bar" בתל אביב</h3>
          <h4>מה עשינו:</h4>
          <p>
            התקנת פסי לדים לפי דרישת הלקוחה, תוך שמירה על מראה נקי וללא כבלים
            גלויים לעין.
          </p>
          <h4>התוצאה:</h4>
          <p>תאורה אסתטית שמשלימה את עיצוב הבר היוקרתי.</p>
        </div>
        <div ref={ref6} className={`project ${inView6 ? "visible" : "hidden"}`}>
          <LazyLoadImage
            src="led-project2.jpg"
            alt="תיקון מסך לד והחלפת פיקסלים לחברת 'אקרניניו'"
            effect="blur"
          />
          <h3>תיקון מסך לד והחלפת פיקסלים לחברת "אקרניניו"</h3>
          <h4>מה עשינו:</h4>
          <p>
            במסגרת הפרויקט, ביצענו תיקון מסך לד מתקדם עבור חברת "אקרניניו".
            הפרויקט כלל החלפת פיקסלים במודולים פיץ' 2.5, תוך שימוש בציוד מתקדם
            ושמירה על איכות גבוהה.
          </p>
          <h4>האתגר:</h4>
          <p>
            לטפל בפיקסלים פגומים במודולים רגישים מבלי לפגוע במבנה הכללי של המסך.
          </p>
          <h4>התוצאה:</h4>
          <p>
            המסך חזר לתפקוד מלא עם רמת פירוט מעולה, לשביעות רצון המלא של הלקוח.
          </p>
        </div>
        {/* <div style={{ display: 'none' }} ref={ref4} className={`project ${inView4 ? "visible" : "hidden"}`}>
        <LazyLoadImage
          src="led-project3.jpg"
          alt="מסכי לד גמישים לפרויקט אומנותי של IO Studio"
          effect="blur"
        />
        <h3>מסכי לד גמישים לפרויקט אומנותי של IO Studio</h3>
        <h4>מה עשינו:</h4>
        <p>
          התקנת מסכי לד גמישים ובקר מקומי לפרויקט אומנותי ייחודי מבית IO
          Studio.
        </p>
        <h4>התוצאה:</h4>
        <p>יצירת אמנות חיה ומרשימה המשלבת טכנולוגיה ועיצוב.</p>
      </div> */}
      </div>

      <p>
        רוצה לדעת עוד על הפרויקטים שלנו? <a href="#contact">צור קשר</a> עוד היום
        לקבלת ייעוץ מקצועי!
      </p>
    </div>
  );
};

export default Projects;
