import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

const dropdownitem = (props) => {

    return(
        <div>
             <ReactBootStrap.NavDropdown.Item variant="light" bg="light" style={{color:"#ec1f2e" , fontSize:"13px"}} href={props.href}  onClick={() => props.changePageHandler(props.page)} >{props.name}</ReactBootStrap.NavDropdown.Item>
        </div>
    );

}

export default dropdownitem;