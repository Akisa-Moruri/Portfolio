import React from "react";

function Projects() {
  
  const products = [
    {
      id: 1,
      title: "DFIR TRACE",
      description: "Forensic and cyber-security private firm website",
      status: "Under Development",
      image: "",    
    },
    {
      id: 2,
      title: "BCC CHURCH",
      description: "Church Website",
      status: "Under Development",
      image: "",    
    },
    {
      id: 3,
      title: "",
      description: "",
      status: "Under Development",
      image: "",      
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
              <img src={product.image} alt={product.title} className="mx-auto" />              
              <h1 className="text-3xl my-5">{product.title}</h1>
              <p className="mb-5">{product.description}</p>
              <h2 className="font-semibold mb-5">{product.status}</h2>
              <button className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">
                Link
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
