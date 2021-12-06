import React from "react";

export default function Card(props) {
  return (
    <>
    { (props.selectedButton === "All" || props.selectedButton === props.category) && 
      <div className={`card-item filterDiv ${props.catergory} show`}>
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <h2>{props.header}</h2>
            </div>
            <div className="flip-box-back">
              <h2>{props.children}</h2>
            </div>
          </div>
        </div>
      </div>
    }
    </>
  );
}