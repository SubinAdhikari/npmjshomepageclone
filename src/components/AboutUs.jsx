import React from 'react';
import './style/AboutUs.css';
import AboutUsImg from './aboutus.png';
const AboutUs = () =>{
    return(
        <div className="aboutUsMainDiv">
            <img src={AboutUsImg} alt="img"/>
            <div className="aboutUsText">
            Bring the best of open source to you, your team, and your company
            </div>
            <div className="aboutUsdetails">
            Relied upon by more than 11 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than one million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level.            </div>
        </div>

    )
}
export default AboutUs;