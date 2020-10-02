import React from 'react';

import classes from './Home_Solution.module.css';

const homeSolution = (props) =>{

    

    return(
        
        <div className={classes.Home}>
        <h3><a href={props.href} onClick={() => props.clicked(props.page)}>{props.title}</a></h3>
            <img
        src={props.image}
       alt="SoltuionImage"
      />
      <div>
                    <ul>
                    {props.allInfo.map(item => 
                        <li><a href={item.href} onClick={() => props.clicked(item.page)}> {item.name}</a></li>)}
                </ul></div>
    <p>{props.info}</p>
        </div>
       
    );
}

export default homeSolution;