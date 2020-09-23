import React , {Component} from 'react';
import TopNav from './TopNav/TopNav';
import classes from './Navigation.module.css';
import NavBar from './NavBar/NavBar';
import SideBar from './SideBar/SideBar';


class Navigation extends Component  {

  state={
       /* dropdowns:[
              {nameUp: 'IT INFRUSTRCTURE',
              name:' IT Infrustructure',
              href: '#iti',
                  dropDownItems:[
                     {id:'ahd7d', nameUp:"VIRTUALIZATION & STORAGE" , href:"#iti/1.1" , page:"virtual_storage"},
                     {id:'ahdsd', nameUp:"HP STORAGE | 3PAR" , href:"#iti/1.2", page:"hp_storage"},
                     {id:'ad5gr', nameUp:"ALL FLASH ARRAY" , href:"#iti/1.3", page:"all_flash_array"},
                    {id:'nh7e3', nameUp:"CONVERGED INFRASTRUCTURE" , href:"#iti/1.4", page:"converged_infrastructure"},
                     {id:'5fe8h', nameUp:"PRODUCT FULFILLMENT" , href:"#iti/1.5", page:"product_fulfillment"},
                     {id:'cki8e', nameUp:"NETWORKING" , href:"#iti/1.6", page:"networking"},
                     {id:'v835f', nameUp:"INFRASTRUCTURE AS A SERVICE" , href:"#iti/1.7", page:"iaas"}
                    ]
                    },

                    {nameUp: 'CLOUD',
                    name:'Cloud',
                    href: '#cloud',
                        dropDownItems:[
                           {id:'65s7fh', nameUp:"PRIVATE CLOUD" , href:"#cloud/1.1", page:"private_cloud"},
                           {id:'d8hf6e', nameUp:"CLOUD BACKUP" , href:"#cloud/1.2", page:"cloud_backup"},
                           {id:'65d8f7', nameUp:"SOFTWARE AS A SERVICE" , href:"#cloud/1.3", page:"saas"},
                           {id:'v835f', nameUp:"INFRASTRUCTURE AS A SERVICE" , href:"#iti/1.7", page:"iaas"}
                        ]},

                    {nameUp: 'IT SERVICES',
                    name:'IT Services',
                    href: '#its',
                          dropDownItems:[
                               {id:'fhyr75', nameUp:"PROFESSIONAL SERVICES" , href:"#its/1.1", page:"professional_services"},
                               {id:'d8hskf', nameUp:"DATA MANAGMENT" , href:"#its/1.2", page:"data_managment"},
                               {id:'dubwtr', nameUp:"TROUBLESHOOTING" , href:"#its/1.3", page:"troubleshooting"}
                            ]},

                      {nameUp: 'MANAGED SERVICES',
                      name:'Managed Services',
                        href: '#ms',
                           dropDownItems:[
                                   {id:'qwdr', nameUp:"DESKTOP & SERVER" , href:"#ms/1.1", page:"desktop_server"},
                                   {id:'vbft', nameUp:"REMOTE SUPPORT" , href:"#ms/1.2", page:"remote_support"},
                                   {id:'ukgt', nameUp:"ADVANCED MONITORING" , href:"#ms/1.3", page:"advanced_monitoring"},
                                   {id:'ukht', nameUp:"ON-SITE SUPPORT" , href:"#ms/1.4", page:"onsite_monitoring"},
                                   {id:'fgdr', nameUp:"PROTECT" , href:"#ms/1.5", page:"protect"}
                                ]}  
                                ,

                      {nameUp: 'DISASTER RECOVERY',
                      name:'Disaster Recovery',
                      href: '#dr',
                          dropDownItems:[
                                   {id:'45sdrf', nameUp:"DISASTER RECOVERY" , href:"#dr/1.1" , page:"dr"},
                                   {id:'45dufg', nameUp:"DR PLANNING" , href:"#dr/1.2",page:"dr_planning"},
                                   {id:'dy7fhw', nameUp:"DISASTER RECOVERY AS A SERVICE" , href:"#dr/1.3",page:"draas"},
                                   {id:'6sig7e', nameUp:"CLOUD BACKUP" , href:"#cloud/1.2",page:"cloud_backup"},
                                   {id:'digfu3', nameUp:"MANAGED BACK-UP SERVICES" , href:"#dr/1.4",page:"managed_backup"},
                                   {id:'digfu3', nameUp:"ARCSERVE PRODUCTS & SERVICES" , href:"#dr/1.5",page:"arcserve"}
                                          ]}                 

                  ],*/
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
          <NavBar dropDowns={this.props.dropDowns} toggle={this.toggleBackDropHandler} changePageHandler={this.props.changePageHandler} />
          <SideBar dropDowns={this.props.dropDowns} open={this.state.showSideBar} show={this.state.showBackDrop} toggle={this.toggleBackDropHandler}/>
         </header>
       );
   
   }
}

export default Navigation;