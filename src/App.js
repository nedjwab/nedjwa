import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ParticlesBackground from './components/ParticlesBackground';
import Sidebar from './components/sidebar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
