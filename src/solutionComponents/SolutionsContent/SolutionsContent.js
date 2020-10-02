import React from 'react';
import ServiceInfo from './ServiceInfo/ServiceInfo';
import classes from './SolutionsContent.module.css';

const solutionsContent = (props) =>{
    let title= props.name;
    if(title.indexOf('SERVICES') === -1){
        title += ' SERVICES';
    }
    title += ':';


    return(
        <div className={classes.SolutionsContent}>
            <h3>{title}</h3>
        {props.dropDownItems.map(item =>(
        <ServiceInfo name={item.name} info={item.info} page={item.page} href={item.href} clicked={props.clicked}/>
        )
        )}

        </div>


    );


}

export default solutionsContent;