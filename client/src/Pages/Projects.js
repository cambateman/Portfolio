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
            backInformation="
            A group project for a fictional 
            Ski brand. Created a front-end only store using:
            "
            children1="Client-Side Javascript"
            children2="Sass"
            children3="jQuery"
          >
          </Card>

          <Card
            category=".Net C#"
            selectedButton={selectedButton}
            header="Vidly"
            img={Vidly}
            backTitle="Vidly"
            backInformation="
            An individual project for a fictional 
            video rental service. Created a fullstack app using:
            "
            children1=".Net"
            children2="Bootstrap"
            children3="SQL"
          >
          </Card>

          <Card
            category="Javascript Frameworks"
            selectedButton={selectedButton}
            header="MovieDB"
            img={MovieDb}
            backTitle="MovieDB"
            backInformation="
            An individual project similar to IMDB 
            where users can see movies currently playing using:
            "
            children1="React"
            children2="TMD Rest API"
            children3="Class-based Components"
          >
          </Card>

          <Card
            category="Fullstack Javascript"
            selectedButton={selectedButton}
            header="YelpCamp"
            img={YelpCamp}
            backTitle="YelpCamp"
            backInformation="
            Individual project using Javascript 
            to create a website directory for users to rate campgrounds:
            "
            children1="MongoDB"
            children2="express"
            children3="multiple packages/APIS"
          >
          </Card>

          
        </div>
      </>
    )
}
export default Projects