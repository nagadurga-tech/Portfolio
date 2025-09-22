import React from 'react';
import { useInView } from 'react-intersection-observer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true });
  const { ref: achievementsRef, inView: achievementsInView } = useInView({ triggerOnce: true });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true });

  return (
    <div className="font-sans">
      <Navbar/>
      <Hero />

      <div ref={aboutRef}>
        <About isVisible={aboutInView} />
      </div>

      <div ref={skillsRef}>
        <Skills isVisible={skillsInView} />
      </div>

      <div ref={projectsRef}>
        <Projects isVisible={projectsInView} />
      </div>

      <div ref={achievementsRef}>
        <Achievements isVisible={achievementsInView} />
      </div>

      <div ref={contactRef}>
        <Contact isVisible={contactInView} />
      </div>

      <Footer />
    </div>
  );
};

export default App;
