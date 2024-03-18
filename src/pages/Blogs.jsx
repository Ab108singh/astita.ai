import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import Navbar from '../header/Navbar';

const Blog = () => {
  return (

    <div className="bg-gray-100">
        <Navbar/>
      {/* Hero Section */}
      <section className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white animate-fadeIn">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Blog</h1>
          <p className="text-lg md:text-xl animate-bounce">Explore the Latest Insights</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white animate-fadeInUp">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Introduction</h2>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada libero ut est malesuada, eget consequat nunc mattis.</p>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-gray-200 animate-fadeInUp">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Articles</h2>
          {/* Featured Article 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Article Title 1</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada libero ut est malesuada, eget consequat nunc mattis.</p>
          </div>
          {/* Featured Article 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Article Title 2</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada libero ut est malesuada, eget consequat nunc mattis.</p>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-16 bg-white animate-fadeInUp">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Recent Posts</h2>
          {/* Recent Post 1 */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Post Title 1</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada libero ut est malesuada, eget consequat nunc mattis.</p>
          </div>
          {/* Recent Post 2 */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Post Title 2</h3>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada libero ut est malesuada, eget consequat nunc mattis.</p>
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

export default Blog;
