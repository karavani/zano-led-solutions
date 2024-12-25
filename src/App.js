import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";

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
      <div ref={homeRef} className={`section ${homeInView ? "visible" : "hidden"}`}>
        <Home />
      </div>
      <div ref={servicesRef} className={`section ${servicesInView ? "visible" : "hidden"}`}>
        <Services />
      </div>
      <div ref={projectsRef} className={`section ${projectsInView ? "visible" : "hidden"}`}>
        <Projects />
      </div>
      <div ref={contactRef} className={`section ${contactInView ? "visible" : "hidden"}`}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
