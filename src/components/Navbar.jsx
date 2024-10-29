import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 sm:px-6 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-between items-center">
        
      
        <div className="text-2xl font-bold hover:text-red-400 hidden lg:block">
          Md Saquib Anwar
        </div>
        
        
        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

    
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex flex-col md:flex-row items-center`}
        >
          <a href="#home" className="hover:text-gray-400 text-sm lg:text-lg px-4 py-2">Home</a>
          <a href="#AboutMe" className="hover:text-gray-400 text-sm lg:text-lg px-4 py-2">About Me</a>
          <a href="#Services" className="hover:text-gray-400 text-sm lg:text-lg px-4 py-2">Services</a>
          <a href="#Projects" className="hover:text-gray-400 text-sm lg:text-lg px-4 py-2">Projects</a>
          <a href="#Contact" className="hover:text-gray-400 text-sm lg:text-lg px-4 py-2">Contact</a>
        </div>

       
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
