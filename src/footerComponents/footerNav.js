import React from 'react';
import classes from './footerNav.module.css';

import FooterColumn from './footerColumn/footerColumn';
import FooterInfo from './footerInfo/footerInfo';
import FooterBanner from './footerBanner/footerBanner';

import Aux from '../hoc/Auxiliary';
import FooterBannerColour from './footerBanner/footerBannerColour/footerBannerColour';



const footer = (props) =>{

    
    return(

        <Aux>
            <FooterBannerColour/>
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