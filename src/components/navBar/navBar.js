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
    border: 2px solid white;
    border-radius: 10px;
    background-color: black;
    padding: 2px 5px 2px 5px;
    margin-right: 10px;
    
&:hover{
    color:black;
    background-color: white;
    border: 2px solid black;
    
`

const Banner = styled.p`
    margin-top:0;
    margin-bottom:0;
    font-family: 'Skranji', cursive;
    font-size:5em;  
    text-align:center;
    color:#DCDCDC;   
    text-shadow: 2px 10px 4px #000000 
`


function NavBar() {
    return (
        <div>
            <Banner>ARCH</Banner>
            
        <TopBar>
                <Link to="/"><L>ZVZ Participation</L></Link>
                
                <Link to="/recentzvz"><L>Recent ZvZ's</L></Link>       
            
        </TopBar>
        </div>
    );
  }




export default NavBar;