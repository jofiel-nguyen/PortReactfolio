import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/Aboutme';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('About Me');

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="App">
      <Header />
      <Navigation currentSection={currentSection} handleSectionChange={handleSectionChange} />
      <main>
        {currentSection === 'About Me' && <AboutMe />}
        {currentSection === 'Portfolio' && <Portfolio />}
        {currentSection === 'Contact' && <Contact />}
        {currentSection === 'Resume' && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
