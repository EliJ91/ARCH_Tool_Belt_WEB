import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components'

const Copyright = styled.p`
    font-weight:bold;
    text-align:center;
`



function Footer() {
  return (
      <Copyright>Created by Onslawht &#169;</Copyright>
    // <form className="box">
    //     <h3>Sign Up</h3>

    //     <div className="form-group">
    //         <label>Username</label>
    //         <input type="text" className="form-control" placeholder="Username" />
    //     </div>

    //     <div className="form-group">
    //         <label>Password</label>
    //         <input type="password" className="form-control" placeholder="Password" />
    //     </div>

    //     <div className="form-group">
    //         <label>Password </label>
    //         <input type="password" className="form-control" placeholder="Password" />
    //     </div>

    //     <button  className="btn btn-primary btn-block">Sign Up</button>
    //     <p className="forgot-password text-right">
    //         Already have an account? <Link to="/login">Log In</Link>
    //     </p>
    // </form>
  );
}

export default Footer;
