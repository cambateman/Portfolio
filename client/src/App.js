import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

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
  return (<Router>

    <div className="App">
      <Navbar />
      
      <Switch>

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
    </div>
    </Router>
  );
}
export default App;
