import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import TopNav from './TopNav/TopNav';
import Logo from './Logo/Logo';
import DropDowns from './DropDowns/DropDowns';
import classes from './Navigation.module.css';


const navigation = () =>{

    return (
        <header className={classes.NavBar}>
        <TopNav/>
         <ReactBootStrap.Navbar collapseOnSelect expand="lg"variant="light" bg="light"  >
         <Logo/>
        <DropDowns/>
        </ReactBootStrap.Navbar>
  
        </header>
      );
}

export default navigation;