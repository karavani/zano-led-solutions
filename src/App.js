import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "./components/Header.css";
import "./components/Home.css";
import "./components/Services.css";
import "./components/Projects.css";
import "./components/Contact.css";
import Footer from "./components/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const { ref: homeRef, inView: homeInView } = useInView({ triggerOnce: true });
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true });

  return (
    <div className="app">
      <Header />
      <div id="home" ref={homeRef} className={`section ${homeInView ? "visible" : "hidden"}`}>
        <Home />
      </div>
      <div id="services" ref={servicesRef} className={`section ${servicesInView ? "visible" : "hidden"}`}>
        <Services />
      </div>
      <div id="projects" ref={projectsRef} className={`section ${projectsInView ? "visible" : "hidden"}`}>
        <Projects />
      </div>
      <div id="contact" ref={contactRef} className={`contactSection section ${contactInView ? "visible" : "hidden"}`}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
