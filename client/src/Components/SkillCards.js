import '../SkillCards.css'

import React from 'react'


function SkillCard(props) {
    return (
        <div className="index-page-card">
            <div className="index-page-card-img-container">
                <img src={props.img} className="index-page-card-image" alt=""/> 
            </div>
            <h2 className="index-page-card-h2">{props.title}</h2>
            <p className="index-page-card-p">
                {props.information}
            </p>
        </div>
    );
}

export default SkillCard