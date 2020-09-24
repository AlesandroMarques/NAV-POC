import React , {Component} from 'react';
import Navibar from '../../components/SpringBootNav/Navigation/Navigation';

import Virtual_Storage from '../../serviceComponents/Services/IT_INFRUSTRUCTURE/Virtual_Storage';
import ProdFill from '../../serviceComponents/Services/IT_INFRUSTRUCTURE/Product_Fulfillment';
import HP_Storage from '../../serviceComponents/Services/IT_INFRUSTRUCTURE/HP_Storage_3Par';
import All_Flash_Array from '../../serviceComponents/Services/IT_INFRUSTRUCTURE/All_Flash_Array';
import Converged_Inf from '../../serviceComponents/Services/IT_INFRUSTRUCTURE/Converged_Infrastructure';
import Networking from '../../serviceComponents/Services/IT_INFRUSTRUCTURE/Networking';

import Private_Cloud from '../../serviceComponents/Services/CLOUD/Private_Cloud';
import SaaS from '../../serviceComponents/Services/CLOUD/SaaS';
import Cloud_Backup from '../../serviceComponents/Services/CLOUD/Cloud_Backup';
import IaaS from '../../serviceComponents/Services/CLOUD/IaaS';

import Professional_Services from '../../serviceComponents/Services/IT_SERVICES/Professional_Services';
import Data_Managment from '../../serviceComponents/Services/IT_SERVICES/Data_Managment';
import Troubleshooting from '../../serviceComponents/Services/IT_SERVICES/Troubleshooting';

import Desktop_Server from '../../serviceComponents/Services/MANAGED_SERVICES/Desktop_Server';
import Remote_Support from '../../serviceComponents/Services/MANAGED_SERVICES/Remote_Support';
import Advanced_Monitoring from '../../serviceComponents/Services/MANAGED_SERVICES/Advanced_Monitoring';
import Onsite_Monitoring from '../../serviceComponents/Services/MANAGED_SERVICES/Onsite_Support';
import Protect from '../../serviceComponents/Services/MANAGED_SERVICES/Protect';

import DR_Planning from '../../serviceComponents/Services/DISASTER_RECOVERY/DR_Planning';
import DR from '../../serviceComponents/Services/DISASTER_RECOVERY/Disaster_Recovery';
import DRaaS from '../../serviceComponents/Services/DISASTER_RECOVERY/DRaaS';
import Managed_Backup from '../../serviceComponents/Services/DISASTER_RECOVERY/Managed_Backup'
import Arcserve from '../../serviceComponents/Services/DISASTER_RECOVERY/Arcserve';

import Footer from '../../footerComponents/footerNav';

import classes from './Layout.module.css';
import Aux from '../Auxiliary';

class Layout extends Component  {


  state ={
    page:"dr_planning",
    pages:[
      {name:"virtual_storage", show:false, output:<Virtual_Storage/>},
      {name:"product_fulfillment", show:false, output:<ProdFill/>},
      {name:"hp_storage", show:false, output:<HP_Storage/>},
      {name:"all_flash_array", show:false, output:<All_Flash_Array/>},
      {name:"converged_infrastructure", show:false, output:<Converged_Inf/>},
      {name:"networking", show:false, output:<Networking/>},

      {name:"private_cloud", show:false, output:<Private_Cloud/>},
      {name:"saas", show:false, output:<SaaS/>},
      {name:"iaas", show:false, output:<IaaS/>},
      {name:"cloud_backup", show:false, output:<Cloud_Backup/>},

      {name:"professional_services", show:false, output:<Professional_Services/>},
      {name:"data_managment", show:false, output:<Data_Managment/>},
      {name:"troubleshooting", show:false, output:<Troubleshooting/>},
      

      {name:"desktop_server", show:false, output:<Desktop_Server/>},
      {name:"remote_support", show:false, output:<Remote_Support/>},
      {name:"advanced_monitoring", show:false, output:<Advanced_Monitoring/>},
      {name:"onsite_monitoring", show:false, output:<Onsite_Monitoring/>},
      {name:"protect", show:false, output:<Protect/>},


        {name:"dr_planning", show:true, output:<DR_Planning/>},
        {name:"dr", show:false, output:<DR/>},
        {name:"draas", show:false, output:<DRaaS/>},
        {name:"managed_backup", show:false, output:<Managed_Backup/>},
        {name:"arcserve", show:false, output:<Arcserve/>}
    


        
    ],
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

          ]

}



changePageHandler =(pageName) =>{
        const oldPage = this.state.page;
        const pagesCopy = this.state.pages;

        pagesCopy.forEach(element => {
            if(element.name === oldPage){element.show = false;}
            if(element.name === pageName){element.show = true;}
            
            
        });

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
          <Navibar/>
        <main className={classes.Layout}>
        {this.props.children}
        </main>  
      </Aux>);*/

      return (  
        <Aux>
              <Navibar dropDowns={this.state.dropdowns} changePageHandler={this.changePageHandler}/>
            <main className={classes.Layout}>
            {this.state.pages.map( item => {
            if(item.show){
            return(item.output);}
        }
        )}
            </main>  
            <Footer changePageHandler={this.changePageHandler} dropDowns={this.state.dropdowns}></Footer>
          </Aux>);
}
}

export default Layout;