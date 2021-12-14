import React from "react";
import SUKI from '../assets/SUKI.png'


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
                        <div class="flip-card-front-title">SUKI</div>
                        <img class="flip-card-front-img"src={SUKI} />
                    </div>
                    <div class="flip-card-back">
                        <h1 class="flip-card-back-title">Suki</h1> 
                        <p class="flip-card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue venenatis dui, at facilisis ligula porta quis. Ut porta mi lectus, nec fringilla lectus accumsan non. Sed quis laoreet dolor.</p>
                        <ul class="flip-card-back-ul">
                        <li class="flip-card-back-li">tech</li>
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