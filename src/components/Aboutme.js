import React from 'react';
import aboutMeImage from '../assets/images/photo-output.JPG';

function AboutMe() {
  return (
    <section id="about-me">
      <h2>About Me</h2>
        <img src={aboutMeImage} alt="" width="200" height="200" />
      <p>
        <em>Coding, gaming, and creating have always been my passions. There's something magical about the creative process that drives me to spend countless hours tinkering with code, exploring new game mechanics, and crafting unique works of art.</em>
      </p>
      <ul>
      <li>My name is Jofiel Nguyen. You can call me "Wren" or "Jofiel" and thank you for visiting my website.</li>
      <li>I have over three years of experience working as a pharmacy technician at CVS Pharmacy and conducting research in science at the Vietnam Academy of Science and Technology.</li>
      <li>In addition, I have pursued further education in the field of information technology. I have completed a full-stack developer boot camp at Rice University and have taken the highly-regarded CS50 course offered by Harvard University.</li>
      <li>I hold an associate of science degree from Lonestar College, where I achieved a GPA of 3.7. I have also earned graduation honors in pharmacy technician from Ashworth College, where I obtained certification in the field.</li>
    </ul>
<p>Overall, I am a highly skilled and passionate professional who is eager to take on new challenges and achieve great things.</p>
    </section>
  );
}

export default AboutMe;
