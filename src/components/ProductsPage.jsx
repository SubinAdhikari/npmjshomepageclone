import React from 'react';
import './style/ProductsPage.css';
import PricingCard from './PricingCard';

const ProductsPage = () =>{
    return(
        <div>
        <div className="prductPageMainDiv">
           <div className="Title">Pricing</div>
           <div className="priceCardMainDiv">
               <PricingCard  link="Create" img='package1.png' title="FOR PUBLIC PACKAGE AUTHORS" type="Free" price="$ 0" feature="Unlimited public packages"/>
               <PricingCard  link="Get Started" img='package2.png'  title="FOR INDIVIDUAL CREATORS" type="Pro" price="$ 7 per month" feature="Unlimited
public packages
Unlimited
private packages
Package-based
permissions"/>
               <PricingCard  link="Get Started" img='package3.png'  title="FOR TEAMS & ORGANIZATIONS" type="Teams" price="$ 7 per user per month" feature="Unlimited
public packages
Unlimited
private packages
Team-based
permissions"/>
               <PricingCard  link="Contact Sales" img='package4.png' title="THE ULTIMATE IN
ENTERPRISE JAVASCRIPT" type="Enterprise" price="$ 10K per month" feature=""/>
           </div>

        </div>
          
            <div className="FeatureComparisionMainDiv">
                <div className="comparisionBox">
                    <div className="comparisionTitle">Feature Comparison</div>
                    <div className="comparisionBox1">
                        <div className="comparingPackageTitle">Unlimited public packages & automatic security warnings</div>
                        <div className="offers">
                        <div className="Free">Free<br/><br/>
                        ✔️</div>
                            <div className="Pro">Pro<br/><br/>
                            ✔️</div>
                            <div className="Team">Teams<br/><br/>
                            ✔️</div>
                        </div>
                    </div>
                    <div className="comparisionBox2">
                    <div className="comparingPackageTitle">Unlimited private packages</div>
                        <div className="offers">
                        <div className="Free">Free<br/><br/> ❌
                        </div>
                            <div className="Pro">Pro<br/><br/>
                            ✔️
                            </div>
                            <div className="Team">Teams<br/><br/>
                            ✔️
                            </div>
                        </div>
                    </div>
                    <div className="comparisionBox1">
                    <div className="comparingPackageTitle">Unlimited team-based management</div>
                        <div className="offers">
                            <div className="Free">Free<br/><br/>❌</div>
                            <div className="Pro">Pro<br/><br/>❌</div>
                            <div className="Team">Teams<br/><br/>
                            ✔️</div>

                        </div>
                    </div>

                </div>
            </div>
            

        </div>
    )
}
export default ProductsPage;