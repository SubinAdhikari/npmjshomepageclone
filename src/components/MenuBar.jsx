import React from 'react';
import './style/MenuBar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {NavLink} from 'react-router-dom';

const MenuBar = () =>{
    return(
        <div className="menuBarMainDiv">
            <div className="leftDiv">
                <FavoriteIcon style={{marginLeft:'20px'}}/>
                <span style={{marginLeft:'20px'}}>Node's Perfect Mate</span>
            </div>
            <div className="rightDiv">
               <NavLink to="/products" style={{textDecoration:'none',color:'black'}}> <div className="menuItem">Products</div> </NavLink>
               <NavLink to="/products" style={{textDecoration:'none',color:'black'}}> <div className="menuItem">Pricing</div></NavLink>
               {/* <NavLink to="/documentation" style={{textDecoration:'none',color:'black'}}>  <div className="menuItem">Documentation</div></NavLink>
               <NavLink to="/community" style={{textDecoration:'none',color:'black'}}>  <div className="menuItem">Community</div></NavLink> */}
                 <a href="https://docs.npmjs.com/" target="_blank" style={{textDecoration:'none',color:'black'}}><div className="menuItem">Documentation</div></a>
                 <a href="https://npm.community/" target="_blank" style={{textDecoration:'none',color:'black'}}><div className="menuItem">Community</div></a>
            </div>
        </div>
    )
}
export default MenuBar; 