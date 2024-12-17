import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Assets/AboutMe.css';

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  useEffect(() => {
    // GSAP scroll animations
    gsap.from('.about-me h2', {
      scrollTrigger: {
        trigger: '.about-me',
        start: 'top 80%', // Animation starts when the top of the section reaches 80% of the viewport
        end: 'bottom 20%', // Animation ends when the bottom of the section reaches 20% of the viewport
        scrub: true, // Smooth scroll effect
        markers: false, // You can set this to `true` for debugging
      },
      opacity: 0,
      y: 50,
      duration: 1.5,
    });

    gsap.from('.about-me p', {
      scrollTrigger: {
        trigger: '.about-me',
        start: 'top 75%',
        end: 'bottom 20%',
        scrub: true,
        markers: false,
      },
      opacity: 0,
      y: 50,
      duration: 1.5,
      stagger: 0.2, // Adds a slight delay between animations of each paragraph
    });
  }, []);

  return (
    <section className="about-me">
      <div className="container">
        <h2>About Me</h2>
        <p>
          Hello! I'm Jeanson Caboral Acal, a passionate graphic artist with over five years of experience in the industry. Since 2019, I've been dedicated to creating visually compelling designs that capture and communicate my clients' visions. Alongside my graphic design career, I've also worked as a freelance photographer, honing my skills in both capturing moments and enhancing them through design.
        </p>
        <p>
          My journey in the creative field is complemented by my academic background. I graduated with a degree in Secondary Education, majoring in Physical Science, and I am a licensed professional teacher. This diverse educational experience has equipped me with unique problem-solving skills and a meticulous approach to both art and technology.
        </p>
        <p>
          Driven by a desire to expand my skill set, I studied web development and earned four certificates in the field. This training has not only broadened my technical abilities but also deepened my understanding of design principles and user experience.
        </p>
        <p>
          With a strong foundation in both creative and technical disciplines, I am confident in my ability to deliver high-quality web development and graphic design services. I am physically and mentally equipped to take on new challenges and committed to continuous learning and professional growth.
        </p>
        <p>
          Let's work together to bring your ideas to life!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
