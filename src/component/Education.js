import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Assets/Education.css'; // Separate styles for the Education component
import webFundamentals from '../Assets/images/webfundamentals.JPG';
import frontEnd from '../Assets/images/frontend.JPG';
import phpAdvance from '../Assets/images/advancephp.JPG';
import WebDevelopment from '../Assets/images/web-development.JPG';
import BoardPasser from '../Assets/images/board.JPG';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    title: 'Web Development Certification',
    institution: 'Village88',
    year: '2024',
    certificate: webFundamentals,
  },
  {
    title: 'Front-end Development Certification',
    institution: 'Village88',
    year: '2024',
    certificate: frontEnd,
  },
  {
    title: 'Advanced PHP Certification',
    institution: 'Village88',
    year: '2024',
    certificate: phpAdvance,
  },
  {
    title: 'Web Development',
    institution: 'KodeGo',
    year: '2023',
    certificate: WebDevelopment,
  },
  {
    title: 'Bachelor of Secondary Education Major in Physical Science',
    institution: 'Sacred Heart College',
    year: '2017-2018',
    certificate: BoardPasser,
    link: 'https://boardexams.ph/list-of-passers/september-2024-licensure-exam-for-teachers-let-secondary-level/a-b-passers/',
  },
];

const Education = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCertificate, setCurrentCertificate] = useState('');
  const [currentLink, setCurrentLink] = useState('');

  useEffect(() => {
    gsap.fromTo(
      '.education-item',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.education-list',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const openModal = (certificate, link) => {
    setCurrentCertificate(certificate);
    setCurrentLink(link);
    setIsModalOpen(true);

    gsap.fromTo(
      '.modal-content',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.3 }
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentCertificate('');
    setCurrentLink('');
  };

  return (
    <section className="education py-12 bg-gray-100 text-center">
      <h2 className="text-3xl mb-6 text-gray-800">My Education</h2>
      <p className="text-3xl mb-6 text-gray-800">Recent Certificates</p>
      <div className="education-list max-w-4xl mx-auto">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="education-item mb-8 p-6 bg-white rounded-lg shadow-md"
          >
            <h3 className="text-xl text-gray-800 font-semibold">{edu.title}</h3>
            <p className="text-gray-600">
              {edu.institution} - {edu.year}
            </p>
            {edu.certificate && (
              <button
                onClick={() => openModal(edu.certificate, edu.link)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                View Certificate
              </button>
            )}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="modal-content bg-white p-6 rounded-lg relative max-w-lg w-full shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            <img
              src={currentCertificate}
              alt="Certificate"
              className="w-full h-auto rounded-md"
            />
            <p className="mt-4 text-gray-700 text-sm">
              This is the official certificate for the selected course.
            </p>
            {currentLink && (
              <a
                href={currentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 underline hover:text-blue-800"
              >
                september 2024, Professional teachers BOARD Passer
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
