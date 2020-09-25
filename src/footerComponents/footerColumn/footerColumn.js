import React from 'react';
import classes from './footerColumn.module.css';
import FooterItem from './footerItem/footerItem'

const footerColumn = (props) =>{


    return(

         <div className={classes.column}>
                <h6><a href={props.href} onClick={() => props.changePageHandler(props.page)}>{props.title}</a></h6>
                {props.dropDownItems.map( item => (
        <FooterItem href={item.href} name={item.name} page={item.page} changePageHandler={props.changePageHandler}/>
                ))}
    </div>

    );
}

export default footerColumn;