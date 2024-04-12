import React from 'react';
import './About.css'; // Import CSS file for styling

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi! My Name is James Cullen and I am a 23 year old Software Engineer. I got my BS in Computer 
            Science from Northeastern University and I am excited to continue to learn more! In my free time
            I like to play basketball, skateboard, and travel.
          </p>
        </div>
        <div className="about-image">
          <img src="/logo192.png" alt="About Us" />
        </div>
      </div>
    </div>
  );
}

export default About;