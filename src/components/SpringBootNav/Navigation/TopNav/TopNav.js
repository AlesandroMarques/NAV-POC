import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import PhoneImage from '../Images/Phone';
import LinkedImage from '../Images/LinkedIn';
import classes from './TopNav.module.css';


const topnav = (props) =>{

    return (
        <div className={classes.TopNav}>
            
        <ReactBootStrap.Navbar expand="sm" bg="light" variant="light" className="justify-content-end">
        <ReactBootStrap.Nav  variant="light"  >
        <ReactBootStrap.Button variant="light" bg="light" style={{color:"#ec1f2e"}} href="#home">Home</ReactBootStrap.Button>
        <ReactBootStrap.Button variant="light" bg="light" style={{color:"#ec1f2e"}} href="#resources">Resources</ReactBootStrap.Button>
        <ReactBootStrap.Button variant="light" bg="light" style={{color:"#ec1f2e"}} href="#aboutus" onClick={() => props.changePageHandler("about_us")}>About Us</ReactBootStrap.Button>
        <ReactBootStrap.Button variant="light" bg="light" style={{color:"#ec1f2e"}} href="#contactus">Contact Us</ReactBootStrap.Button>
        <PhoneImage/>
        <LinkedImage/>
        </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar>

        </div>


    );

}

export default topnav;