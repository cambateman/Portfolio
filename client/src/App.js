import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import About from "./Pages/About"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import Test from "./Pages/Test";

import Navbar from "./Components/Navbar";
import Card1 from "./Components/Card1";
import Banner from "./Components/Banner";
import SkillCard from "./Components/SkillCards";
import Footer from "./Components/Footer";


import frontEnd from './assets/front-end.png'
import backEnd from './assets/back-end.png'
import databases from './assets/databases.png'

import './Sass/main.css'



function App() {
  return (
    <Router>

      <Navbar />
      
        <Switch>
          <Route path="/Test">
            <Test />
          </Route>

          <Route path="/Projects">
            <Projects />
          </Route>

          <Route path="/About">
            <About />
          </Route>
          

          <Route path="/">
            <Home />
          </Route>

        </Switch>

      <Footer />

    </Router>
  );
}
export default App;
