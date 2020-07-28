import React,{useState} from 'react';
import './style/SignUp.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

const SignUp = () =>{
    const [state,setState]=useState({
        uname:'',
        email:'',
        password:''
    });
    const stateChange = (event) =>{
        const {name,value} = event.target;

        setState((prevValue)=>{
            return{
                ...prevValue,
                [name]:value
            }
        });
    }
   const submitValue = (event) =>{
    event.preventDefault();
    alert(`Uname: ${state['uname']} , Email: ${state['email']}, Password: ${state['password']}`)
    } 
    return(
        <div className="signUpMainDiv">
             <div className="signUpCenterDiv">
                 <div className="signUpTitle" style={{borderBottom:"1px #E5E5E5 solid"}}>
                 <span >Sign Up</span>
                 </div>
                 <div className="signUpInputFields">
                 <TextField
                    name="uname"
                    value={state['uname']}
                    id="standard-password-input"
                    onChange={stateChange}
                    label="Username"
                    type="text"
                    autoComplete="current-username"
                    style={{width:'90%',margin:'10px'}}
                />
                 <TextField
                    name="email"
                    value={state['email']}
                    id="standard-password-input"
                    onChange={stateChange}
                    label="Email"
                    type="email"
                    autoComplete="current-email"
                    style={{width:'90%',margin:'10px'}}
                />
                 <TextField
                    name="password"
                    value={state['password']}
                    id="standard-password-input"
                    onChange={stateChange}
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    style={{width:'90%',margin:'10px'}}
                />
                 </div>
                 <div className="signUpNote">
                 <span style={{color:'#4C4C4C'}}>Note: </span>Your email address will be added to the metadata of packages that you publish, so it may be seen publicly.<br/><br/>
                 Your password should be at least 10 characters.<a href="#" style={{color:'#4C4C4C'}}> Learn more </a>
                 </div>

                 <div className="signUpPrivacy">
                <input type="checkbox" name="privacyAndPolicy"/> Agree to the <a href="#" style={{color:'black'}}> End User Liscense Agreement</a> and the <a href="#" style={{color:'black'}}>privacy Policy</a>.
                 </div>

                 <div className="signUpbutton">
                 <Button variant="contained" style={{width:'100%'}} onClick={submitValue}>Create an Account</Button>
                 {/* <a href="#" style={{color:'black',marginTop:'20px'}}>or,Login</a> */}
                 <NavLink to="/signin" style={{color:'black',marginTop:'20px'}}>or,Login</NavLink>

                 </div>
             </div>
        </div>

    )
}
export default SignUp;