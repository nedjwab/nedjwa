import './App.css';
import Sidebar from './components/sidebar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {

  return (
    <>
        <Sidebar />
        <Home />
        <About />
        <Projects />
    </>
  );
}

export default App;
