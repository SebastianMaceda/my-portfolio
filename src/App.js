import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from "./Components/Navbar/index.navbar";
import HeroSection from './Components/HeroSection/index.hero';
import Skills from './Components/SkillsSection/index.skills';
import { ProjectsSection } from './Components/Projects/index.projects';

function App() {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <Skills />
      <ProjectsSection />
    </Router>
  );
}

export default App;
