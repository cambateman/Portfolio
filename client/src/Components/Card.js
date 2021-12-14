import React from "react";


export default function Card(props) {
  return (
    <>
    { (props.selectedButton === "All" || props.selectedButton === props.category) && 
      <div className={`card-item filterDiv ${props.catergory} show`}>
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <h2 className="flip-box-front-h2">{props.header}</h2>
              <div className="flip-box-front-img-container">
                <img className="flip-box-front-img" src={props.img}></img>
              </div>
            </div>
            <div className="flip-box-back">
              <h1 class="flip-box-back-title">{props.backTitle}</h1> 
              <p class="flip-box-back-description">{props.backInformation}</p>
              <ul>
                <li>{props.children}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    }
    </>
  );
}