import React from 'react';
import Navbar from '../header/Navbar';

const AboutPage = () => {
  return (
    <div className="bg-gray-100">
        <Navbar/>
      {/* Hero Section */}
      <section className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white animate-fadeIn">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl animate-bounce">Discover Our Story</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white animate-fadeInUp">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Who We Are</h2>
          <p className="text-gray-700">We are a software company dedicated to leveraging cutting-edge technologies to create innovative solutions that empower businesses and individuals. Our team consists of passionate experts who are committed to delivering excellence in every project.</p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-200 animate-fadeInUp">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Mission</h2>
          <p className="text-gray-700">Our mission is to transform ideas into reality through the power of technology. We strive to make a positive impact on society by developing innovative software solutions that address real-world challenges and drive progress.</p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white animate-fadeInUp">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Core Values</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Commitment to excellence</li>
            <li>Innovation and creativity</li>
            <li>Integrity and transparency</li>
            <li>Continuous learning and improvement</li>
          </ul>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-gray-200 animate-fadeInUp">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Team</h2>
          {/* Replace with your team members' information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-2">John Doe</h3>
              <p className="text-gray-700">CEO</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Jane Smith</h3>
              <p className="text-gray-700">CTO</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Alex Johnson</h3>
              <p className="text-gray-700">Lead Developer</p>
            </div>
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

export default AboutPage;
