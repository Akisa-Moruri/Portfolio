import React from "react";
import church_image from '../assets/church_image.png';
import dfirtrace from '../assets/dfirtrace.png';

function Projects() {
  
  const products = [
    {
      id: 1,
      title: "DFIR TRACE",
      description: "Forensic and cyber-security private firm website",
      image: dfirtrace,
      link: "https://dfirtrace.netlify.app/",
    },
    {
      id: 2,
      title: "Believers Celebration Centre Church",
      description: "Believers Celebration Centre Church website",
      image: church_image,
      link: "https://www.believerscelebrationcentre.com",
    },
  ];

  return (
    <div id="projects">
      <section className="container mx-auto p-10 md:py-12 md:px-0">        
        <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-5 py-10 bg-purple-50 text-center transition-transform duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Render the product image */}
              <img src={product.image} alt={product.title} className="mx-auto" />              
              <h1 className="text-3xl my-5">{product.title}</h1>
              <p className="mb-5">{product.description}</p>
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                <button className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">
                  Link
                </button>
              </a>
            </div>
          ))}
        </div>
      </section>
      <br />
      <hr />
    </div>
  );
}

export default Projects;
