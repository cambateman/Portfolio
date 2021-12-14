import React from "react";


export default function Card1(props) {
  return (
    <>
    { (props.selectedButton === "All" || props.selectedButton === props.category) && 
      <div className={`card-item filterDiv ${props.catergory} show`}>
        <div class="cards-container">
            <div class="card-container">
                <div class="flip-card">
                    <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="flip-card-front-title">{props.frontTitle}</div>
                        <img class="flip-card-front-img"src={props.img} />
                    </div>
                    <div class="flip-card-back">
                        <h1 class="flip-card-back-title">{props.backTitle}</h1> 
                        <p class="flip-card-description">{props.backInformation}</p>
                        <ul class="flip-card-back-ul">
                          <li class="flip-card-back-li">{props.bullets}</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    }
    </>
  );
}