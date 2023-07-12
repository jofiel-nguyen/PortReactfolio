import React from 'react';

function Portfolio() {
  return (
    <section id="my-work">
      <h2>My Work</h2>
      <ul>
        <li>
          <h3>Ping Pong Game</h3>
          <a href="../project/pinponggame.html" target="_blank">
            <img src="../assets/images/project1.png" alt="" width="300" height="200" />
          </a>
          <p>
            <em>Ping pong game that takes place in a galaxy environment.</em>
          </p>
        </li>
        <li>
          <h3>My Weather Apps</h3>
          <a href="../project/getweather.html" target="_blank">
            <img src="../assets/images/project2.png" alt="" width="300" height="200" />
          </a>
          <p>
            <em>Html, JavasScript and Fetch API was used for creating a website to check the next 3 or 5 days in the location users want.</em>
          </p>
        </li>
      
      </ul>
    </section>
  );
}

export default Portfolio;
