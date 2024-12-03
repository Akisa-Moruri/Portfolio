import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import mylogo from '../assets/mylogo.png'; // Import Logo

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-full bg-gray-800 dark:bg-gray-200">
      <header className="lg:px-16 px-4 flex flex-wrap items-center py-2 shadow-lg">
        {/* Logo Section */}
        <div className="flex-1 flex justify-between items-center">
          <img className="sm:w-[8rem] w-[14rem]" src={mylogo} alt="Logo" />
          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden block text-indigo-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:w-auto w-full`}
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-100 dark:text-gray-600 pt-4 md:pt-0">
              <li><HashLink smooth to="#home" className="md:p-4 py-3 px-0 block text-indigo-600 hover:text-indigo-400">Home</HashLink></li>
              <li><HashLink smooth to="#about" className="md:p-4 py-3 px-0 block hover:text-indigo-400">About Me</HashLink></li>
              <li><HashLink smooth to="#education" className="md:p-4 py-3 px-0 block hover:text-indigo-400">Education</HashLink></li>
              <li><HashLink smooth to="#experience" className="md:p-4 py-3 px-0 block hover:text-indigo-400">Experience</HashLink></li>
              <li><HashLink smooth to="#projects" className="md:p-4 py-3 px-0 block hover:text-indigo-400">Projects</HashLink></li>
              <li><HashLink smooth to="#contact" className="md:p-4 py-3 px-0 block md:mb-0 mb-2 hover:text-indigo-400">Contact</HashLink></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
