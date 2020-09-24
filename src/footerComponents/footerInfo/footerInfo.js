import React from 'react';
import classes from './footerInfo.module.css';
import PhoneImage from "../../components/SpringBootNav/Navigation/Images/Phone";
import LinkedImage from "../../components/SpringBootNav/Navigation/Images/LinkedIn";

const footerInfo = () =>{



    return(
        <div className={classes.Footer}>
            <div className={classes.column}>
                <h6>OUR LOCATION:</h6>
                <p>100 Leek Cres., #9</p>
                <p>Richmond Hill, Ontario Canada</p>
                <p>L4B 3E6</p>
            </div>
            <div className={classes.column}>
            <h6>CALL US</h6>
            <p><PhoneImage /></p>
            </div>
            <div className={classes.column}>
            <h6>SOCIAL NETWORKS:</h6>
            <p><LinkedImage/></p>
            </div>


        </div>
    );
}

export default footerInfo;