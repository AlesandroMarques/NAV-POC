import React from 'react';
import HomeSolution from './Home_Solution/Home_Solution';
import SolutionsHeader from '../SolutionsHeader/SolutionsHeader';
import homeImg from '../../assets/Solutions/home.jpg';

import classes from './Home.module.css';

const home = (props) =>{

    return(
      <div>
      <SolutionsHeader img={homeImg} header="IT PROFESSIONAL SERVICES"/>
      <h1 className={classes.header}>SERVICES AND SOLUTIONS</h1>
      <div className={classes.Home}>
      <div className={classes.row}>
      {props.allInfo.map( entry =>
       <div className={classes.column}><HomeSolution clicked ={props.clicked} title={entry.nameUp} image={entry.img} info={entry.des} href={entry.href} page={entry.page} allInfo={entry.dropDownItems}/></div> 
  
  
      )}
  
  </div>
          </div>
          </div>
    );
  
  
  

  }
  
  export default home;