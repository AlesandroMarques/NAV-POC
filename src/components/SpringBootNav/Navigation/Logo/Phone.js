import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import phoneImage from '../../../../assets/phone.png';

const phone = () =>{

    return (
        <div >
<ReactBootStrap.Button bg="light" variant="light" href="https://www.google.com/" ><img
        src={phoneImage}
        width="161"
        height="25"
        className="d-inline-block align-top"
       alt="Phone Button"
      /></ReactBootStrap.Button>
      </div>);
}

export default phone;