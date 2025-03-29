import React from 'react';
import './TechMarquee.css'; 
import css from '../assets/css.jpeg'; 
import nodejs from '../assets/nodejs.png';
import logohtml from '../assets/logohtml.png';
import logojavascript from '../assets/logojavascript.png';
import logoreact from '../assets/logoreact.png';
import logopython from '../assets/logopython.png';
import logoflask from '../assets/logoflask.png';
import logosql from '../assets/logosql.png';
import logogit from '../assets/logogit.png';
import logopostman from '../assets/logopostman.png';
import postgre from '../assets/postgre.png';
import figma from '../assets/figma.png';
import gis from '../assets/gis.png';
import remote_sensing from '../assets/remote_sensing.png';
import gis_products from '../assets/gis_products.png';



const TechMarquee = () => {
  const techs = [
    { name: "CSS", src: css },
    { name: "NodeJS", src: nodejs },
    { name: "HTML5", src: logohtml },
    { name: "JavaScript", src: logojavascript },
    { name: "React", src: logoreact },
    { name: "Python", src: logopython },
    { name: "Flask", src: logoflask },
    { name: "SQL", src: logosql },
    { name: "Git", src: logogit },
    { name: "Postman", src: logopostman },
    { name: "Postgresql", src: postgre },
    { name: "Figma", src: figma },
    { name: "GIS", src: gis },
    { name: "Remote Sensing", src: remote_sensing },
    { name: "GIS Products", src: gis_products },
  ];

  return (
    <div id="experience" className="tech-container">
      <br/>
      <h1 className="text-4xl font-bold text-center mb-10">Experience</h1>
      <p className='text-center'>
        As a passionate and dedicated web developer, I bring a strong foundation in both front-end and back-end technologies to deliver seamless digital experiences. I specialize in crafting responsive, user-friendly interfaces with HTML, CSS, and JavaScript (React), ensuring every project is both visually appealing and intuitive.
        <br /><br />
        On the backend, I leverage Python (Flask) to build powerful, scalable server-side applications, supported by a solid understanding of SQL for efficient database management. I'm also proficient with tools like Postman for API testing, Git for version control, and am well-versed in the full deployment cycle to smoothly transition projects from development to production.
        <br /><br />
        With a focus on clean, maintainable code and efficient solutions, I’m committed to delivering high-quality results and continuously improving my skills to stay at the forefront of web development.
      </p>

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
    </div>
  );
}

export default TechMarquee;
