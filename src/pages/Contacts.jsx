import React from 'react';
import Navbar from '../header/Navbar';

const ContactPage = () => {
  return (
    <div className="bg-gray-100">
        <Navbar/>
      {/* Hero Section */}
      <section className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white animate-fadeIn">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl animate-bounce">Get in Touch with Our Team</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white animate-fadeInUp">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Send us a Message</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Your Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Your Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" name="message" rows="5" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Message</button>
          </form>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-200 animate-fadeInUp">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-700">info@example.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-700">+123 456 7890</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-gray-700">123 Street Name, City, Country</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white animate-fadeInUp">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Location</h2>
          <div className="relative h-64">
            {/* Replace the map embed code with your own */}
            <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678910111213!2dLongitude!3dLatitude!4m5!3m4!1s0x0:0x0!8m2!3dLatitude!4dLongitude" className="w-full h-full rounded-lg shadow-md" allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center animate-fadeInUp">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
