import React from 'react';
import project1Image from '../assets/images/project1.png';
import project2Image from '../assets/images/project2.png';

function Portfolio() {
  const imageStyle = {
    width: '100%',
    height: '200px', // Adjust the height to your desired size
    objectFit: 'cover', // To maintain the aspect ratio and fill the container
    borderRadius: '4px',
  };

  return (
    <section id="my-work">
      <h2 style={{ textAlign: 'center' }}>My Work</h2>
      <ul style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none', padding: 0 }}>
        <li style={{ width: '45%', border: '1px solid #ccc', borderRadius: '4px', padding: '20px' }}>
          <h3>Ping Pong Game</h3>
          <img src={project1Image} alt="" style={imageStyle} />
          <p>
            <em>Ping pong game that takes place in a galaxy environment.</em>
          </p>
        </li>
        <li style={{ width: '45%', border: '1px solid #ccc', borderRadius: '4px', padding: '20px' }}>
          <h3>My Weather App</h3>
          <img src={project2Image} alt="" style={imageStyle} />
          <p>
            <em>HTML, JavaScript, and the Fetch API were used to create a website to check the next 3 or 5 days of weather in a chosen location.</em>
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
