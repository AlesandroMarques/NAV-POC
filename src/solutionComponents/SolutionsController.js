import React from 'react';
import iti_image from '../assets/Solutions/it_inf.jpg';
import cloud_image from '../assets/Solutions/cloud.jpg';
import its_image from '../assets/Solutions/it_services2.jpg';
import ms_image from '../assets/Solutions/managed_services.jpg';
import dr_image from '../assets/Solutions/dr.jpg';
import SolutionsHeader from './SolutionsHeader/SolutionsHeader';
import SolutionsContent from './SolutionsContent/SolutionsContent';
import classes from './SolutionsController.module.css';



const dropDownitems=[
  {id:'45sdrf', nameUp:"DISASTER RECOVERY" , name:"Disaster Recovery", href:"#dr/1.1" , page:"dr", info:"What if your critical servers go down today, how long will it take for you to get back online? Do you have the resource to recover your servers quickly? "},
  {id:'45dufg', nameUp:"DR PLANNING" ,name:"DR Planning", href:"#dr/1.2",page:"dr_planning", info:"Our specialists have the capabilities to help you create a DR strategy to keep your systems safe, accessible,"},
  {id:'dy7fhw', nameUp:"DISASTER RECOVERY AS A SERVICE" , name:"Disaster Recovery as a Service", href:"#dr/1.3",page:"draas",info:"Your data is essential to running your business, downtime is not an option. With all the high demands placed on your team,"},
  {id:'6sig7e', nameUp:"CLOUD BACKUP", name:"Cloud Backup", href:"#cloud/1.2",page:"cloud_backup",info:"Organizations have traditionally implemented proper Disaster Recovery (DR) practice by writing backups to tape and shipping them offsite."},
  {id:'digfu3', nameUp:"MANAGED BACK-UP SERVICES" , name:"Managed Back-up Services", href:"#dr/1.4",page:"managed_backup",info:"Your data is your business. Whether you’re a small business or a large enterprise you can depend on us to help you recover quickly after an accidental file deletion,"},
  {id:'digfu3', nameUp:"ARCSERVE PRODUCTS & SERVICES" ,name:"Arcserve Products & Services", href:"#dr/1.5",page:"arcserve",info:""}
         ]
const testSolutions =(props) =>{
  
   
      
        return (
            
                
          /*  <SolutionsHeader img={iti_image} header="IT INFRASTRUCTURE" des="GIVE YOUR DATACENTRE EXPERT ATTENTION"/> */ 
          /*  <SolutionsHeader img={cloud_image} header="CLOUD" des="INFRASTRUCTURE FOR GROWTH AND FLEXIBILITY"/>*/
           /* <SolutionsHeader img={its_image} header="IT SERVICES" des="SOLVING COMPLEX BUSINESS PROBLEMS WITH IT SOLUTIONS"/>*/
          /*<SolutionsHeader sidebar={props.showSideBar} img={ms_image} header="MANAGED SERVICES" des="BRING YOUR BACKUP AND RECOVERY PLANS UP TO SPEED"/>*/
          /*<SolutionsHeader img={dr_image} header="DISASTER RECOVERY" des="PROACTIVE PROTECTION FOR YOUR ENTIRE ORGANIZATION"/>*/
          /*<div>
          <SolutionsHeader img={dr_image} header="DISASTER RECOVERY" des="PROACTIVE PROTECTION FOR YOUR ENTIRE ORGANIZATION"/>
          <SolutionsContent name="DISASTER RECOVERY" dropDownItems={dropDownitems} clicked={props.clicked} />

          </div>*/

          <div>
          <SolutionsHeader img={props.allInfo.img} header={props.allInfo.nameUp} des={props.allInfo.des}/>
          <SolutionsContent name={props.allInfo.nameUp} dropDownItems={props.allInfo.dropDownItems} clicked={props.changePageHandler} />

          </div>
        );
    
}

export default testSolutions;