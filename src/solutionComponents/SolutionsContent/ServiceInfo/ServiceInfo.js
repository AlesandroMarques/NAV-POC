import React from 'react';
import classes from './ServiceInfo.module.css'
import * as ReactBootStrap from "react-bootstrap";

const serviceInfo = (props) =>{


    return(
<div className={classes.ServiceInfo}>
<h5>{props.name}</h5>
<p>{props.info}</p>
<ReactBootStrap.Nav  variant="light"  >
        <ReactBootStrap.Button variant="light" bg="light" style={{color:"orangered"}} href={props.href} onClick={() => props.clicked(props.page)}>Read More</ReactBootStrap.Button>
</ReactBootStrap.Nav>
</div>
    );





}

export default serviceInfo;