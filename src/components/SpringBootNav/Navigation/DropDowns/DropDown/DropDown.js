import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

const DropDown = (props) => {

    return(
        <div>
        <ReactBootStrap.SplitButton variant="light" bg="light"  title="IT INFRASTRUCTURE" id="collasible-nav-dropdown" href="#iti">
          <ReactBootStrap.NavDropdown.Item variant="light" bg="light" style={{color:"orangered"}} href="#iti/3.1" >VIRTUALIZATION & STORAGE</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item variant="light" bg="light" style={{color:"orangered"}} href="#iti/3.2">HP STORAGE | 3PAR</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item variant="light" bg="light" style={{color:"orangered"}} href="#iti/3.3">ALL FLASH ARRAY</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item variant="light" bg="light" style={{color:"orangered"}} href="#iti/3.5">CONVERGED INFRASTRUCTURE</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item variant="light" bg="light" style={{color:"orangered"}} href="#iti/3.6">PRODUCT FULFILLMENT</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item variant="light" bg="light" style={{color:"orangered"}} href="#iti/3.7">NETWORKING</ReactBootStrap.NavDropdown.Item>
          <ReactBootStrap.NavDropdown.Item variant="light" bg="light" style={{color:"orangered"}} href="#iti/3.8">IaaS</ReactBootStrap.NavDropdown.Item>
        </ReactBootStrap.SplitButton>
        </div>);

  
}

export default DropDown;