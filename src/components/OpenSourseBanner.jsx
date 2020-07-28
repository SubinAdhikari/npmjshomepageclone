import React from 'react';
import './style/OpenSourceBanner.css';

const OpenSourceBanner = () =>{
    return(
        <div className="openSourceBannerMainDiv">
                <div className="opensourceBannerTitle">We ❤️ open source</div>
                <div className="opensourceBannerDetails">At npm, Inc., we're proud to dedicate teams of full-time employees to operating the npm Registry, enhancing the CLI, improving JavaScript security, and other projects that support and nurture a vibrant open source community.</div>
        </div>
    )
}
export default OpenSourceBanner;