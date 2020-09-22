import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import Logo from '../Images/Logo';
import DropDowns from '../DropDowns/DropDowns';
import classes from './NavBar.module.css';
import SideBarToggle from '../SideBar/SideBarToggle/SideBarToggle';
import Aux from '../../../../hoc/Auxiliary';

const navbar =(props) =>{

return(
    <Aux>
    <div className={classes.ToggleSideBar}>
    <SideBarToggle clicked={props.toggle} />
    <Logo/>
    </div>
    <div className={classes.NavBar}>
         <ReactBootStrap.Navbar collapseOnSelect expand="lg"variant="light" bg="light" className="justify-content-left" >
             <Logo/>
        <DropDowns dropDowns={props.dropDowns} changePageHandler={props.changePageHandler}/>
        </ReactBootStrap.Navbar>
    </div>
    </Aux>

);


}

export default navbar;