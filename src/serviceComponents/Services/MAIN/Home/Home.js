import React from 'react';
import HomeSolution from './Home_Solution/Home_Solution';

import classes from './Home.module.css';

const home = (props) =>{

    return(
      <div className={classes.Home}>
      <div className={classes.row}>
      {props.allInfo.map( entry =>
       <div className={classes.column}><HomeSolution clicked ={props.clicked} title={entry.nameUp} image={entry.img} info={entry.des} href={entry.href} page={entry.page} allInfo={entry.dropDownItems}/></div> 
  
  
      )}
  
  </div>
          </div>
    );
  
  
  

  }
  
  export default home;