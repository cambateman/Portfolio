import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import About from "./Pages/About"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"

import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import SkillCard from "./Components/SkillCards";
import Footer from "./Components/Footer";

import frontEnd from './assets/front-end.png'
import backEnd from './assets/back-end.png'
import databases from './assets/databases.png'



function App() {
  return (
    <div className="App">
      <Navbar />
        <Router>
          
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="About" element={<About />} />
            <Route exact path="Projects" element={<Projects />} />
          </Routes>
  
        </Router>
      <Footer />
    </div>
  );
}

export default App;
