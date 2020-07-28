import React from 'react';
import './style/CardComponent.css';

const CardComponent = (props) =>{
    return(
        <div className="cardMainDiv">
            <div className="image">
                <img src={require(`./${props.img}`)}  style={{width:'25%',height:'70%'}}/>
            </div>
            <div className="title">
                {props.title}
            </div>
            <div className="details">
                {props.desc}
            </div>
            <div className="LearnMore">
                <div className="LearnMoreButton">Learn More</div>
            </div>
        </div>
    )
}
export default CardComponent;