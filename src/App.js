import {  Route, Routes } from 'react-router-dom';
import ParticlesBackground from './components/config/ParticlesBackground';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/project/Projects';
import Contact from './components/contact/Contact';
import MouseParticles from 'react-mouse-particles';
import Navbar from './components/navbar/Navbar';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from '@vercel/analytics/react';

const App = () => {

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
      <SpeedInsights />
      <Analytics />
    </div>
  );
};

export default App;