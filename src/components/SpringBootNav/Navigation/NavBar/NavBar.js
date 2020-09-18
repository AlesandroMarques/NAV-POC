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
    </div>
    <div className={classes.NavBar}>
         <ReactBootStrap.Navbar collapseOnSelect expand="lg"variant="light" bg="light"  >
         <Logo/>
        <DropDowns dropDowns={props.dropDowns}/>
        </ReactBootStrap.Navbar>
    </div>
    </Aux>

);


}

export default navbar;