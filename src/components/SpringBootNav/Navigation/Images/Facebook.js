import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import facebookImage from '../../../../assets/facebook.png';

const facebook = () =>{

    return (
        <div >
 <ReactBootStrap.Button bg="light" variant="light" href="https://www.facebook.com/Duologik-1790146707946087/" ><img
        src={facebookImage}
        width="25"
        height="25"
        className="d-inline-block align-top"
       alt="LinkedIn Button"
      /></ReactBootStrap.Button>
      </div>);
}

export default facebook;