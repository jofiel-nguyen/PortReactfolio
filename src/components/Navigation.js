import React from 'react';

function Navigation({ currentSection, handleSectionChange }) {
  return (
    <nav>
      <ul>
        <li>
          <a
            href="#about"
            className={currentSection === 'About Me' ? 'active' : ''}
            onClick={() => handleSectionChange('About Me')}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className={currentSection === 'Portfolio' ? 'active' : ''}
            onClick={() => handleSectionChange('Portfolio')}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={currentSection === 'Contact' ? 'active' : ''}
            onClick={() => handleSectionChange('Contact')}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#resume"
            className={currentSection === 'Resume' ? 'active' : ''}
            onClick={() => handleSectionChange('Resume')}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
