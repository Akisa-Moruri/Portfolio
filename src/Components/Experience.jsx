import React from 'react';
import './TechMarquee.css';  // Assuming the styles are in this CSS file
import css from '../assets/css.jpeg';


const TechMarquee = () => {
  const techs = [
    { name: "CSS", src: {css} },
    { name: "NodeJS", src: "../assets/nodejs.png" },    
    { name: "HTML5", src: "../assets/logohtml.png" },
    { name: "JavaScript", src: "../assets/logojavascript.png" },
    { name: "React", src: "../assets/logoreact.png" },
    { name: "Python", src: "../assets/logopython.png" },
    { name: "Flask", src: "../assets/logoflask.png" },
    { name: "SQL", src: "../assets/logosql.png" }, 
    { name: "Git", src: "../assets/logogit.png" }, 
    { name: "Postman", src: "../assets/logopostman.png" },
    { name: "Postgresql", src: "../assets/postgre.png" },
    { name: "Figma", src: "../assets/figma.png" },
  ];

  return (
    <div className="marquee-container">
      <div className="marquee">
        {techs.map((tech, index) => (
          <div className="tech-card" key={index}>
            <img src={tech.src} alt={tech.name} className="tech-image" />
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

function Experience() {
  return (
    <div id="experience">
      <h2>Experience</h2>
      <TechMarquee />
    </div>
  );
}

export default Experience;
