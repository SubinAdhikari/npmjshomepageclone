import React from 'react';
import './style/Banner.css';

const Banner = () =>{
    return(
        <div className="bannerMainDiv">
            <div className="bannerTitle">Build amazing<br/> things</div>
            <div className="bannerDetail">We're npm, Inc., the company behind Node package manager, the npm Registry, and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.</div>
            <div className="bannerTitle">Take your JavaScript development up a notch</div>
            <div className="bannerDetail">Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with features like private packages.</div>
            <div className="bannerLoginButtons">
                <div className="bannerSignUpButton">Sign up for free</div>
                <div className="bannerLearnMoreButton">Learn about Pro</div>
            </div>
        </div>
    )
}
export default Banner;