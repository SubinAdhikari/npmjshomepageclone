import React from 'react';
import TopBar from './components/TopBar';
import MenuBar from './components/MenuBar';
import SearchBar from './components/SearchBar';
import MobileSearchBox from './components/MobileSearchBox';
import Banner from './components/Banner';
import './App.css';
import AboutUs from './components/AboutUs';
import OurPackages from './components/OurPackages';
import OpenSourceBanner from './components/OpenSourseBanner';
import GreatFulTo from './components/GreatFulTo';
import Footer from './components/Footer';
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import ProductsPage from './components/ProductsPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
const App = () =>{
  return(
    <div className="appMainDiv">
      <TopBar/>
      <MenuBar/>
      <SearchBar/>
      <MobileSearchBox/> 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={ProductsPage}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/signin" component={SignIn}/>
        <Route component={ErrorPage}/>
      </Switch>
      {/* <Banner/>
      <AboutUs/>
      <OurPackages/>
      <OpenSourceBanner/>
      <GreatFulTo/> */}
      <Footer/>
    </div>
  )
}
export default App;