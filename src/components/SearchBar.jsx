import React from 'react';
import './style/SearchBar.css';
import SearchInput from './SearchInput';
import logo from './npmlogoimg.svg';
import {NavLink} from 'react-router-dom';

const SearchBar = () =>{
    return(
        <div className="searchBarMainDiv">
            <div className="logoDiv"><NavLink to="/" style={{textDecoration:'none',color:'black'}}><img src={logo} style={{width:"80px"}} alt="npmLogo"/> </NavLink></div>
            <div className="searchBoxDiv">
                <SearchInput/>
            </div>
            <div className="loginDiv">
            <NavLink to="/signup" style={{textDecoration:'none',color:'black'}}><div className="signUp">Sign Up</div></NavLink>
            <NavLink to="/signin" style={{textDecoration:'none',color:'black'}}><div className="signIn">Sign In</div></NavLink>
            </div>
        </div>
    )
}
export default SearchBar;