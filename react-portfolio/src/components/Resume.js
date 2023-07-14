import React, { useState } from 'react';
import '../assets/Resume.css'
function Resume() {
  const [activeTab, setActiveTab] = useState('summary');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'summary':
        return (
          <div className="section">
            <h3 className="section-title">Summary</h3>
            <p>
              Dynamic and results-driven full stack developer with a strong educational background, industry certifications, and a passion for creating innovative solutions.
              Proficient in HTML, CSS, React JS, Python, jQuery, JavaScript, and SQL, with expertise in full stack development.
              Skilled in project management, problem-solving, and attention to detail, ensuring accuracy and efficiency.
              Looking for internships, part-time or remote jobs.
            </p>
          </div>
        );
      case 'experience':
        return (
          <div className="section">
            <h3 className="section-title">Experience</h3>
            <div class="sub-section">
            <p class="sub-section-title">Teaching Assistant</p>
            <p>Long An University of Economics and Industry, Tan AN, Long An</p>
            <p class="date">01/2017 - 08/2018</p>
            <ul>
                <li>Facilitated an intensive study skills class with 10 students over a 20-hour period, achieving a 40% increase in student retention</li>
                <li>Provided instruction in accounting and finance classes to undergraduate business students, increasing student retention by 60%</li>
                <li>Successfully completed a 6-month teaching assistant internship at a local business school with a 10% job satisfaction rating</li>
            </ul>
        </div>

        <div class="sub-section">
            <p class="sub-section-title">Data Analyst</p>
            <p>Foxconn Industrial Internet - FII, Houston, TX</p>
            <p class="date">09/2018 - 05/2020</p>
            <ul>
                <li>Repurposed existing data sets to incorporate new features and analytics, expanding the use of analytics across the organization</li>
                <li>Created reporting tools to help lower support costs by identifying time wasted serving customers</li>
                <li>Analyzed transcripts of customer service calls to identify and rank customer service issues</li>
                <li>Performed complex SQL queries to extract data from the database</li>
                <li>Researched and implemented new analytics methods to provide better metrics of employee performance and increase retention</li>
            </ul>
        </div>

        <div class="sub-section">
            <p class="sub-section-title">Chef/Assistant Manager</p>
            <p>Vegan Donut Restaurant, Houston, TX</p>
            <p class="date">02/2020 - 08/2020</p>
            <ul>
                <li>A strong background in the vegan food industry, particularly in a donut restaurant setting</li>
                <li>Creating delicious and visually appealing vegan donuts using innovative flavor combinations and high-quality ingredients</li>
                <li>Proficient in developing and executing menu items that cater to diverse dietary preferences and restrictions</li>
                <li>Expertise in managing kitchen operations, including inventory control, food cost analysis, and staff training</li>
                <li>Strong leadership and organizational abilities, ensuring efficient workflow and maintaining high standards of food quality and customer satisfaction</li>
            </ul>
        </div>

        <div class="sub-section">
            <p class="sub-section-title">Pharmacy Technician</p>
            <p>CVS Pharmacy, Houston, TX</p>
            <p class="date">09/2021 - 04/2023</p>
            <ul>
                <li>Performed scheduled medication pick-ups, verified accuracy of stock, and filed inventory reports</li>
                <li>Maintained education records of medication supplies and ensured the consistency of all records</li>
                <li>Provided technical assistance to the pharmacy manager and client and implemented management processes to ensure accurate medication management</li>
                <li>Maintained a high level of accuracy in filling prescriptions, resulting in a 10% increase in accuracy</li>
                <li>Wrote and implemented a new pharmacy ordering software system, resulting in a 20% increase in the number of prescriptions filled</li>
            </ul>
        </div>

          </div>
        );
      case 'skills':
        return (
          <div className="section">
  <h3 className="section-title">Skills</h3>
  <ul>
    <li>Computer literacy</li>
    <li>Restaurant experience</li>
    <li>Communication skills</li>
    <li>Microsoft Word</li>
    <li>Leadership</li>
    <li>Physical examinations</li>
    <li>Guest services</li>
    <li>Time management</li>
    <li>Bilingual (English, Spanish)</li>
    <li>Food service</li>
    <li>Microsoft Excel</li>
    <li>SQL</li>
    <li>JavaScript</li>
    <li>C++</li>
    <li>CSS</li>
    <li>HTML</li>
    <li>Python</li>
    <li>Project Management</li>
    <li>Marketing</li>
  </ul>
</div>

        );
      case 'education':
        return (
          <div className="section">
            <h3 className="section-title">Education</h3>
            <div className="sub-section">
              <p className="sub-section-title">Rice University | Houston, TX</p>
              <p>Full Stack Developers Boot Camp | 08/2023</p>
              <ul>
                <li>Successfully completed an intensive and comprehensive curriculum focused on full stack development</li>
                <li>Demonstrated proficiency in technologies such as HTML, CSS, JavaScript, React JS, Python, jQuery, and SQL</li>
                <li>Developed practical skills in building responsive and interactive web applications</li>
                <li>Collaborated effectively with peers on team projects, showcasing strong teamwork and communication abilities</li>
                <li>Consistently met project deadlines and delivered high-quality code and functionality</li>
                <li>Actively engaged in problem-solving and debugging, showcasing a strong aptitude for troubleshooting and finding innovative solutions</li>
                <li>Demonstrated adaptability and the ability to quickly learn and apply new technologies and frameworks</li>
                <li>Received positive feedback from instructors and peers on the quality and creativity of project work</li>
                <li>Proven ability to translate client requirements into functional and visually appealing web applications</li>
                <li>Showcased a strong work ethic, dedication, and commitment to continuous learning throughout the boot camp experience</li>
              </ul>
            </div>
            <div className="sub-section">
              <p className="sub-section-title">Lone Star College | Houston, TX</p>
              <p>Associate of Science | 04/2023</p>
              <ul>
                <li>Currently completing courses in computer science, Spanish</li>
                <li>Graduated summa cum laude—3.7 GPA</li>
                <li>Awards: President's List for 4 semesters</li>
                <li>Phi Theta Kappa Honor Society | Member | 2020 - Present</li>
                <li>Awarded for saving 8 lives through blood donation</li>
                <li>Volunteered on a monthly basis to prepare meals at the local community food bank</li>
              </ul>
            </div>
            <div className="sub-section">
              <p className="sub-section-title">Harvard University | Cambridge, MA</p>
              <p>CS50 Introduction to Computer Science | 02/2023</p>
              <ul>
                <li>Explored various topics, including abstraction, algorithms, data structures, software engineering, and web development</li>
                <li>Used languages like C, Python, SQL, JavaScript, CSS, and HTML</li>
                <li>Successfully completed the course's 9 problem sets</li>
              </ul>
            </div>
            <div className="sub-section">
              <p className="sub-section-title">Ashworth College | Norcross, GA</p>
              <p>Pharmacy Technician | 10/2022</p>
              <ul>
                <li>Maintained an exceptional GPA throughout the program</li>
                <li>Demonstrated a high level of dedication and commitment to jobs</li>
                <li>Successfully completed a comprehensive curriculum covering topics such as pharmaceutical calculations, pharmacology, pharmacy law, and medication safety</li>
                <li>Developed strong knowledge and proficiency in pharmacy operations, including medication dispensing, inventory management, and compounding techniques</li>
                <li>Proficient in utilizing pharmacy software systems to process prescriptions and manage patient profiles</li>
                <li>Completed hands-on practical experiences, such as clinical rotations or externships, to gain real-world exposure to pharmacy practice</li>
                <li>Graduated with a Pharmacy Technician diploma</li>
              </ul>
            </div>
          </div>
        );
        case 'about':
      return (
        <div className="section">
          <h3 className="section-title">About Me</h3>
          <ul>
            <li>My name is Thi Tu Nhu Nguyen. You can call me "Wren" and Thank you for reaching my Website</li>
            <li>I have experience working for over three years as a pharmacy technician at CVS Pharmacy, as well as in research science at the Vietnam Academy of Science and Technology.</li>
            <li>I have pursued additional education in information technology, including completing a full-stack developer boot camp at Rice University and taking the highly-regarded CS50 course offered by Harvard University.</li>
            <li>I hold an associate of science degree from Lonestar College with a GPA of 3.7, and have been recognized for my achievements with graduation honors in pharmacy technician from Ashworth College, where I also earned certification in the field.</li>
          </ul>
          <p>Overall, I present myself as a highly skilled and passionate professional who is ready to take on new challenges and achieve great things.</p>
        </div>
      );
      case 'download':
        return (
          <div className="section">
            <h3 className="section-title">Download Resume</h3>
            <p>Click the button below to download my resume:</p>
            <a href="assets/ITresume.pdf" download>Download Resume</a>

          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div id="resume">
     <nav className="resume-nav">
        <ul>
          <li className={activeTab === 'summary' ? 'active' : ''} onClick={() => handleTabClick('summary')}>Summary</li>
          <li className={activeTab === 'experience' ? 'active' : ''} onClick={() => handleTabClick('experience')}>Experience</li>
          <li className={activeTab === 'skills' ? 'active' : ''} onClick={() => handleTabClick('skills')}>Skills</li>
          <li className={activeTab === 'education' ? 'active' : ''} onClick={() => handleTabClick('education')}>Education</li>
          <li className={activeTab === 'about' ? 'active' : ''} onClick={() => handleTabClick('about')}>About Me</li>
          <li className={activeTab === 'download' ? 'active' : ''} onClick={() => handleTabClick('download')}>Download</li>
        </ul>
      </nav>
      


      {renderContent()}
    </div>
  );
}

export default Resume;
