
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Project from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />

      <Skills />

      <Project />
      
      <Contact />
    </div>
  );
}

export default App;
