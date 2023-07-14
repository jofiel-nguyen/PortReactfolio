import React from 'react';
import project1Image from '../assets/images/project1.png';
import project2Image from '../assets/images/project2.png';

function Portfolio() {
  return (
    <section id="my-work">
      <h2>My Work</h2>
      <ul>
        <li>
          <h3>Ping Pong Game</h3>
          <a href="/project/pinponggame.html" target="_blank" rel="noopener noreferrer">
            <img src={project1Image} alt="" width="300" height="200" />
          </a>
          <p>
            <em>Ping pong game that takes place in a galaxy environment.</em>
          </p>
        </li>
        <li>
          <h3>My Weather App</h3>
          <a href="/project/getweather.html" target="_blank" rel="noopener noreferrer">
            <img src={project2Image} alt="" width="300" height="200" />
          </a>
          <p>
            <em>HTML, JavaScript, and the Fetch API were used to create a website to check the next 3 or 5 days of weather in a chosen location.</em>
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
