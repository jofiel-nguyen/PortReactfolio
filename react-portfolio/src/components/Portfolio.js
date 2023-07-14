import React from 'react';
import project1Image from '../assets/images/project1.png';
import project2Image from '../assets/images/project2.png';
import project3Image from '../assets/images/project3.gif'; 
import project4Image from '../assets/images/project4.gif'; 
import project5Image from '../assets/images/project5.png'; 
function Portfolio() {
  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '4px',
  };

  return (
    <section id="my-work">
      <h2 style={{ textAlign: 'center' }}>My Work</h2>
      <ul style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none', padding: 0 }}>
      <li style={{ width: '30%', border: '1px solid #ccc', borderRadius: '4px', padding: '20px' }}>
          <h3>
            <a href="https://pwaapps-6193e22597e4.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              Text Editor Web Application
            </a>
          </h3>
          <img src={project3Image} alt="" style={imageStyle} />
          <p>
            <em>
              This is a project that showcases your skills in building a text editor that runs in the browser. The application is a single-page application that meets the Progressive Web App (PWA) criteria. It incorporates various data persistence techniques to ensure reliability and redundancy, even when offline.
            </em>
          </p>
          <p>
            GitHub Repository:{' '}
            <a href="https://github.com/nhunguyen-debug/PWA-From-Rice.git" target="_blank" rel="noopener noreferrer">
              Link
            </a>
          </p>
        </li>

        <li style={{ width: '30%', border: '1px solid #ccc', borderRadius: '4px', padding: '20px' }}>
          <h3>NoSQL Social Network API</h3>
          <img src={project4Image} alt="" style={imageStyle} />
          <p>
            <em>
              This is an API for a social network web application built using MongoDB, Express.js, and Mongoose. It allows users to share their thoughts, react to friends' thoughts, and create a friend list.
            </em>
          </p>
        </li>
        <li style={{ width: '30%', border: '1px solid #ccc', borderRadius: '4px', padding: '20px' }}>
          <h3>Ping Pong Game</h3>
          <img src={project1Image} alt="" style={imageStyle} />
          <p>
            <em>Ping pong game that takes place in a galaxy environment.</em>
          </p>
        </li>
        <li style={{ width: '30%', border: '1px solid #ccc', borderRadius: '4px', padding: '20px' }}>
          <h3> <a href="https://nhunguyen-debug.github.io/Get-weather-challenge-for-rice/" target="_blank" rel="noopener noreferrer">
          Get Weather Apps
        </a></h3>
          <img src={project2Image} alt="" style={imageStyle} />
          <p>
            <em>HTML, JavaScript, and the Fetch API were used to create a website to check the next 3 or 5 days of weather in a chosen location.</em>
          </p>
          <p>
          GitHub Repository:{' '}
          <a href="https://github.com/nhunguyen-debug/Get-weather-challenge-for-rice.git" target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </p>
        </li>
        <li style={{ width: '30%', border: '1px solid #ccc', borderRadius: '4px', padding: '20px' }}>
      <h3>
        <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">
          MVC Tech Blog
        </a>
        </h3>
        <img src={project5Image} alt="" style={imageStyle} />
        <p>
          <em>
            Writing about tech can be just as important as making it. I spend plenty of time creating new applications and debugging existing codebases, but I also devote some of my time to reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!
          </em>
        </p>
        <p>
          GitHub Repository:{' '}
          <a href="https://github.com/nhunguyen-debug/MVC-From-Rice-Wren.git" target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </p>
      </li>

      </ul>
    </section>
  );
}

export default Portfolio;
