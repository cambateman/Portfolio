import React from 'react'

// all
// HTML/Sass/CSS/Javascript
// .Net C#
// Javascript Frameworks
// Fullstack Javascript

export default function Filter(props) {
  const handleOnClick = (e) => {
    props.setSelectedButton(e.target.value)
  }
    return (
      <div id="myBtnContainer">
        <button class="btn" value={"All"} onClick={handleOnClick}>All</button>
        <button class="btn" value={"HTML/Sass/CSS/Javascript"} onClick={handleOnClick}>HTML/Sass/CSS/Javascript</button>
        <button class="btn" value={".Net C#"} onClick={handleOnClick}>.Net C#</button>
        <button class="btn" value={"Javascript Frameworks"} onClick={handleOnClick}>Javascript Frameworks</button>
        <button class="btn" value={"Fullstack Javascript"} onClick={handleOnClick}>Fullstack Javascript</button>
      </div>

    )
}