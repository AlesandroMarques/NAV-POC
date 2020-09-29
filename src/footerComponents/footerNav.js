import React from 'react';
import classes from './footerNav.module.css';

import FooterColumn from './footerColumn/footerColumn'
import FooterInfo from './footerInfo/footerInfo';
import FooterBanner from './footerBanner/footerBanner'
import Aux from '../hoc/Auxiliary'



const footer = (props) =>{

    
    return(

        <Aux>
            <FooterBanner/>
        <div className={classes.Footer}>
            { props.dropDowns.map( dropdown => (
        <FooterColumn title={dropdown.name}  href={dropdown.href} page={dropdown.page} dropDownItems={dropdown.dropDownItems} changePageHandler={props.changePageHandler}/>
        ))}
        
        </div>
        <FooterInfo/>
        </Aux>
    );



}

export default footer;