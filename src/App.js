import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from "./Components/Navbar/index.navbar";
import HeroSection from './Components/HeroSection/index.hero';

function App() {
  return (
    <Router>
      <Navbar />
      <HeroSection />
    </Router>
  );
}

export default App;
