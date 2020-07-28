import React from 'react';
import './style/OurPackages.css';
import CardComponent from './CardComponent';

const OurPackages = () =>{
    return(
        <div className="ourPackagesMainDiv">
            <CardComponent img='package1.png' title="NPM Free" desc="Become a contributing member of the open source JavaScript community. Create public packages, publish updates, audit your dependencies, and more." link="#" />
            <CardComponent img='package2.png' title="NPM Pro & Teams" desc="For next-level JavaScript developers who want more capabilities. Pro and Teams add the ability to build private packages for you, your team, or for customers." link="#"/>
            <CardComponent img='package3.png' title="NPM Enterprise" desc="For very large teams and business-critical projects, npm Enterprise delivers features that organizations with hundreds of developers need, like SSO and enhanced security." link="#"/>
            <CardComponent img='package4.png' title="NPM PkgSafe" desc="Our security team's unique insights into JavaScript vulnerabilities and threats are delivered as free and premium features, as well as services for resellers and others." link="#"/>

        </div>
    )
}
export default OurPackages;