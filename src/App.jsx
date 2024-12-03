import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>        
        <Route path="/" element={<Home />} />        
      </Routes>
      <About />
      <Education />
      <Experience />
      <Projects /> 
      <Contact />
    </Router>
  );
}

export default App;
