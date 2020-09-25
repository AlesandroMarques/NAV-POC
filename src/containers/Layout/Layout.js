import React , {Component} from 'react';
import Navibar from '../../components/SpringBootNav/Navigation/Navigation';

import VirtualStorage from '../../serviceComponents/Services/IT_INFRUSTRUCTURE/Virtual_Storage';
import ProdFill from '../../serviceComponents/Services/IT_INFRUSTRUCTURE/Product_Fulfillment';
import HPStorage from '../../serviceComponents/Services/IT_INFRUSTRUCTURE/HP_Storage_3Par';
import AllFlashArray from '../../serviceComponents/Services/IT_INFRUSTRUCTURE/All_Flash_Array';
import ConvergedInf from '../../serviceComponents/Services/IT_INFRUSTRUCTURE/Converged_Infrastructure';
import Networking from '../../serviceComponents/Services/IT_INFRUSTRUCTURE/Networking';

import PrivateCloud from '../../serviceComponents/Services/CLOUD/Private_Cloud';
import SaaS from '../../serviceComponents/Services/CLOUD/SaaS';
import CloudBackup from '../../serviceComponents/Services/CLOUD/Cloud_Backup';
import IaaS from '../../serviceComponents/Services/CLOUD/IaaS';

import ProfessionalServices from '../../serviceComponents/Services/IT_SERVICES/Professional_Services';
import DataManagment from '../../serviceComponents/Services/IT_SERVICES/Data_Managment';
import Troubleshooting from '../../serviceComponents/Services/IT_SERVICES/Troubleshooting';

import DesktopServer from '../../serviceComponents/Services/MANAGED_SERVICES/Desktop_Server';
import RemoteSupport from '../../serviceComponents/Services/MANAGED_SERVICES/Remote_Support';
import AdvancedMonitoring from '../../serviceComponents/Services/MANAGED_SERVICES/Advanced_Monitoring';
import OnsiteMonitoring from '../../serviceComponents/Services/MANAGED_SERVICES/Onsite_Support';
import Protect from '../../serviceComponents/Services/MANAGED_SERVICES/Protect';

import DRPlanning from '../../serviceComponents/Services/DISASTER_RECOVERY/DR_Planning';
import DR from '../../serviceComponents/Services/DISASTER_RECOVERY/Disaster_Recovery';
import DRaaS from '../../serviceComponents/Services/DISASTER_RECOVERY/DRaaS';
import ManagedBackup from '../../serviceComponents/Services/DISASTER_RECOVERY/Managed_Backup'
import Arcserve from '../../serviceComponents/Services/DISASTER_RECOVERY/Arcserve';

import Footer from '../../footerComponents/footerNav';

import classes from './Layout.module.css';
import Aux from '../../hoc/Auxiliary';

import SolutionsController from '../../solutionComponents/SolutionsController'
import iti_image from '../../assets/Solutions/it_inf.jpg';
import cloud_image from '../../assets/Solutions/cloud.jpg';
import its_image from '../../assets/Solutions/it_services2.jpg';
import ms_image from '../../assets/Solutions/managed_services.jpg';
import dr_image from '../../assets/Solutions/dr.jpg';


const DROPDOWNS=[
  { page:"iti",
    nameUp: 'IT INFRUSTRCTURE',
  name:' IT Infrustructure',
  href: '#iti',
  des:"GIVE YOUR DATACENTRE EXPERT ATTENTION",
  img:iti_image,
      dropDownItems:[
         {id:'ahd7d', nameUp:"VIRTUALIZATION & STORAGE", name:"Virtualization & Storage", href:"#iti/1.1" , page:"virtual_storage"},
         {id:'ahdsd', nameUp:"HP STORAGE | 3PAR" ,name: "HP Storage | 3PAR", href:"#iti/1.2", page:"hp_storage"},
         {id:'ad5gr', nameUp:"ALL FLASH ARRAY" , name:"All Flash Array", href:"#iti/1.3", page:"all_flash_array"},
        {id:'nh7e3', nameUp:"CONVERGED INFRASTRUCTURE" ,name:"Converged Infrustructure", href:"#iti/1.4", page:"converged_infrastructure"},
         {id:'5fe8h', nameUp:"PRODUCT FULFILLMENT", name:"Product Fulfillment", href:"#iti/1.5", page:"product_fulfillment"},
         {id:'cki8e', nameUp:"NETWORKING" , name:"Networking", href:"#iti/1.6", page:"networking"},
         {id:'v835f', nameUp:"INFRASTRUCTURE AS A SERVICE" ,name:"Infrustructure as a Service", href:"#iti/1.7", page:"iaas"}
        ]
        },

        {page:"cloud",
          nameUp: 'CLOUD',
        name:'Cloud',
        href: '#cloud',
        des:"INFRASTRUCTURE FOR GROWTH AND FLEXIBILITY",
        img:cloud_image,
            dropDownItems:[
               {id:'65s7fh', nameUp:"PRIVATE CLOUD" ,name:"Private Cloud", href:"#cloud/1.1", page:"private_cloud"},
               {id:'d8hf6e', nameUp:"CLOUD BACKUP" , name:"Cloud Backup", href:"#cloud/1.2", page:"cloud_backup"},
               {id:'65d8f7', nameUp:"SOFTWARE AS A SERVICE" ,name:"Software as a Service", href:"#cloud/1.3", page:"saas"},
  
               {id:'v835f', nameUp:"INFRASTRUCTURE AS A SERVICE" ,name:"Infrustructure as a Service", href:"#iti/1.7", page:"iaas"}
            ]},

        {page:"its",
          nameUp: 'IT SERVICES',
        name:'IT Services',
        href: '#its',
        des:"SOLVING COMPLEX BUSINESS PROBLEMS WITH IT SOLUTIONS",
        img:its_image,
              dropDownItems:[
                   {id:'fhyr75', nameUp:"PROFESSIONAL SERVICES" , name:"Professional Services", href:"#its/1.1", page:"professional_services"},
                   {id:'d8hskf', nameUp:"DATA MANAGMENT" , name:"Data Managment", href:"#its/1.2", page:"data_managment"},
                   {id:'dubwtr', nameUp:"TROUBLESHOOTING" , name:"Troubleshooting", href:"#its/1.3", page:"troubleshooting"}
                ]},

          {page:"ms",
            nameUp: 'MANAGED SERVICES',
          name:'Managed Services',
            href: '#ms',
            des:"BRING YOUR BACKUP AND RECOVERY PLANS UP TO SPEED",
            img:ms_image,
               dropDownItems:[
                       {id:'qwdr', nameUp:"DESKTOP & SERVER" , name:"Desktop & Server", href:"#ms/1.1", page:"desktop_server"},
                       {id:'vbft', nameUp:"REMOTE SUPPORT" , name:"Remote Support",href:"#ms/1.2", page:"remote_support"},
                       {id:'ukgt', nameUp:"ADVANCED MONITORING" , name:"Advanced Monitoring", href:"#ms/1.3", page:"advanced_monitoring"},
                       {id:'ukht', nameUp:"ON-SITE SUPPORT" , name:"On-Site Support",href:"#ms/1.4", page:"onsite_monitoring"},
                       {id:'fgdr', nameUp:"PROTECT" , name:"Protect", href:"#ms/1.5", page:"protect"}
                    ]}  
                    ,

          {page:"disasterrecovery",
            nameUp: 'DISASTER RECOVERY',
          name:'Disaster Recovery',
          href: '#disasterrecovery',
          des:"PROACTIVE PROTECTION FOR YOUR ENTIRE ORGANIZATION",
          img:dr_image,
              dropDownItems:[
                {id:'45sdrf', nameUp:"DISASTER RECOVERY" , name:"Disaster Recovery", href:"#dr/1.1" , page:"dr", info:"What if your critical servers go down today, how long will it take for you to get back online? Do you have the resource to recover your servers quickly? "},
                {id:'45dufg', nameUp:"DR PLANNING" ,name:"DR Planning", href:"#dr/1.2",page:"dr_planning", info:"Our specialists have the capabilities to help you create a DR strategy to keep your systems safe, accessible,"},
                {id:'dy7fhw', nameUp:"DISASTER RECOVERY AS A SERVICE" , name:"Disaster Recovery as a Service", href:"#dr/1.3",page:"draas",info:"Your data is essential to running your business, downtime is not an option. With all the high demands placed on your team,"},
                {id:'6sig7e', nameUp:"CLOUD BACKUP", name:"Cloud Backup", href:"#cloud/1.2",page:"cloud_backup",info:"Organizations have traditionally implemented proper Disaster Recovery (DR) practice by writing backups to tape and shipping them offsite."},
                {id:'digfu3', nameUp:"MANAGED BACK-UP SERVICES" , name:"Managed Back-up Services", href:"#dr/1.4",page:"managed_backup",info:"Your data is your business. Whether you’re a small business or a large enterprise you can depend on us to help you recover quickly after an accidental file deletion,"},
                {id:'digfu3', nameUp:"ARCSERVE PRODUCTS & SERVICES" ,name:"Arcserve Products & Services", href:"#dr/1.5",page:"arcserve",info:""}
                              ]}                 

      ]

class Layout extends Component  {

  


  state ={
    page:"disasterrecovery",
    pages:[
     /* {name:"iti", main:true,show:false, output:<SolutionsController allInfo={DROPDOWNS[0]}/>},
      {name:"cloud", main:true,show:false, output:<SolutionsController allInfo={DROPDOWNS[1]}/>},
      {name:"its", main:true,show:false, output:<SolutionsController allInfo={DROPDOWNS[2]}/>},
      {name:"ms",main:true, show:false, output:<SolutionsController allInfo={DROPDOWNS[3]}/>},
      {name:"disasterrecovery",main:true,show:true, output:<SolutionsController allInfo={DROPDOWNS[4]}/>},*/

      {name:"iti", solution:true,show:false, output:0},
      {name:"cloud", solution:true,show:false, output:1},
      {name:"its", solution:true,show:false, output:2},
      {name:"ms",solution:true, show:false, output:3},
      {name:"disasterrecovery",solution:true,show:true, output:4},


      {name:"virtual_storage", show:false, output:<VirtualStorage/>},
      {name:"product_fulfillment", show:false, output:<ProdFill/>},
      {name:"hp_storage", show:false, output:<HPStorage/>},
      {name:"all_flash_array", show:false, output:<AllFlashArray/>},
      {name:"converged_infrastructure", show:false, output:<ConvergedInf/>},
      {name:"networking", show:false, output:<Networking/>},

      {name:"private_cloud", show:false, output:<PrivateCloud/>},
      {name:"saas", show:false, output:<SaaS/>},
      {name:"iaas", show:false, output:<IaaS/>},
      {name:"cloud_backup", show:false, output:<CloudBackup/>},

      {name:"professional_services", show:false, output:<ProfessionalServices/>},
      {name:"data_managment", show:false, output:<DataManagment/>},
      {name:"troubleshooting", show:false, output:<Troubleshooting/>},
      

      {name:"desktop_server", show:false, output:<DesktopServer/>},
      {name:"remote_support", show:false, output:<RemoteSupport/>},
      {name:"advanced_monitoring", show:false, output:<AdvancedMonitoring/>},
      {name:"onsite_monitoring", show:false, output:<OnsiteMonitoring/>},
      {name:"protect", show:false, output:<Protect/>},


        {name:"dr_planning", show:false, output:<DRPlanning/>},
        {name:"dr", show:false, output:<DR/>},
        {name:"draas", show:false, output:<DRaaS/>},
        {name:"managed_backup", show:false, output:<ManagedBackup/>},
        {name:"arcserve", show:false, output:<Arcserve/>}
    


        
    ],
    showBackDrop:false,
    showSideBar:false
    
    /*,
    dropdowns:[
      {nameUp: 'IT INFRUSTRCTURE',
      name:' IT Infrustructure',
      href: '#iti',
          dropDownItems:[
             {id:'ahd7d', nameUp:"VIRTUALIZATION & STORAGE", name:"Virtualization & Storage", href:"#iti/1.1" , page:"virtual_storage"},
             {id:'ahdsd', nameUp:"HP STORAGE | 3PAR" ,name: "HP Storage | 3PAR", href:"#iti/1.2", page:"hp_storage"},
             {id:'ad5gr', nameUp:"ALL FLASH ARRAY" , name:"All Flash Array", href:"#iti/1.3", page:"all_flash_array"},
            {id:'nh7e3', nameUp:"CONVERGED INFRASTRUCTURE" ,name:"Converged Infrustructure", href:"#iti/1.4", page:"converged_infrastructure"},
             {id:'5fe8h', nameUp:"PRODUCT FULFILLMENT", name:"Product Fulfillment", href:"#iti/1.5", page:"product_fulfillment"},
             {id:'cki8e', nameUp:"NETWORKING" , name:"Networking", href:"#iti/1.6", page:"networking"},
             {id:'v835f', nameUp:"INFRASTRUCTURE AS A SERVICE" ,name:"Infrustructure as a Service", href:"#iti/1.7", page:"iaas"}
            ]
            },

            {nameUp: 'CLOUD',
            name:'Cloud',
            href: '#cloud',
                dropDownItems:[
                   {id:'65s7fh', nameUp:"PRIVATE CLOUD" ,name:"Private Cloud", href:"#cloud/1.1", page:"private_cloud"},
                   {id:'d8hf6e', nameUp:"CLOUD BACKUP" , name:"Cloud Backup", href:"#cloud/1.2", page:"cloud_backup"},
                   {id:'65d8f7', nameUp:"SOFTWARE AS A SERVICE" ,name:"Software as a Service", href:"#cloud/1.3", page:"saas"},
      
                   {id:'v835f', nameUp:"INFRASTRUCTURE AS A SERVICE" ,name:"Infrustructure as a Service", href:"#iti/1.7", page:"iaas"}
                ]},

            {nameUp: 'IT SERVICES',
            name:'IT Services',
            href: '#its',
                  dropDownItems:[
                       {id:'fhyr75', nameUp:"PROFESSIONAL SERVICES" , name:"Professional Services", href:"#its/1.1", page:"professional_services"},
                       {id:'d8hskf', nameUp:"DATA MANAGMENT" , name:"Data Managment", href:"#its/1.2", page:"data_managment"},
                       {id:'dubwtr', nameUp:"TROUBLESHOOTING" , name:"Troubleshooting", href:"#its/1.3", page:"troubleshooting"}
                    ]},

              {nameUp: 'MANAGED SERVICES',
              name:'Managed Services',
                href: '#ms',
                   dropDownItems:[
                           {id:'qwdr', nameUp:"DESKTOP & SERVER" , name:"Desktop & Server", href:"#ms/1.1", page:"desktop_server"},
                           {id:'vbft', nameUp:"REMOTE SUPPORT" , name:"Remote Support",href:"#ms/1.2", page:"remote_support"},
                           {id:'ukgt', nameUp:"ADVANCED MONITORING" , name:"Advanced Monitoring", href:"#ms/1.3", page:"advanced_monitoring"},
                           {id:'ukht', nameUp:"ON-SITE SUPPORT" , name:"On-Site Support",href:"#ms/1.4", page:"onsite_monitoring"},
                           {id:'fgdr', nameUp:"PROTECT" , name:"Protect", href:"#ms/1.5", page:"protect"}
                        ]}  
                        ,

              {nameUp: 'DISASTER RECOVERY',
              name:'Disaster Recovery',
              href: '#dr',
                  dropDownItems:[
                           {id:'45sdrf', nameUp:"DISASTER RECOVERY" , name:"Disaster Recovery", href:"#dr/1.1" , page:"dr"},
                           {id:'45dufg', nameUp:"DR PLANNING" ,name:"DR Planning", href:"#dr/1.2",page:"dr_planning"},
                           {id:'dy7fhw', nameUp:"DISASTER RECOVERY AS A SERVICE" , name:"Disaster Recovery as a Service", href:"#dr/1.3",page:"draas"},
                           {id:'6sig7e', nameUp:"CLOUD BACKUP", name:"Cloud Backup", href:"#cloud/1.2",page:"cloud_backup"},
                           {id:'digfu3', nameUp:"MANAGED BACK-UP SERVICES" , name:"Managed Back-up Services", href:"#dr/1.4",page:"managed_backup"},
                           {id:'digfu3', nameUp:"ARCSERVE PRODUCTS & SERVICES" ,name:"Arcserve Products & Services", href:"#dr/1.5",page:"arcserve"}
                                  ]}                 

          ]*/

}

toggleBackDropHandler = () =>{
  const showBackDrop2 = !this.state.showBackDrop;
  const showSideBar2 = !this.state.showSideBar;
  this.setState({showBackDrop:showBackDrop2, showSideBar:showSideBar2})

}


changePageHandler =(pageName) =>{
        const oldPage = this.state.page;
        const pagesCopy = this.state.pages;

        pagesCopy.forEach(element => {
            if(element.name === oldPage){element.show = false;}
            if(element.name === pageName){element.show = true;}
            
            
        });
        window.scrollTo(0, 0);

        this.setState(
            {
                page:pageName,
        pages: pagesCopy
    
            }
          );
      
      

};




render(){


 /* return (  
    <Aux>
          <Navibar dropDowns={DROPDOWNS} changePageHandler={this.changePageHandler} showBackDrop={this.state.showBackDrop} showSideBar={this.state.showSideBar} toggleBackDropHandler={this.toggleBackDropHandler} />
        <main className={classes.Layout}>
        <TestSoltuion />
        </main>  
        <Footer changePageHandler={this.changePageHandler} dropDowns={DROPDOWNS}></Footer>
      </Aux>);*/

     return (  
        <Aux>
              <Navibar dropDowns={DROPDOWNS} changePageHandler={this.changePageHandler} showBackDrop={this.state.showBackDrop} showSideBar={this.state.showSideBar} toggleBackDropHandler={this.toggleBackDropHandler}/>
            <main className={classes.Layout}>
            {this.state.pages.map( item => {
            if(item.show){
              if(item.solution){
                return <SolutionsController allInfo={DROPDOWNS[item.output]} changePageHandler={this.changePageHandler} />
              }
              else{
            return(item.output );}}
        }
        )}
            </main>  
            <Footer changePageHandler={this.changePageHandler} dropDowns={DROPDOWNS}></Footer>
          </Aux>);
          
}
}

export default Layout;