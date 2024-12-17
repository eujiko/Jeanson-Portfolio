import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Assets/Services.css';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    // GSAP animation for scroll effect
    gsap.fromTo(
      '.service-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section className="services py-16 bg-gray-100">
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">My Services</h2>
      <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Graphic Design Service */}
        <div className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Graphic Design</h3>
          <p className="text-gray-600 mb-4">
            I specialize in creating visually compelling designs, from logos to complete brand identity.
          </p>
          <div className="details">
            <h4 className="text-xl font-semibold">What Can I do</h4>
            <ul className="text-sm">
              <li>Branding</li>
              <li>Logo Design</li>
              <li>Print & Digital Media</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
        </div>

        {/* Web Development Service */}
        <div className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Web Development</h3>
          <p className="text-gray-600 mb-4">
            I create fast, responsive, and visually appealing websites using modern technologies.
          </p>
          <div className="details">
            <h4 className="text-xl font-semibold">What can I do</h4>
            <ul className="text-sm">
              <li>Responsive Web Design</li>
              <li>Single Page Applications (SPA)</li>
              <li>Performance Optimization</li>
              <li>API Integrations</li>
            </ul>
          </div>
        </div>

        {/* UI/UX Design Service */}
        <div className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">UI/UX Design</h3>
          <p className="text-gray-600 mb-4">
            I offer UI/UX design services to create intuitive, user-friendly interfaces.
          </p>
          <div className="details">
            <h4 className="text-xl font-semibold">What can I do</h4>
            <ul className="text-sm">
              <li>User Research</li>
              <li>Wireframing & Prototyping</li>
              <li>Usability Testing</li>
              <li>Interaction Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
