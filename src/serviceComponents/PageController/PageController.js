import React , {Component} from 'react';

import Virtual_Storage from '../Services/IT_INFRUSTRUCTURE/Virtual_Storage';
import ProdFill from '../Services/IT_INFRUSTRUCTURE/Product_Fulfillment';
import HP_Storage from '../Services/IT_INFRUSTRUCTURE/HP_Storage_3Par';
import All_Flash_Array from '../Services/IT_INFRUSTRUCTURE/All_Flash_Array';
import Converged_Inf from '../Services/IT_INFRUSTRUCTURE/Converged_Infrastructure';
import Networking from '../Services/IT_INFRUSTRUCTURE/Networking';

import Private_Cloud from '../Services/CLOUD/Private_Cloud';
import SaaS from '../Services/CLOUD/SaaS';
import Cloud_Backup from '../Services/CLOUD/Cloud_Backup';

import Professional_Services from '../Services/IT_SERVICES/Professional_Services';
import Data_Managment from '../Services/IT_SERVICES/Data_Managment';
import Troubleshooting from '../Services/IT_SERVICES/Troubleshooting';

import Desktop_Server from '../Services/MANAGED_SERVICES/Desktop_Server';
import Remote_Support from '../Services/MANAGED_SERVICES/Remote_Support';
import Advanced_Monitoring from '../Services/MANAGED_SERVICES/Advanced_Monitoring';
import Onsite_Monitoring from '../Services/MANAGED_SERVICES/Onsite_Support';
import Protect from '../Services/MANAGED_SERVICES/Protect';

import DR_Planning from '../Services/DISASTER_RECOVERY/DR_Planning';
import DR from '../Services/DISASTER_RECOVERY/Disaster_Recovery';
import DRaaS from '../Services/DISASTER_RECOVERY/DRaaS';
import Managed_Backup from '../Services/DISASTER_RECOVERY/Managed_Backup'
import Arcserve from '../Services/DISASTER_RECOVERY/Arcserve';




class PageController extends Component{

        state ={
            page:"dr",
            pages:[
                {name:"dr_planning", show:false, output:<DR_Planning/>},
                {name:"dr", show:true, output:<DR/>},
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

        


    return(
        <div>
        
        {this.state.pages.map( item => {
            if(item.show){
            return(item.output);}
        }
        )}
        <button onClick={() =>this.changePageHandler("dr_planning")}>Change Page</button>    
        </div>


    );    

    }



} 

export default PageController;