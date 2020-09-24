import React from 'react';
import iti_image from '../assets/Solutions/it_inf.jpg';
import cloud_image from '../assets/Solutions/cloud.jpg';
import its_image from '../assets/Solutions/it_services.jpg';
import ms_image from '../assets/Solutions/managed_services.jpg';
import dr_image from '../assets/Solutions/dr.jpg';
import SolutionsHeader from './SolutionsHeader/SolutionsHeader';


const testSolutions =(props) =>{

   
      
        return (
            
                
          /*  <SolutionsHeader img={iti_image} header="IT INFRASTRUCTURE" des="GIVE YOUR DATACENTRE EXPERT ATTENTION"/> */ 
          /*  <SolutionsHeader img={cloud_image} header="CLOUD" des="INFRASTRUCTURE FOR GROWTH AND FLEXIBILITY"/>*/
          /*  <SolutionsHeader img={its_image} header="IT SERVICES" des="SOLVING COMPLEX BUSINESS PROBLEMS WITH IT SOLUTIONS"/>*/
          /*<SolutionsHeader img={ms_image} header="MANAGED SERVICES" des="BRING YOUR BACKUP AND RECOVERY PLANS UP TO SPEED"/>*/
          <SolutionsHeader img={dr_image} header="DISASTER RECOVERY" des="PROACTIVE PROTECTION FOR YOUR ENTIRE ORGANIZATION"/>
        );
    
}

export default testSolutions;