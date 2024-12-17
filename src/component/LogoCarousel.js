import React from 'react';
import '../Assets/LogoCarousel.css';
import logo1 from '../Assets/images/logo1.png'; 
import logo2 from '../Assets/images/logo2.png';
import logo3 from '../Assets/images/logo3.png';
import logo4 from '../Assets/images/logo4.png';
import logo5 from '../Assets/images/logo5.png';

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo1,
  // Add more logos as needed
];

const LogoCarousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-track">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
