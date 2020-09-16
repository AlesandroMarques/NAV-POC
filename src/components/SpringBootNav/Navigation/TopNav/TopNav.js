import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import PhoneImage from '../Logo/Phone';
import LinkedImage from '../Logo/LinkedIn';
import classes from './TopNav.module.css';

const topnav = () =>{

    return (
        <div className={classes.TopNav}>
        <ReactBootStrap.Navbar expand="sm" bg="light" variant="light" className="justify-content-end">
        <ReactBootStrap.Nav  variant="light" className="justify-content-start" >
        <ReactBootStrap.Button variant="light" bg="light" style={{color:"orangered"}} href="#home">Home</ReactBootStrap.Button>
        <ReactBootStrap.Button variant="light" bg="light" style={{color:"orangered"}} href="#resources">Resources</ReactBootStrap.Button>
        <ReactBootStrap.Button variant="light" bg="light" style={{color:"orangered"}} href="#aboutus">About Us</ReactBootStrap.Button>
        <ReactBootStrap.Button variant="light" bg="light" style={{color:"orangered"}} href="#contactus">Contact Us</ReactBootStrap.Button>
        <PhoneImage/>
        <LinkedImage/>
        </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar>

        </div>


    );

}

export default topnav;