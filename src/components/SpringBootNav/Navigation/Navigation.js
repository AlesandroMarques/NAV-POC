import React , {Component} from 'react';
import * as ReactBootStrap from "react-bootstrap";
import TopNav from './TopNav/TopNav';
import Logo from './Logo/Logo';
import DropDowns from './DropDowns/DropDowns';
import classes from './Navigation.module.css';


class Navigation extends Component  {

  state={
        dropdowns:{
          name: 'IT INFRUSTRCTURE',
          href: '#iti',
               dropDownItems:[
                  {id:'ahd7d', name:"VIRTUALIZATION & STORAGE" , href:"#iti/3.1"},
                  {id:'ahdsd', name:"HP STORAGE | 3PAR" , href:"#iti/3.2"},
                  {id:'ad5gr', name:"ALL FLASH ARRAY" , href:"#iti/3.3"},
                  {id:'nh7e3', name:"CONVERGED INFRASTRUCTURE" , href:"#iti/3.4"},
                  {id:'5fe8h', name:"PRODUCT FULFILLMENT" , href:"#iti/3.5"},
                  {id:'cki8e', name:"NETWORKING" , href:"#iti/3.6"},
                  {id:'v835f', name:"IaaS" , href:"#iti/3.7"}

              ]

          }
          // add more and loop in DropDowns line we did in DropDown

  }


  render(){

    return (
        <header className={classes.NavBar}>
        <TopNav/>
         <ReactBootStrap.Navbar collapseOnSelect expand="lg"variant="light" bg="light"  >
         <Logo/>
        <DropDowns title={this.state.dropdowns.name} href={this.state.dropdowns.href} dropDownItems={this.state.dropdowns.dropDownItems}/>
        </ReactBootStrap.Navbar>
  
        </header>
      );}
}

export default Navigation;