import React,{useState} from 'react';
import './style/SignIn.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

const SignIn = () =>{
    const [state,setState]=useState({
        uname:'',
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
    alert(`Uname: ${state['uname']}, Password: ${state['password']}`)
    } 
    return(
        <div className="signInMainDiv">
             <div className="signInCenterDiv">
             <div className="signInTitle" style={{borderBottom:"1px #E5E5E5 solid"}}>
                 <span >Sign In</span>
                 </div>
                 <div className="signInInputFields">
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
                


                 <div className="signInbutton">
                 <Button variant="contained" style={{width:'100%'}} onClick={submitValue}>Sign In</Button>
                 {/* <a href="#" style={{color:'black',marginTop:'20px'}}>Create Account</a> */}
                 <NavLink to="/signup" style={{color:'black',marginTop:'20px'}}>Create Account</NavLink>
                 </div>
             </div>
        </div>

    )
}
export default SignIn;