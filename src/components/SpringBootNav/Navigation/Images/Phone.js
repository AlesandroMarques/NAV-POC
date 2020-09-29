import React from 'react';

import classes from './Phone.module.css';

import phoneImage from '../../../../assets/phone.png';

const phone = () =>{

   /* return (
        <div >
<ReactBootStrap.Button bg="light" variant="light" ><img
        src={phoneImage}
        width="161"
        height="25"
        className="d-inline-block align-top"
       alt="Phone Button"
      /></ReactBootStrap.Button>
      </div>);*/

return (
    <div className={classes.Phone}>
<img
    src={phoneImage}
    className="d-inline-block align-top"
   alt="Phone Button"
  />
  </div>);
}

export default phone;