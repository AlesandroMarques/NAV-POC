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
                     {id:'ahd7d', name:"VIRTUALIZATION & STORAGE" , href:"#iti/1.1" , page:"virtual_storage"},
                     {id:'ahdsd', name:"HP STORAGE | 3PAR" , href:"#iti/1.2", page:"hp_storage"},
                     {id:'ad5gr', name:"ALL FLASH ARRAY" , href:"#iti/1.3", page:"all_flash_array"},
                    {id:'nh7e3', name:"CONVERGED INFRASTRUCTURE" , href:"#iti/1.4", page:"converged_infrastructure"},
                     {id:'5fe8h', name:"PRODUCT FULFILLMENT" , href:"#iti/1.5", page:"product_fulfillment"},
                     {id:'cki8e', name:"NETWORKING" , href:"#iti/1.6", page:"networking"},
                     {id:'v835f', name:"IaaS" , href:"#iti/1.7", page:"iaas"}
                    ]
                    },

                    {name: 'CLOUD',
                    href: '#cloud',
                        dropDownItems:[
                           {id:'65s7fh', name:"PRIVATE CLOUD" , href:"#cloud/1.1", page:"private_cloud"},
                           {id:'d8hf6e', name:"CLOUD BACKUP" , href:"#cloud/1.2", page:"cloud_backup"},
                           {id:'65d8f7', name:"SaaS" , href:"#cloud/1.3", page:"saas"},
                           {id:'v835f', name:"IaaS" , href:"#iti/1.7", page:"iaas"}
                        ]},

                    {name: 'IT SERVICES',
                    href: '#its',
                          dropDownItems:[
                               {id:'fhyr75', name:"PROFESSIONAL SERVICES" , href:"#its/1.1", page:"professional_services"},
                               {id:'d8hskf', name:"DATA MANAGMENT" , href:"#its/1.2", page:"data_managment"},
                               {id:'dubwtr', name:"TROUBLESHOOTING" , href:"#its/1.3", page:"troubleshooting"}
                            ]},

                      {name: 'MANAGED SERVICES',
                        href: '#ms',
                           dropDownItems:[
                                   {id:'qwdr', name:"DESKTOP & SERVER" , href:"#ms/1.1", page:"desktop_server"},
                                   {id:'vbft', name:"REMOTE SUPPORT" , href:"#ms/1.2", page:"remote_support"},
                                   {id:'ukgt', name:"ADVANCED MONITORING" , href:"#ms/1.3", page:"advanced_monitoring"},
                                   {id:'ukht', name:"ON-SITE SUPPORT" , href:"#ms/1.4", page:"onsite_monitoring"},
                                   {id:'fgdr', name:"PROTECT" , href:"#ms/1.5", page:"protect"}
                                ]}  
                                ,

                      {name: 'DISASTER RECOVERY',
                      href: '#dr',
                          dropDownItems:[
                                   {id:'45sdrf', name:"DISASTER RECOVERY" , href:"#dr/1.1" , page:"dr"},
                                   {id:'45dufg', name:"DR PLANNING" , href:"#dr/1.2",page:"dr_planning"},
                                   {id:'dy7fhw', name:"DRaaS" , href:"#dr/1.3",page:"draas"},
                                   {id:'6sig7e', name:"CLOUD BACKUP" , href:"#cloud/1.2",page:"cloud_backup"},
                                   {id:'digfu3', name:"MANAGED BACK-UP SERVICES" , href:"#dr/1.4",page:"managed_backup"},
                                   {id:'digfu3', name:"ARCSERVE PRODUCTS & SERVICES" , href:"#dr/1.5",page:"arcserve"}
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
          <NavBar dropDowns={this.state.dropdowns} toggle={this.toggleBackDropHandler} changePageHandler={this.props.changePageHandler} />
          <SideBar dropDowns={this.state.dropdowns} open={this.state.showSideBar} show={this.state.showBackDrop} toggle={this.toggleBackDropHandler}/>
         </header>
       );
   
   }
}

export default Navigation;