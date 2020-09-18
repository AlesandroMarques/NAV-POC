import React , {Component} from 'react';
import TopNav from './TopNav/TopNav';
import classes from './Navigation.module.css';
import NavBar from './NavBar/NavBar';
import SideBar from './SideBar/SideBar';


class Navigation extends Component  {

  state={
        dropdowns:[
              {name: 'IT INFRUSTRCTURE',
              href: '#iti',
                  dropDownItems:[
                     {id:'ahd7d', name:"VIRTUALIZATION & STORAGE" , href:"#iti/1.1"},
                     {id:'ahdsd', name:"HP STORAGE | 3PAR" , href:"#iti/1.2"},
                     {id:'ad5gr', name:"ALL FLASH ARRAY" , href:"#iti/1.3"},
                    {id:'nh7e3', name:"CONVERGED INFRASTRUCTURE" , href:"#iti/1.4"},
                     {id:'5fe8h', name:"PRODUCT FULFILLMENT" , href:"#iti/1.5"},
                     {id:'cki8e', name:"NETWORKING" , href:"#iti/1.6"},
                     {id:'v835f', name:"IaaS" , href:"#iti/1.7"}
                    ]
                    },

                    {name: 'CLOUD',
                    href: '#cloud',
                        dropDownItems:[
                           {id:'65s7fh', name:"PRIVATE CLOUD" , href:"#cloud/1.1"},
                           {id:'d8hf6e', name:"CLOUD BACKUP" , href:"#cloud/1.2"},
                           {id:'65d8f7', name:"SaaS" , href:"#cloud/1.3"},
                           {id:'v835f', name:"IaaS" , href:"#iti/1.7"}
                        ]},

                    {name: 'IT SERVICES',
                    href: '#its',
                          dropDownItems:[
                               {id:'fhyr75', name:"PROFESSIONAL SERVICES" , href:"#its/1.1"},
                               {id:'d8hskf', name:"DATA MANAGMENT" , href:"#its/1.2"},
                               {id:'dubwtr', name:"TROUBLESHOOTING" , href:"#its/1.3"}
                            ]},

                      {name: 'MANAGED SERVICES',
                        href: '#ms',
                           dropDownItems:[
                                   {id:'qwdr', name:"DESKTOP & SERVER" , href:"#ms/1.1"},
                                   {id:'vbft', name:"REMOTE SUPPORT" , href:"#ms/1.2"},
                                   {id:'ukgt', name:"ADVANCED MONITORING" , href:"#ms/1.3"},
                                   {id:'ukht', name:"ON-SITE SUPPORT" , href:"#ms/1.4"},
                                   {id:'fgdr', name:"PROTECT" , href:"#ms/1.5"}
                                ]}  
                                ,

                      {name: 'DISASTER RECOVERY',
                      href: '#dr',
                          dropDownItems:[
                                   {id:'45sdrf', name:"DISASTER RECOVERY" , href:"#dr/1.1"},
                                   {id:'45dufg', name:"DR PLANNING" , href:"#dr/1.2"},
                                   {id:'dy7fhw', name:"DRaaS" , href:"#dr/1.3"},
                                   {id:'6sig7e', name:"CLOUD BACKUP" , href:"#cloud/1.2"},
                                   {id:'digfu3', name:"MANAGED BACK-UP SERVICES" , href:"#dr/1.4"},
                                   {id:'digfu3', name:"ARCSERVE PRODUCTS & SERVICES" , href:"#dr/1.5"}
                                          ]}                 

                  ],
          // add more and loop in DropDowns line we did in DropDown

          showBackDrop:false,
          showSideBar:false

  }

   toggleBackDropHandler = () =>{
   const showBackDrop2 = !this.state.showBackDrop;
   const showSideBar2 = !this.state.showSideBar;
   this.setState({showBackDrop:showBackDrop2, showSideBar:showSideBar2})

}


  render(){

  

  

      return (
         <header className={classes.NavBar}>
         <TopNav/>
          <NavBar dropDowns={this.state.dropdowns} toggle={this.toggleBackDropHandler} />
          <SideBar dropDowns={this.state.dropdowns} open={this.state.showSideBar} show={this.state.showBackDrop} toggle={this.toggleBackDropHandler}/>
         </header>
       );
   
   }
}

export default Navigation;