import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ParticlesBackground from './components/config/ParticlesBackground';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/project/Projects';
import Contact from './components/contact/Contact';


const App = () => {
  return (
    <div className="App">
      <>
        <ParticlesBackground />
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Projects />
                <Contact />
              </>
            }
          />
        </Routes>
      </>
    </div>
  );
};

export default App;
