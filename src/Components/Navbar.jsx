import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Logo from '../assets/Logo.png'; // Import Logo

function Navbar() {
  return (
    <div className="w-full h-full bg-gray-800 dark:bg-gray-200">
      <header className="lg:px-16 px-4 flex flex-wrap items-center py-2 shadow-lg">
        <div className="flex-1 flex justify-between items-center">
          <img className="sm:w-[4rem] w-[12rem]" src={Logo} alt="Logo" />
        </div>
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
          <svg className="fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />
        <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-100 dark:text-gray-600 pt-4 md:pt-0">
              <li><HashLink smooth to="#home" className="md:p-4 py-3 px-0 block text-indigo-600">Home</HashLink></li>
              <li><HashLink smooth to="#about" className="md:p-4 py-3 px-0 block">About Me</HashLink></li>
              <li><HashLink smooth to="#education" className="md:p-4 py-3 px-0 block">Education</HashLink></li>
              <li><HashLink smooth to="#experience" className="md:p-4 py-3 px-0 block">Experience</HashLink></li>
              <li><HashLink smooth to="#projects" className="md:p-4 py-3 px-0 block">Projects</HashLink></li>
              <li><HashLink smooth to="#contact" className="md:p-4 py-3 px-0 block md:mb-0 mb-2">Contact</HashLink></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
