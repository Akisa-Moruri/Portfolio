import React, { useEffect } from 'react';
import Typed from 'typed.js';
import Myimage from '../assets/Myimage.jpg';


function Home() {
  useEffect(() => {
    const typed = new Typed('.typing', {
      strings: ['', 'FullStack Developer,', 'Frontend Developer,', 'Backend Developer,', 'Geospatial Analyst.','Land Surveyor.'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy(); 
    };
  }, []);

  return (
    <div className="w-full h-full bg-gray-800 dark:bg-gray-200">
      <div className="h-full w-full mx-auto relative top-12 pb-20 xl:px-16 px-8 flex md:flex-row flex-col gap-4 justify-center items-center pt-4">
        <div className="w-full relative">
          <img
            className="shadow-2xl shadow-indigo-600 animate-[spin_12s_linear_infinite] absolute left-0 right-0 rounded-full lg:max-w-[70%] max-w-[60%] mx-auto"
            src={Myimage}
            alt="Profile Image"
          />
          <img
            className="relative z-10 rounded-full lg:max-w-[70%] max-w-[60%] mx-auto outline outline-[.7rem] outline-offset-[.1rem] outline-rose-400/30"
            src={Myimage}
            alt="Profile Image"
          />
        </div>
        <div className="w-full flex flex-col justify-center gap-4 md:text-left text-center text-white dark:text-gray-800 md:mt-0 sm:mt-8 mt-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-semibold font-serif">Hello, My name is Akisa Moruri</h1>
          <h2 className="capitalize text-green-400">I'm <span className="typing text-indigo-600 dark:text-indigo-600">fullstack developer</span></h2>
          <p>I'm passionate about crafting digital experiences that push the boundaries of creativity, technology, and human connection. Right now, I’m focused on building products that put people first—accessible, intuitive, and designed to enhance everyday life. My goal is to shape technology that not only meets needs but truly empowers users, making every interaction feel seamless, inclusive, and exciting. By blending innovation with empathy, I strive to create digital worlds where everyone feels welcome and engaged.</p>
          <div className="mt-6 flex sm:flex-row flex-col gap-4 sm:justify-start justify-center">
          <button className="p-2 px-6 text-white font-semibold rounded-full outline outline-2 outline-green-500 hover:bg-green-600 transition ease-in-out delay-150">
          <a href="https://wa.me/254795105127?text=<>" target="_blank" rel="noopener noreferrer">
            Hire Me
          </a>
</button>

            <button className="p-2 px-6 text-white font-semibold rounded-full outline outline-2 outline-indigo-500 hover:bg-indigo-600 transition ease-in-out delay-150">Download CV</button>
          </div>
        </div>
      </div>
      

     
    </div>
  );
}

export default Home;
