import React from 'react';
import './style/ProductsPage.css';

const PricingCard = (props) =>{
    return(
               <div className="priceCard">
                   <div className="cardTitle">{props.title}</div>
                   <div className="cardImg">
                   <img src={require(`./${props.img}`)}  style={{width:'25%',height:'70%'}}/>
                   </div>
                    <div className="packageType">{props.type}</div>
                   <div className="packagePrice"> {props.price} </div>
                   <div className="packageFeature"> {props.feature} </div>
                   <div className="takePackage"> 
    <div className="takeButton">{props.link}</div>
                    </div>
               </div>
    )
}
export default PricingCard;