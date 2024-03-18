import React from 'react';
import Navbar from '../header/Navbar';

const Career = () => {
  return (
    <div className="bg-gray-100">
        <Navbar/>
      {/* Hero Section */}
      <section className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white animate-fadeIn">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg md:text-xl animate-bounce">Explore Exciting Career Opportunities</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white animate-fadeInUp">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Who We Are</h2>
          <p className="text-gray-700">We are a dynamic and innovative company committed to driving positive change through technology. Our team is passionate about creating impactful solutions that transform industries and improve lives.</p>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 bg-gray-200 animate-fadeInUp">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Position Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Software Engineer</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada libero ut est malesuada, eget consequat nunc mattis.</p>
            </div>
            {/* Position Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Data Scientist</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada libero ut est malesuada, eget consequat nunc mattis.</p>
            </div>
            {/* Position Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-2">UX/UI Designer</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada libero ut est malesuada, eget consequat nunc mattis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-white animate-fadeInUp">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Join Us</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Opportunity to work with cutting-edge technologies</li>
            <li>Collaborative and inclusive work environment</li>
            <li>Professional development and growth opportunities</li>
            <li>Competitive compensation and benefits package</li>
          </ul>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-16 bg-gray-200 animate-fadeInUp">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">How to Apply</h2>
          <p className="text-gray-700">To apply for any of the above positions, please send your resume and cover letter to careers@example.com. We look forward to hearing from you!</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center animate-fadeInUp">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Career;
