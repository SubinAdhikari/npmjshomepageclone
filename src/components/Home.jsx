import React from 'react';
import Banner from './Banner';
import AboutUs from './AboutUs';
import OurPackages from './OurPackages';
import OpenSourceBanner from './OpenSourseBanner';
import GreatFulTo from './GreatFulTo';
const Home = () =>{
    return(
        <div>
            <Banner/>
            <AboutUs/>
            <OurPackages/>
            <OpenSourceBanner/>
            <GreatFulTo/>
        </div>
    )
}
export default Home;