import React from 'react';
import WorkImage from '../assets/WorkImage.jpg';

function About() {
  return (
    <section id="about" className="relative bg-white overflow-hidden mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="pt-1" />

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <header className="sm:text-center lg:text-left">
              <h2 className="my-6 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                About Me
              </h2>
              <p className="text-gray-900">
                A results-driven professional with a robust foundation in the Geo-spatial industry and full-stack development expertise. Proven track record of effectively resolving complex technical challenges and delivering innovative solutions.
              </p>
              <p className="mt-4 text-gray-900">
                Key expertise includes JavaScript, Next.js, ReactJS, Python, SQL, PostgreSQL, and Git. Combining strong technical acumen with excellent communication skills, I am eager to contribute to dynamic roles that require a balance of analytical thinking, technical expertise, and team collaboration.
              </p>
            </header>
          </main>
        </div>
      </div>

      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="mt-12 md:mt-0"
          src={WorkImage}
          alt="Professional person working with focus"
        />
      </div>
    </section>
  );
}

export default About;
