import React from 'react';
import './style/ErrorPage.css';
import {NavLink} from 'react-router-dom';
const ErrorPage = () =>{
    return(
        <div className="errorPageMainDiv">
            <div className="errorTitle">OOPS! Can't find the requested Page</div>
            <div className="errorButtons">
               <NavLink to="/" style={{ textDecoration: 'none' }}> <div className="homePageReturnButton">Back To Home Page</div> </NavLink>
            </div>
        </div>
    )
}
export default ErrorPage;