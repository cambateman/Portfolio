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
              <h2 className="flip-box-back-title">{props.backTitle}</h2> 
              <p className="flip-box-back-description">{props.backInformation}</p>
              <ul className="flip-box-back-ul">
                <li className="flip-box-back-li">{props.children1}</li>
                <li className="flip-box-back-li">{props.children2}</li>
                <li className="flip-box-back-li">{props.children3}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    }
    </>
  );
}