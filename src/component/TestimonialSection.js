import React from 'react';
import '../Assets/Testimonial.css'; // Custom CSS if needed

const testimonials = [
  {
    name: 'John Doe',
    title: 'CEO, Example Corp',
    testimonial: 'This service is fantastic! It has significantly improved our workflow and productivity. Highly recommended!',
    avatar: 'https://via.placeholder.com/100' // Placeholder image, replace with actual avatar
  },
  {
    name: 'Jane Smith',
    title: 'Marketing Director, ABC Company',
    testimonial: 'A game-changer for our marketing team. The ease of use and powerful features are unmatched.',
    avatar: 'https://via.placeholder.com/100' // Placeholder image, replace with actual avatar
  },
  {
    name: 'Sam Wilson',
    title: 'Developer, XYZ Ltd',
    testimonial: 'The best tool I’ve used in years. It has everything a developer needs to get the job done efficiently.',
    avatar: 'https://via.placeholder.com/100' // Placeholder image, replace with actual avatar
  }
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section py-12 bg-gray-50 text-center">
      <h2 className="text-3xl mb-8 text-gray-800 font-bold">Testimonials</h2>
      <div className="testimonial-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card p-6 bg-white rounded-lg shadow-lg">
            <img src={testimonial.avatar} alt={`${testimonial.name}'s avatar`} className="w-16 h-16 mx-auto rounded-full mb-4" />
            <p className="text-lg text-gray-600 mb-4">"{testimonial.testimonial}"</p>
            <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
