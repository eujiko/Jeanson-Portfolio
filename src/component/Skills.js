import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faPhp, faFigma, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faPalette, faVectorSquare, faCamera, faPenNib, faCode } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Assets/Skills.css';
import Education from '../component/Education';
const skills = [
  { icon: faPalette, name: 'Adobe Photoshop' },
  { icon: faVectorSquare, name: 'Adobe Illustrator' },
  { icon: faCamera, name: 'Adobe Lightroom' },
  { icon: faPenNib, name: 'Adobe InDesign' },
  { icon: faHtml5, name: 'HTML' },
  { icon: faCss3Alt, name: 'CSS' },
  { icon: faJsSquare, name: 'JavaScript' },
  { icon: faReact, name: 'React.js' },
  { icon: faPhp, name: 'PHP' },
  { icon: faCode, name: 'CodeIgniter' },
  { icon: faFigma, name: 'Figma' },
  { icon: faBootstrap, name: 'Bootstrap' }
];

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

const Skills = () => {
  useEffect(() => {
    // Animate skill cards on scroll
    gsap.fromTo(
      '.skill-card',
      {
        opacity: 0,
        y: 50, // Start from a lower position
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2, // Add staggered animation effect
        scrollTrigger: {
          trigger: '.skills-grid', // Trigger when the skills section is in the viewport
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div>
      {/* Skills Section */}
      <section className="skills py-12 bg-white text-center">
        <h2 className="text-2xl mb-6 text-gray-800">My Skills</h2>
        <div className="skills-grid grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card flex flex-col items-center bg-gray-100 p-3 rounded-full w-24 h-24 transition-transform transform hover:scale-105">
              <FontAwesomeIcon icon={skill.icon} size="2x" className="text-gray-700" />
              <h3 className="text-sm mt-2 text-gray-600">{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>
      <Education/>
    </div>
  );
};

export default Skills;
