import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import linkedInImage from '../../../../assets/linkedIn.png';

const linkedin = () =>{

    return (
        <div >
 <ReactBootStrap.Button bg="light" variant="light" href="https://www.linkedin.com/company/duologik-solutions/about/" ><img
        src={linkedInImage}
        width="25"
        height="25"
        className="d-inline-block align-top"
       alt="LinkedIn Button"
      /></ReactBootStrap.Button>
      </div>);
}

export default linkedin;