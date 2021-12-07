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
        <p className="card-back-p">Hello</p>
        <ul className="card-back-ul">
          <li>tests</li>
        </ul>
          
        </Card>

        <Card
          header="Vidly"
          img={Vidly}
          category=".Net C#"
          selectedButton={selectedButton}
        >
          
          
        </Card>

        <Card
          header="MovieDb"
          img={MovieDb}
          category="Javascript Frameworks"
          selectedButton={selectedButton}
        >
          
        </Card>

        <Card
          header="YelpCamp"
          img={YelpCamp}
          category="Fullstack Javascript"
          selectedButton={selectedButton}
        >
          
        </Card>
      </div>
      </>
    )
}
export default Projects