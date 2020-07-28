import React from 'react';
import './style/GreatFulTo.css';
import companyImg from './companies.png'
const GreatFulTo = () =>{
    return(
        <div className="greatFulToMainDiv">
            <div className="greatFulToTitle">Gratefully serving everyone<br/> from solo devs to the<br/> Fortune 500</div>
            <div className="companiesImg">
                <img src={companyImg} style={{width:'80%',height:'90%'}}/>
            </div> 
        </div>
    )
}
export default GreatFulTo;