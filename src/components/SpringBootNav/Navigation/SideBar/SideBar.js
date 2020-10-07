import React from 'react';
import Logo from '../Images/LogoSideBar';
import classes from './SideBar.module.css';
import BackDrop from '../UI/BackDrop/BackDrop'
import Aux from '../../../../hoc/Auxiliary';


const sidebar = (props) => {
   // let attachedCssClasses = [classes.SideBar, classes.Close ];
   let attachedCssClasses = [classes.SideBar, classes.Close ];

    if(props.open){
        attachedCssClasses = [classes.SideBar, classes.Open ];
    }


    return(
        <Aux>
            <BackDrop show={props.show} clicked={props.toggle}/>
            <div className={attachedCssClasses.join(' ')}>
                <div className={classes.Logo} onClick={() => props.changePageHandler("home")}><Logo/></div>
                 <nav>
                    <ul>
                        <li>
                            <a href="#home" onClick={() => props.changePageHandler("home")}>Home</a>
                        </li>
                        <li>
                            <a href="#resources"  onClick={() => props.changePageHandler("resources")}>Resources</a>
                        </li>
                        <li>
                            <a href="#aboutus"  onClick={() => props.changePageHandler("about_us")}>About Us</a>
                        </li>
                        <li>
                            <a href="#contactus">Contact Us</a>
                        </li>
                    </ul>

                    <ul>
                       {props.dropDowns.map(item => (
                           <li>
                               <a href ={item.href} onClick={() => props.changePageHandler(item.page)}>{item.name}</a>
                           </li>

                       )

                       )}
                    </ul>
                 </nav>
             </div>
        </Aux>

);




}

export default sidebar;