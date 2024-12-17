import React from 'react';
import '../Assets/ContactSection.css'; // Ensure you have matching styles

const ContactSection = () => {
  return (
    <section className="contact-section py-16 bg-gradient-to-r from-gray-100 via-white to-gray-200 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h2>
        <p className="text-gray-600 mb-10">
          Feel free to reach out with any questions or collaborations. I'd love to hear from you!
        </p>
        <form className="contact-form max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-800 text-sm font-medium mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-800 text-sm font-medium mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-800 text-sm font-medium mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
              placeholder="Type your message here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
        <h1 className="text-xl text-gray-700 font-medium">Or send me an Email</h1>
        <h2 className="text-lg text-gray-500 mb-8">acaljeanson@gmail.com</h2>
      </div>
    </section>
  );
};

export default ContactSection;
