import React from 'react'
import styled from 'styled-components'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import '../../index.css'

const TopBar = styled.p`
    position: absolute;
    top:0;
    right:1em;
    
`
const L = styled.li`
    display: inline-block;
    list-decoration: none;
    color:white;
    font-family: 'Skranji', cursive;
    
`

const Banner = styled.p`
    margin-top:0;
    margin-bottom:0;
    font-family: 'Skranji', cursive;
    font-size:5em;  
    text-align:center;
    color:white;   
    text-shadow: 2px 10px 4px #000000 
`


function NavBar() {
    return (
        <div>
            <Banner>ARCH</Banner>
            
        <TopBar>
                <Link to="/"><L>ZVZ Participation</L></Link>
                {" "}
                <L>|</L>
                {" "}
                {/* <Link to="/login"><L>Log In</L></Link>      
                {" | "} */}
                <Link to="/recentzvz"><L>Recent ZvZ's</L></Link>       
            
        </TopBar>
        </div>
    );
  }




export default NavBar;