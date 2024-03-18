import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side */}
        <div className="text-center md:text-left">
          <p className="text-lg font-bold">Company Name</p>
          <p className="text-sm">123 Street Name, City, Country</p>
        </div>
        {/* Right side */}
        <div className="text-center md:text-right">
          <p className="text-sm">Follow Us:</p>
          <div className="flex justify-center md:justify-end mt-2">
            <a href="#" className="text-white mr-4 hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white mr-4 hover:text-gray-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white mr-4 hover:text-gray-400"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
