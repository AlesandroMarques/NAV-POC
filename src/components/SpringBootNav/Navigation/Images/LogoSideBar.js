import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import image from '../../../../assets/duologik-logo.jpg';

const logo = () =>{

    return (
        <div >

<ReactBootStrap.Navbar.Brand href="#home"><img
        src={image}
        width="140"
        height="33"
        className="d-inline-block align-top"
       alt="React Bootstrap logo"
      /></ReactBootStrap.Navbar.Brand>
      </div>);
}

export default logo;