import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';


function LogIn() {

    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    const [userData, setData]=useState("")

    const logUser = ()=>{
        axios.post('', {
          username: username,
          password: password
        })
        .then(function (userData) {     
            console.log("logged in")
            setData(userData)
        })
        .catch(function (error) {
            console.log("Not logged in")
            console.log(error)
          })  
        
    }



    


  return (
    <h1>Under Construction</h1>
    // <div className="box">
    //     <h3>Log In</h3>

    //     <div className="form-group">
    //         <label>Username</label>
    //         <input type="text" onChange={(e)=>setUsername(e.target.value)} className="form-control" placeholder="Username" />
    //     </div>

    //     <div className="form-group">
    //         <label>Password</label>
    //         <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password" />
    //     </div>
        

    //     <button onClick={logUser} className="btn btn-primary btn-block">Log In</button>
    //     <p className="forgot-password text-right">
    //         Need an account? <Link to="/signup">sign up</Link>
    //     </p>
        
    // </div>
  );
}

export default LogIn;
