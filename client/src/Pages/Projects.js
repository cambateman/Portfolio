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
            category="HTML/Sass/CSS/Javascript"
            selectedButton={selectedButton}
            header="Suki Ski & Snowboards"
            img={SUKI}
            backTitle="Suki"
            backInformation="some information"
          >
            <ul>
              <li>some bullets</li>
            </ul>
          </Card>
        </div>
      </>
    )
}
export default Projects