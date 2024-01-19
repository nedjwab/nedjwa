import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="App">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Projects />
              </>
            }
          />
        </Routes>
    </div>
  );
}

export default App;
