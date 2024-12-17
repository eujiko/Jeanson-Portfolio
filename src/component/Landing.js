import React, { useEffect } from 'react';
import { gsap } from 'gsap'; // Import GSAP
import '../Assets/LandingPage.css'; // Ensure this file has the correct styles
import logo from '../Assets/images/jca-logo.svg'; // Import the logo
import profile from '../Assets/images/profile.png'; // Import profile image

const LandingPage = () => {
  useEffect(() => {
    console.log('Running GSAP animation for logo');

    // GSAP animation for the logo: Fade in, zoom effect
    gsap.from('.logo > img', {
      opacity: 0,
      scale: 0.5,
      duration: 1.2,
      ease: 'power2.out',
    });

    // Additional GSAP animations for other elements
    gsap.from('.hero h1', {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'bounce.out',
      delay: 0.5,
    });

    gsap.from('.hero p', {
      opacity: 0,
      y: 40,
      duration: 1.5,
      ease: 'power2.out',
      delay: 1,
    });

    gsap.from('.cta-button', {
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      ease: 'power2.out',
      delay: 1.5,
    });

    gsap.from('.hero img', {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      ease: 'power2.out',
      delay: 1,
    });
  }, []);

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src={logo} alt="JCA Logo" />
        </div>
        <nav className="nav-links">
          <a href="#about" aria-label="About section">About</a>
          <a href="#projects" aria-label="Projects section">Projects</a>
          <a href="#contact" aria-label="Contact section">Contact</a>
          <a href="path_to_your_cv.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download CV">Download CV</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="profile-container">
          <img src={profile} alt="Profile of Jeanson Caboral Acal" className="profile-img" />
        </div>
        <h1>JEANSON CABORAL ACAL</h1>
        <p>
          I'm thrilled to have you here. Dive into my world of creativity, passion, and
          innovation. Explore my projects, get to know about me, and see how my skills and
          experiences can bring value to your endeavors. Whether you're a potential collaborator,
          an employer, or simply curious, I hope you find something that inspires you.
        </p>
        <a href="#projects" className="cta-button">Start Your Journey with Me</a>
      </section>
    </div>
  );
};

export default LandingPage;
