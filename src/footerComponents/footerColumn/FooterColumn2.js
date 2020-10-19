import React from 'react';
import classes from './FooterColumn2.module.css';
import FooterItem from './footerItem/footerItem'

const footerColumn2 = (props) =>{


    return(

        <div className={classes.Wrapper}>
        <div className={classes.row}>
         
         { props.dropDowns.map( 
             dropdown =>
              (
       <div key ={dropdown.page} className={classes.column}>
       <h6><a href={dropdown.href} onClick={() => props.changePageHandler(dropdown.page)}>{dropdown.name}</a></h6>
       {dropdown.dropDownItems.map( 
           item => (
        <FooterItem key={item.page} href={item.href} name={item.name} page={item.page} changePageHandler={props.changePageHandler}/>
                ))}
        </div>
            ))}

            
    
    </div>
    </div>

    );
}

export default footerColumn2;