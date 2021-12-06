import React, { useState } from 'react';
import Card from '../Components/Card';
import Filter from '../Components/Filter'



function Projects() {
  const [selectedButton, setSelectedButton] = useState("All");
    return (
      <>
      <Filter selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
      <div className='card-wrapper'>
        <Card
          header="Suki Ski Snowboards"
          category="HTML/Sass/CSS/Javascript"
          selectedButton={selectedButton}
        >
          Back Side
        </Card>

        <Card
          header="Vidly"
          category=".Net C#"
          selectedButton={selectedButton}
        >
          Back Side
        </Card>

        <Card
          header="MovieDb"
          category="Javascript Frameworks"
          selectedButton={selectedButton}
        >
          Back Side
        </Card>

        <Card
          header="YelpCamp"
          category="Fullstack Javascript"
          selectedButton={selectedButton}
        >
          Back Side
        </Card>
      </div>
      </>
    )
}
export default Projects