import React from 'react';
import './style/TopBar.css';
import whiteLogo from './npmlogoimg-svg.svg';
const TopBar = () =>{
    return(
        <div className="tobarmainDiv">
            {/* <h1>npm</h1> */}
            <img src={whiteLogo} alt="logo" style={{width:'60px'}} />
            <a href="https://github.blog/2020-04-15-npm-has-joined-github/" target="_blank" style={{color:'white',marginLeft:'20px'}}>npm is now a part of GitHub</a>
        </div>
    )
}
export default TopBar;