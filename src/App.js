import {  Route, Routes } from 'react-router-dom';
import ParticlesBackground from './components/config/ParticlesBackground';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/project/Projects';
import Contact from './components/contact/Contact';
import MouseParticles from 'react-mouse-particles';
import Navbar from './components/navbar/Navbar';
import ReactGA from 'react-ga';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('G-NSBRC3JN2S');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <div className="App">
      <>
        <MouseParticles g={1} color="random" cull="col,image-wrapper"/>
        <ParticlesBackground />
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
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