import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to={'/'}>
            <span className='text-lg sm:text-2xl md:text-3xl font-extrabold font-serif text-slate-300 hover:text-slate-400'>Astita.ai</span>
          </Link>
          {/* <img src="/path/to/your/logo.png" alt="Logo" className="h-8 w-auto" /> */}
        </div>
        
        {/* Menu items */}
        <div className="flex items-center space-x-4">
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          <Link to="/career" className="text-white hover:text-gray-300">Career</Link>
          <Link to="/blogs" className="text-white hover:text-gray-300">Blogs</Link>
          <Link to="/contacts" className="text-white hover:text-gray-300">Contacts</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
