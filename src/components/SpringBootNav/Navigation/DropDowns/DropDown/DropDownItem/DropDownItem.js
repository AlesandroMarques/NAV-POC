import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

const dropdownitem = (props) => {

    return(
        <div>
             <ReactBootStrap.NavDropdown.Item variant="light" bg="light" style={{color:"orangered"}} href={props.href} >{props.name}</ReactBootStrap.NavDropdown.Item>
        </div>
    );

}

export default dropdownitem;