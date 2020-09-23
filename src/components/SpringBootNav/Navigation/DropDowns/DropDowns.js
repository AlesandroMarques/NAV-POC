import React from 'react';
import DropDown from './DropDown/DropDown';
import * as ReactBootStrap from "react-bootstrap";

const dropdowns = (props) => {

    return(
        <div>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav"  variant="light" bg="light" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav" variant="light" bg="light" >
        <ReactBootStrap.Nav variant="light" bg="light" >
        { props.dropDowns.map( dropdown => (
        <DropDown title={dropdown.nameUp}  href={dropdown.href} dropDownItems={dropdown.dropDownItems} changePageHandler={props.changePageHandler}/>
        ))}
        </ReactBootStrap.Nav>
    </ReactBootStrap.Navbar.Collapse>

        </div>


    );


}


export default dropdowns;