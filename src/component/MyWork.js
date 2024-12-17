import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Assets/MyWorks.css"; // Import your styles

// project images
import project1 from "../Assets/images/project1.jpg";
import project2 from "../Assets/images/project2.jpg";
import project3 from "../Assets/images/project3.png";
import project4 from "../Assets/images/project4.JPG";
import logo from "../Assets/images/recent-logo1.svg";
import color from "../Assets/images/color1.svg";
import jersey1 from "../Assets/images/jersey1.jpg";
import jacket from "../Assets/images/jacket.jpg";

// Register GSAP plugins (this is not an import)
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    img: project1,
    title: "Recent Logo project",
    description:
      "Creative and professional logo designs for branding and identity.",
    details:
      "Designed for a startup company aiming to represent their brand as innovative and professional. Tools used include Adobe Illustrator and Photoshop.",
    picture1: logo,
    hypothesis: "First thing I do is finding out the problem of my client...",
    picture2: color,
    solution:
      "So first I do is search of color that suits the problem of the client...",
    mockups: project1,
  },
  {
    img: project2,
    title: "Recent Posters design",
    description:
      "Eye-catching poster designs that convey messages effectively.",
    details:
      "Crafted promotional posters for events and marketing campaigns...",
    picture1: logo,
    hypothesis: "First thing I do is finding out the problem of my client...",
    picture2: color,
    solution:
      "So first I do is search of color that suits the problem of the client...",
    mockups: project1,
  },
  {
    img: project3,
    title: "Recent Shirt Design",
    description: "Stylish and unique shirt designs for custom apparel.",
    details: "Worked with local brands to create wearable art...",
    picture1: jacket,
    hypothesis: "First thing I do is finding out the problem of my client...",
    picture2: jersey1,
    solution:
      "So first I do is search of color that suits the problem of the client...",
    mockups: project1,
  },
  {
    img: project4,
    title: "Recent Tabloid project",
    description:
      "Professional tabloid layouts designed with creativity and structure.",
    details: "Developed a clean and engaging tabloid layout...",
    picture1: logo,
    hypothesis: "First thing I do is finding out the problem of my client...",
    picture2: color,
    solution:
      "So first I do is search of color that suits the problem of the client...",
    mockups: project1,
  },
];

const MyWorks = () => {
  const sectionRef = useRef(null);
  const modalContentRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;
    const projectElements = section.querySelectorAll(".project-section");

    // GSAP Scroll Animation
    projectElements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const openModal = (project) => {
    setActiveProject(project);
    setIsModalOpen(true);

    // Animate modal content
    setTimeout(() => {
      gsap.fromTo(
        modalContentRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" }
      );
    }, 0);
  };

  const closeModal = () => {
    // Animate modal closing
    gsap.to(modalContentRef.current, {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.3,
      ease: "power3.in",
      onComplete: () => {
        setIsModalOpen(false);
        setActiveProject(null);
      },
    });
  };

  return (
    <section className="my-works" ref={sectionRef}>
      <div className="container">
        <h2>Recent Works</h2>
        <p className="section-description">
          Explore a variety of my creative and professional projects below.
        </p>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-section ${index % 2 === 0 ? "left" : "right"}`}
            onClick={() => openModal(project)}
          >
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="project-image-wrapper">
              <img
                src={project.img}
                alt={project.title}
                className="project-image"
              />
            </div>
          </div>
        ))}

        {isModalOpen && activeProject && (
          <div className="modal">
            <div className="modal-overlay" onClick={closeModal}></div>
            <div className="modal-content" ref={modalContentRef}>
              <button className="close-modal" onClick={closeModal}>
                &times;
              </button>
              <h3>{activeProject.title}</h3>
              <img
                src={activeProject.img}
                alt={activeProject.title}
                className="modal-image"
              />
              <p>{activeProject.details}</p>

              {/* Pictures */}
              <div className="modal-images">
                <div className="modal-image-wrapper">
                  <img
                    src={activeProject.picture1}
                    alt="Picture 1"
                    className="modal-image"
                  />
                </div>
                <div className="modal-image-wrapper">
                  <img
                    src={activeProject.picture2}
                    alt="Picture 2"
                    className="modal-image"
                  />
                </div>
              </div>

              {/* Mockups */}
              <div className="modal-section">
                <h4>Mockups</h4>
                <img
                  src={activeProject.mockups}
                  alt="Mockup"
                  className="modal-image"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyWorks;
