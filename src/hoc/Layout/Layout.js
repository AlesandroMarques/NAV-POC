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
              <Navibar changePageHandler={this.changePageHandler}/>
            <main className={classes.Layout}>
            {this.state.pages.map( item => {
            if(item.show){
            return(item.output);}
        }
        )}
            </main>  
          </Aux>);
}
}

export default Layout;