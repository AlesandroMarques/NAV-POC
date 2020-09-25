import React from 'react';
import ServiceInfo from './ServiceInfo/ServiceInfo';
import classes from './SolutionsContent.module.css';

const solutionsContent = (props) =>{


    return(
        <div className={classes.SolutionsContent}>
            <h4>{props.name} SERVICES:</h4>
        {props.dropDownItems.map(item =>(
        <ServiceInfo name={item.name} info={item.info} page={item.page} href={item.href} clicked={props.clicked}/>
        )
        )}

        </div>


    );


}

export default solutionsContent;