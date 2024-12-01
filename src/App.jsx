import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Projects from './Components/Projects';  // Assuming the Projects component is in this file
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>  
        {/* Use simple routes without the hash parts */}
        <Route path="/" element={<Home />} />
        {/* You can keep the same component for scrolling with HashLink */}
      </Routes>
      <About />  {/* Manually rendering About here */}
      <Education />  {/* Manually rendering Education here */}
      <Experience />  {/* Manually rendering Experience here */}
      <Projects />  {/* Assuming Projects component is in this file */}  {/* Manually rendering Projects here */}  {/* Assuming Projects component is in this file */}  {/* Manually rendering Projects here */}  {/* Assuming Projects component is in this file */}  {/* Manually rendering Projects here */}  {/* Assuming Projects component is in this file */}  {/* Manually rendering Projects here */}  {/* Assuming Projects component is in this file */}  {/* Manually rendering Projects here */}
      <Contact />  {/* Manually rendering Contact here */}
    </Router>
  );
}

export default App;
