import React,{useState} from 'react';
import './style/SearchInput.css';
import SearchIcon from '@material-ui/icons/Search';

const SearchInput = () =>{
    const [searchState,setSearchState]=useState('');
    const searchHandler = (event) =>{
        setSearchState(event.target.value);
    }
    const submitFunction = (event) =>{
        event.preventDefault();
        alert(`Your search Package is : ${searchState}`);
    }
    
    return(
        <div className="searchInputMainDiv">
            <div className="searchLogo">
                <SearchIcon/>
            </div>
            <div className="inputField">
                <input type="text" name="searchValue" value={searchState} onChange={searchHandler} placeholder="Search Packages" />
            </div>
            <div className="searchButton" onClick={submitFunction}>
            Search
            </div>
        </div>
    )
}
export default SearchInput;