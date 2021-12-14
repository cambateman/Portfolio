import React, { useState } from 'react';
import Card from '../Components/Card';
import Filter from '../Components/Filter'
import SUKI from '../assets/SUKI.png'
import Vidly from '../assets/Vidly.png'
import MovieDb from '../assets/ReactMovieApp.png'
import YelpCamp from '../assets/YelpCamp.png'



function Projects() {
  const [selectedButton, setSelectedButton] = useState("All");
    return (
      <>
        <Filter selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
        <div className='card-wrapper'>
          <Card
            header="Suki Ski Snowboards"
            img={SUKI}
            category="HTML/Sass/CSS/Javascript"
            selectedButton={selectedButton}
          >
          <h2 className="card-back-h2">SUKI</h2>
          <p className="card-back-p">A group project for a fictional Ski brand. Created a front-end only store using: </p>
          <ul className="card-back-ul">
            <li>HTML</li>
            <li>Sass</li>
            <li>Javascript</li>
          </ul>
            
          </Card>

          <Card
            header="Vidly"
            img={Vidly}
            category=".Net C#"
            selectedButton={selectedButton}
          >
          <h2 className="card-back-h2">Vidly</h2>
          <p className="card-back-p">An indivdual Project for a fullstack app to be used by a (obviously) fictional video rental service</p>
          <ul className="card-back-ul">
            <li>.Net/C#</li>
            <li>SQL Database</li>
            <li>Bootstrap</li>
            <li>RazorPages</li>
          </ul>
            
          </Card>

          <Card
            header="MovieDb"
            img={MovieDb}
            category="Javascript Frameworks"
            selectedButton={selectedButton}
          >
          <h2 className="card-back-h2">MovieDb</h2>
          <p className="card-back-p">An indivudal project to create a very basic IMD of sorts</p>
          <ul className="card-back-ul">
            <li>React</li>
            <li>Class-based Components</li>
            <li>external API use</li>
            <li>Sass</li>
          </ul>

          </Card>

          <Card
            header="YelpCamp"
            img={YelpCamp}
            category="Fullstack Javascript"
            selectedButton={selectedButton}
          >
          <h2 className="card-back-h2">YelpCamp</h2>
          <p className="card-back-p">Indivudal project for users to add and edit campsites, rate them, and leave reviews </p>
          <ul className="card-back-ul">
            <li>Full-stack Javascript</li>
            <li>EJS partials</li>
            <li>Mongodb</li>
            <li>External API's</li>
          </ul>
            
          </Card>
        </div>
      </>
    )
}
export default Projects