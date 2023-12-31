import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faTiktok,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import '../App.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2023 Wren's Portfolio</p>
        <div className="social-links">
          <a
            href="https://github.com/jofiel-nguyen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/jofiel-nguyen-a63359269/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a
            href="https://stackoverflow.com/users/22229533/nhu-nguyen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faStackOverflow} className="icon" />
          </a>
          <a
            href="https://tiktok.com/@wrenyvette"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTiktok} className="icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCztwHDEn_gZY8GRpLKSBGZA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} className="icon" />
          </a>
          <a
            href="https://twitter.com/wyn0925"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
