import React from 'react';
import '../Assets/WebMockups.css'; // Custom CSS if needed

// Example mockup images
import mockup1 from '../Assets/images/mockup1.jpg';
import mockup3 from '../Assets/images/creative-portfolio.jpg';
// import mockup2 from '../Assets/images/mockup2.png';
// import mockup3 from '../Assets/images/mockup3.png';

const mockups = [
  {
    img: mockup1,
    title: 'Modern Business Website',
    description:
      'A sleek and professional website designed for a modern business. This project features a clean layout with intuitive navigation, interactive elements, and a responsive design that ensures a seamless user experience across all devices. The color scheme and typography were carefully selected to reflect the brand\'s identity and values.',
  },
  {
    img: mockup1,
    title: 'E-commerce Platform',
    description:
      'An engaging and user-friendly e-commerce platform created to provide an exceptional shopping experience. This project includes a customizable product catalog, secure payment gateway integration, and advanced search functionality. The design focuses on usability, ensuring customers can easily find and purchase products.',
  },
  {
    img: mockup3,
    title: 'Dark Gallery',
    description:
      'Dark Gallery is a modern photo gallery application built with ReactJS. It integrates the Unsplash API to provide an engaging way to explore breathtaking images. Designed with a sleek, dark-themed interface, this project showcases my skills in API integration, responsive design, and front-end development.',
  },
  // Add more mockups as needed
];

const WebMockups = () => {
  return (
    <section className="web-mockups py-12 bg-gray-100 text-center">
      <h2 className="text-2xl mb-6 text-gray-800">Web Mockups</h2>
      <div className="mockup-grid">
        {mockups.map((mockup, index) => (
          <div
            key={index}
            className={`mockup-card grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 ${
              index % 2 === 0 ? '' : 'md:flex-row-reverse'
            }`}
          >
            <div className="mockup-image">
              <img src={mockup.img} alt={mockup.title} className="w-full h-auto rounded-lg" />
            </div>
            <div className="mockup-description flex flex-col justify-center p-6">
              <h3 className="text-xl mt-4 md:mt-0 text-gray-700">{mockup.title}</h3>
              <p className="text-gray-600">{mockup.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebMockups;
