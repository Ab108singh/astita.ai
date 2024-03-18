import React from 'react';
import Footer from './Footer';
import Navbar from '../header/Navbar';
// Assuming you have a Navbar component

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="text-center">
          <h1 className="text-5xl md:text-8xl font-bold mb-4 animate-bounce">Welcome to Astita.ai</h1>
          <p className="text-xl md:text-2xl animate-pulse">Empowering the Future with AI</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8  items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Who We Are</h3>
              <p className="text-gray-700">Astita.ai is a software company specializing in artificial intelligence solutions. We aim to revolutionize industries by harnessing the power of AI to solve complex problems.</p>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">Our mission is to make AI accessible and beneficial to everyone. We strive to develop innovative AI technologies that drive positive change and improve lives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto overflow-x-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Services</h2>
          <div className="flex space-x-4">
            {/* Service Card 1 */}
            <div className="bg-gray-200 rounded-lg p-6 flex flex-col justify-center items-center">
              <h3 className="text-xl md:text-2xl font-bold mb-4">AI Consulting</h3>
              <p className="text-gray-700 text-center">Expert guidance and support for implementing AI solutions tailored to your business needs.</p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-gray-200 rounded-lg p-6 flex flex-col justify-center items-center">
              <h3 className="text-xl md:text-2xl font-bold mb-4">AI Development</h3>
              <p className="text-gray-700 text-center">Custom AI software development to automate processes and enhance productivity.</p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-gray-200 rounded-lg p-6 flex flex-col justify-center items-center">
              <h3 className="text-xl md:text-2xl font-bold mb-4">AI Training</h3>
              <p className="text-gray-700 text-center">Comprehensive training programs to empower your team with AI skills and knowledge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h2>
          <div className="flex justify-center items-center">
            <p className="text-lg">For inquiries and collaborations, reach out to us at <span className="underline">info@astita.ai</span></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
