import React from 'react';
import classes from './footerNav.module.css';

import FooterColumn from './footerColumn/footerColumn'


const footer = (props) =>{

    
    return(


        <div className={classes.Footer}>
            { props.dropDowns.map( dropdown => (
        <FooterColumn title={dropdown.name}  href={dropdown.href} dropDownItems={dropdown.dropDownItems} changePageHandler={props.changePageHandler}/>
        ))}

        </div>
    );



}

export default footer;