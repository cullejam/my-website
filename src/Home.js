import React from 'react';
import { animated, useSpring, useScroll } from 'react-spring'; // Import animated and useSpring hooks
import './Home.css'; // Import CSS file for styling

function Home() {

  const { scrollY } = useScroll();

  const titleSpring = useSpring({
    opacity: scrollY.interpolate([0, 150], [1, 0.5]), // Fade out title when scrolling down
    transform: scrollY.interpolate([0, 150], ['translateY(0px)', 'translateY(-100px)']), // Move title up when scrolling down
  });

  const imageSpring = useSpring({
    opacity: scrollY.interpolate([0, 100], [0, 1]), // Fade in image 3 when scrolling down
    transform: scrollY.interpolate([0, 100], ['translateY(9px)', 'translateY(0px)']), // Move image 3 up when scrolling down
  });

  const heroBgSpring = useSpring({
    from: { background: 'linear-gradient(to bottom right, #111111, #000000)' }, // Darker gradient
    to: [
      { background: 'linear-gradient(to bottom right, #111111, #000000)' }, // Start with darker gradient
      { background: 'linear-gradient(to bottom right, #4a47a3, #ff5e62)' }, // Intermediate state: transition to lighter gradient
      { background: 'linear-gradient(to bottom right, #4a47a3, #ff5e62)' }, // Final state: lighter gradient
    ],
    config: { duration: 700 }, // Smooth transition duration
  });

  return (
    <div>

      {/* Hero Section */}
      <animated.div style={heroBgSpring} className="hero-section">
        <div className="hero-content">
        <animated.h1 style={titleSpring}>Welcome to my Website</animated.h1>
        <animated.p style={titleSpring}>Built by James Cullen</animated.p>
        <animated.a href="#" className="button" style={titleSpring}>Learn More</animated.a>
        </div>
      </animated.div>

      <div className="images-section">
      <h2 className="section-title">Pictures!</h2>
        <animated.img src="/logo192.png" alt="Image 1" style={imageSpring} />
        <animated.img src="/logo192.png" alt="Image 2" style={imageSpring} />
        <animated.img src="/logo192.png" alt="Image 3" style={imageSpring} />
      </div>

      {/* About Section */}
      <section className="about-section">
        <h2 className="section-title">About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper gravida orci, nec ultrices est feugiat non.</p>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2 className="section-title">Our Projects</h2>
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Description of project 1</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Description of project 2</p>
        </div>
      </section>

      {/* Images Section */}
      <section className="images-section">
        <h2 className="section-title">Pictures!</h2>
        <img src="/logo192.png" alt="" className="gallery-image" />
        <img src="/logo192.png" alt="" className="gallery-image" />
        {/* Add more images as needed */}
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2 className="section-title">Contact Me</h2>
        <p>Email: jamescullen2019@gmail.com</p>
        <p>Phone: 262-416-2063</p>
      </section>
    </div>
  );
}

export default Home;