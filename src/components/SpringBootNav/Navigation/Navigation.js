import React  from 'react';
import TopNav from './TopNav/TopNav';
import classes from './Navigation.module.css';
import NavBar from './NavBar/NavBar';
import SideBar from './SideBar/SideBar';


const navigation = (props) =>  {


      return (
         <header className={classes.NavBar}>
         <TopNav changePageHandler={props.changePageHandler}/>
          <NavBar dropDowns={props.dropDowns} toggle={props.toggleBackDropHandler} changePageHandler={props.changePageHandler} />
          <SideBar dropDowns={props.dropDowns} open={props.showSideBar} show={props.showBackDrop} toggle={props.toggleBackDropHandler} changePageHandler={props.changePageHandler}/>
         </header>
       );
   
   
}

export default navigation;