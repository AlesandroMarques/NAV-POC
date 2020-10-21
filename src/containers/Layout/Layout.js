import React , {Component} from 'react';
import axios from 'axios';
import Navibar from '../../components/SpringBootNav/Navigation/Navigation';

import VirtualStorage from '../../serviceComponents/Services/IT_INFRUSTRUCTURE/Virtual_Storage';
import ProdFill from '../../serviceComponents/Services/IT_INFRUSTRUCTURE/Product_Fulfillment';
import HPStorage from '../../serviceComponents/Services/IT_INFRUSTRUCTURE/HP_Storage_3Par';
import Nimble from '../../serviceComponents/Services/IT_INFRUSTRUCTURE/Nimble';
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
import iti_image from '../../assets/Solutions/it_inf2.jpg';
import cloud_image from '../../assets/Solutions/cloud2.jpg';
import its_image from '../../assets/Solutions/it_services3.jpg';
import ms_image from '../../assets/Solutions/managed_services2.jpg';
import dr_image from '../../assets/Solutions/dr2.jpg';

import AboutUs from '../../serviceComponents/Services/MAIN/About_Us';
import Resources from '../../serviceComponents/Services/MAIN/Resources/Resources';



/*
const SERVICE_INFO = new Map()
SERVICE_INFO.set('dr' ,"What if your critical servers go down today, how long will it take for you to get back online? Do you have the resource to recover your servers quickly? Unexpected disruptions can severely affect your operations, resulting in lost revenue and unhappy customers. Duologik cost-effective Disaster Recovery solution gets you up and running in minutes or hours")
SERVICE_INFO.set('dr_planning' ,"Our specialists have the capabilities to help you create a DR strategy to keep your systems safe, accessible, recoverable and meet compliance obligations.  They will restore your most critical applications in our state of the art data centre recovering you from IT outages should a disaster strike.")
SERVICE_INFO.set('draas' ,"Your data is essential to running your business, downtime is not an option. With all the high demands placed on your team, you cannot always prioritize the time, energy and budget required to handle a complete and reliable Disaster Recovery (DR) undertaking.")
SERVICE_INFO.set('cloud_backup' ,"Organizations have traditionally implemented proper Disaster Recovery (DR) practice by writing backups to tape and shipping them offsite.  This is a costly and complex system owing to hardware and personnel requirements. Duologik’s Cloud backup system eliminates these requirements ensuring backups are secure and up-to-date.")
SERVICE_INFO.set('managed_backup' ,"Your data is your business. Whether you’re a small business or a large enterprise you can depend on us to help you recover quickly after an accidental file deletion, hardware failure, virus or any other unforeseen event. Take protective measures now to ensure your data is safe.")
SERVICE_INFO.set('arcserve' ,"Arcserve Unified Data Protection (UDP) combines enterprise-ready technologies into an all-in-one solution that delivers every data protection capability businesses need, without the complexity of traditional enterprise solutions. Powered by heterogeneous, image based technology that protects to and from any target, it eliminates the need for discrete products.")

SERVICE_INFO.set('iaas' ,"Duologik’s competitive, on-demand Infrastructure as a Service (IaaS) with instant provision of services essentially simplifies data center complexity and improve customers’ ability to deliver their unpredictable computing requirement in a rapid and cost-effective manner.")
SERVICE_INFO.set('virtual_storage' ,"Duologik offers server virtualization and shared storage solutions that put your organization in an ideal position for future growth. Server virtualization prevents server sprawl, leading to poor hardware resource utilization, possible breach in software security and high electricity and cooling costs.  Stop technology wastage, increase your availability and manage your cost.")
SERVICE_INFO.set('hp_storage' ,"Looking to consolidate onto an enterprise-class flash array without compromising performance, scalability, data services, or resiliency? With unmatched versatility, performance, and density, HPE 3PAR Storage has you covered. Duologik is an HPE enterprise fully certified and service authorized reseller for 3 PAR technology.")
SERVICE_INFO.set('all_flash_array' ,"As the world steams along its path toward a digital economy and businesses transition from datadependent to data-driven, the demands placed on storage performance continue to escalate. With performance increasing at less than one-third the rate of capacity, disk technology, the foundation of non-human memory and the workhorse of the datacentre, seems to be headed out to a much-deserved pasture.")
SERVICE_INFO.set('converged_infrastructure' ,"You want to deploy applications faster. You want to deliver IT capacity to your business and services to your customers more quickly and easily. And you want a shorter time-to-value for IT investments. Virtualization is a well-understood technology that can help you increase agility, reduce costs, and simplify IT management. But virtualization is not ”just another technology.”")
SERVICE_INFO.set('product_fulfillment' ,"Duologik’s IT procurement services enable customers to source, warehouse, configure, test and ship hardware and software nationally.  We work with your budget to meet the specification, brand quality and delivery schedules for successful project deployments.  Our team negotiates directly with vendors for the best possible prices")
SERVICE_INFO.set('networking',"With the explosion of employees bringing their own devices to the office, you can see the benefits of implementing wireless and wired networks into your organization. To maintain productivity, it is important for employees to have access to the corporate network by giving them wireless access from their own devices.")
SERVICE_INFO.set('nimble' ,"HPE Nimble Storage has set the bar for disrupting, simplifying, and modernizing storage to help customers accelerate their digital transformation. Today the innovation continues. Nimble Storage customers now have an enhanced platform that turbocharges apps, eliminates disruptions, and drives more IT agility.")


SERVICE_INFO.set('private_cloud',"We incorporate proven elastic cloud infrastructure and our decades of managed operations experience delivering a secure, private, custom solution addressing the most demanding businesses challenges. ")
SERVICE_INFO.set('saas',"Increasing employee productivity with available technology has never been easier and it can be made possible with low-cost investment, and high flexibility. Explore how Duologik’s Software as a Service (SaaS) unlocks the potential of workers, empowers business managers and enables CEOs to make informed decisions in real time with faster technology deployment")

SERVICE_INFO.set('professional_services',"Duologik Infrastructure Consulting Services takes a holistic, adaptive approach that simplifies the IT modernization process. Equally important, we help prepare your people, processes and organization for change. You get more agility, lower costs and greater flexibility to better pursue your business goals. ")
SERVICE_INFO.set('data_managment',"In order to stay competitive organization’s success relies heavily on its ability to manage its information. You need fast access to your data in a cost effective manner. Data management involves more than the technology. A holistic approach coordinates people, business process, and technological innovation.")
SERVICE_INFO.set('troubleshooting',"We solve common problems, errors and have a framework to systemically drill down in intense deliberation for complex uncertainties. Sources of intractable problems can be uncovered and fixed in our ISO lab testing environment.")

SERVICE_INFO.set('desktop_server',"Duologik provides desktop and server and management services to support your end users with their PC and local devices needs, i.e. smartphones, tablets, scanners, and printers. We work with you to understand and choose the best service option that suits your business needs")
SERVICE_INFO.set('remote_support',"Our remote support objective is to resolve incidents quickly with the use of sophisticated industry standard tools and process.  Services around the clock ranges from level 1: basic help desk to level 3: advanced support engineers who can help with pressing issues, including problem diagnosis and remediation.")
SERVICE_INFO.set('advanced_monitoring',"Duologik Advanced Monitoring service tracks the leading indicators in your infrastructure such as: device CPU utilization, capacity and memory utilization, including device and server availability. You can rest assured if an issue arises, you will get the notifications you need to effectively maintain your IT performance.")
SERVICE_INFO.set('onsite_monitoring',"Duologik has the required knowledge and expertise to work with you on supporting your infrastructure and specific business applications.  You will be assigned an experienced engineer, committed to managing and maintaining your competitive, modern IT environment. Regular scheduled visits will be tailored to your specific needs and budget.")
SERVICE_INFO.set('protect',"Network security is a top priority for any organization in today’s uncertain IT environment. Threats to your system and data can severely impede business innovation, limit productivity and damage compliance efforts. Duologik’s network security services provide organizations preemptive threat measures, protect your operating environment, and monitor suspicious activity.")
*/
const IMAGE_MAP = new Map();
IMAGE_MAP.set("iti",iti_image);
IMAGE_MAP.set("cloud",cloud_image);
IMAGE_MAP.set("its",its_image);
IMAGE_MAP.set("ms",ms_image);
IMAGE_MAP.set("disasterrecovery",dr_image);
//IMAGE_MAP.set("tp",dr_image);
/*
const DROPDOWNS=[

  { page:"iti",
    nameUp: 'IT INFRUSTRCTURE',
  name:' IT Infrustructure',
  href: '#iti',
  des:"GIVE YOUR DATACENTRE EXPERT ATTENTION",
  img:iti_image,
      dropDownItems:[
         { nameUp:"VIRTUALIZATION & STORAGE", name:"Virtualization & Storage", href:"#iti/1.1" , page:"virtual_storage",info: SERVICE_INFO.get("virtual_storage")},
        { nameUp:"NIMBLE STORAGE" ,name: "Nimble Storage", href:"#iti/1.2", page:"nimble",info: SERVICE_INFO.get("nimble")},
         { nameUp:"ALL FLASH ARRAY" , name:"All Flash Array", href:"#iti/1.3", page:"all_flash_array",info: SERVICE_INFO.get("all_flash_array")},
        { nameUp:"CONVERGED INFRASTRUCTURE" ,name:"Converged Infrustructure", href:"#iti/1.4", page:"converged_infrastructure",info: SERVICE_INFO.get("converged_infrastructure")},
         { nameUp:"PRODUCT FULFILLMENT", name:"Product Fulfillment", href:"#iti/1.5", page:"product_fulfillment",info: SERVICE_INFO.get("product_fulfillment")},
         { nameUp:"NETWORKING" , name:"Networking", href:"#iti/1.6", page:"networking",info: SERVICE_INFO.get("networking")},
         { nameUp:"INFRASTRUCTURE AS A SERVICE" ,name:"Infrustructure as a Service", href:"#iti/1.7", page:"iaas",info: SERVICE_INFO.get("iaas")}
        ]
        },

        {page:"cloud",
          nameUp: 'CLOUD',
        name:'Cloud',
        href: '#cloud',
        des:"INFRASTRUCTURE FOR GROWTH AND FLEXIBILITY",
        img:cloud_image,
            dropDownItems:[
               { nameUp:"PRIVATE CLOUD" ,name:"Private Cloud", href:"#cloud/1.1", page:"private_cloud",info: SERVICE_INFO.get("private_cloud")},
               { nameUp:"CLOUD BACKUP" , name:"Cloud Backup", href:"#cloud/1.2", page:"cloud_backup",info: SERVICE_INFO.get("cloud_backup")},
               { nameUp:"SOFTWARE AS A SERVICE" ,name:"Software as a Service", href:"#cloud/1.3", page:"saas",info: SERVICE_INFO.get("saas")},
               { nameUp:"INFRASTRUCTURE AS A SERVICE" ,name:"Infrustructure as a Service", href:"#iti/1.7", page:"iaas",info: SERVICE_INFO.get("iaas")}
            ]},

        {page:"its",
          nameUp: 'IT SERVICES',
        name:'IT Services',
        href: '#its',
        des:"SOLVING COMPLEX BUSINESS PROBLEMS WITH IT SOLUTIONS",
       img:its_image,
              dropDownItems:[
                   { nameUp:"PROFESSIONAL SERVICES" , name:"Professional Services", href:"#its/1.1", page:"professional_services",info: SERVICE_INFO.get("professional_services")},
                   { nameUp:"DATA MANAGMENT" , name:"Data Managment", href:"#its/1.2", page:"data_managment",info: SERVICE_INFO.get("data_managment")},
                   { nameUp:"TROUBLESHOOTING" , name:"Troubleshooting", href:"#its/1.3", page:"troubleshooting",info: SERVICE_INFO.get("troubleshooting")}
                ]},

          {page:"ms",
            nameUp: 'MANAGED SERVICES',
          name:'Managed Services',
            href: '#ms',
            des:"BRING YOUR BACKUP AND RECOVERY PLANS UP TO SPEED",
            img:ms_image,
               dropDownItems:[
                       { nameUp:"DESKTOP & SERVER" , name:"Desktop & Server", href:"#ms/1.1", page:"desktop_server",info: SERVICE_INFO.get("desktop_server")},
                       { nameUp:"REMOTE SUPPORT" , name:"Remote Support",href:"#ms/1.2", page:"remote_support",info: SERVICE_INFO.get("remote_support")},
                       { nameUp:"ADVANCED MONITORING" , name:"Advanced Monitoring", href:"#ms/1.3", page:"advanced_monitoring",info: SERVICE_INFO.get("advanced_monitoring")},
                       { nameUp:"ON-SITE SUPPORT" , name:"On-Site Support",href:"#ms/1.4", page:"onsite_monitoring",info: SERVICE_INFO.get("onsite_monitoring")},
                       { nameUp:"PROTECT" , name:"Protect", href:"#ms/1.5", page:"protect",info: SERVICE_INFO.get("protect")}
                    ]}  
                    ,

          {page:"disasterrecovery",
            nameUp: 'DISASTER RECOVERY',
          name:'Disaster Recovery',
          href: '#disasterrecovery',
          des:"PROACTIVE PROTECTION FOR YOUR ENTIRE ORGANIZATION",
          img:dr_image,
              dropDownItems:[
                { nameUp:"DISASTER RECOVERY" , name:"Disaster Recovery", href:"#dr/1.1" , page:"dr", info: SERVICE_INFO.get("dr")},
                { nameUp:"DR PLANNING" ,name:"DR Planning", href:"#dr/1.2",page:"dr_planning", info: SERVICE_INFO.get("dr_planning")},
                { nameUp:"DISASTER RECOVERY AS A SERVICE" , name:"Disaster Recovery as a Service", href:"#dr/1.3",page:"draas",info: SERVICE_INFO.get("draas")},
                { nameUp:"CLOUD BACKUP", name:"Cloud Backup", href:"#cloud/1.2",page:"cloud_backup",info: SERVICE_INFO.get("cloud_backup")},
                { nameUp:"MANAGED BACK-UP SERVICES" , name:"Managed Back-up Services", href:"#dr/1.4", page:"managed_backup",info: SERVICE_INFO.get("managed_backup")},
                { nameUp:"ARCSERVE PRODUCTS & SERVICES" ,name:"Arcserve Products & Services", href:"#dr/1.5",page:"arcserve",info: SERVICE_INFO.get("arcserve")}
                              ]}    
                             
      ]*/

     

class Layout extends Component  {
 

  


  state ={
    DROPDOWNS:[],

    page:"home",
    pages:[
     /* {name:"iti", main:true,show:false, output:<SolutionsController allInfo={DROPDOWNS[0]}/>},
      {name:"cloud", main:true,show:false, output:<SolutionsController allInfo={DROPDOWNS[1]}/>},
      {name:"its", main:true,show:false, output:<SolutionsController allInfo={DROPDOWNS[2]}/>},
      {name:"ms",main:true, show:false, output:<SolutionsController allInfo={DROPDOWNS[3]}/>},
      {name:"disasterrecovery",main:true,show:true, output:<SolutionsController allInfo={DROPDOWNS[4]}/>},*/

      { name:"about_us", show:false, output:<AboutUs/>},
      {name:"resources", show:false, output:<Resources/>},

      { name:"home", show:true, solution:true,  output:-1},

      { name:"iti", solution:true,show:false, output:0},
      { name:"cloud", solution:true,show:false, output:1},
      {name:"its", solution:true,show:false, output:2},
      { name:"ms",solution:true, show:false, output:3},
      { name:"disasterrecovery",solution:true,show:false, output:4},
     // { name:"tp",solution:true,show:false, output:5},


      { name:"virtual_storage", show:false, output:<VirtualStorage/>},
      { name:"product_fulfillment", show:false, output:<ProdFill/>},
      { name:"hp_storage", show:false, output:<HPStorage/>},
      { name:"nimble", show:false, output:<Nimble/>},
      {  name:"all_flash_array", show:false, output:<AllFlashArray/>},
      { name:"converged_infrastructure", show:false, output:<ConvergedInf/>},
     {  name:"networking", show:false, output:<Networking/>},

      { name:"private_cloud", show:false, output:<PrivateCloud/>},
      { name:"saas", show:false, output:<SaaS/>},
      { name:"iaas", show:false, output:<IaaS/>},
      {name:"cloud_backup", show:false, output:<CloudBackup/>},

      {name:"professional_services", show:false, output:<ProfessionalServices/>},
      {name:"data_managment", show:false, output:<DataManagment/>},
      {name:"troubleshooting", show:false, output:<Troubleshooting/>},
      

      { name:"desktop_server", show:false, output:<DesktopServer/>},
      {name:"remote_support", show:false, output:<RemoteSupport/>},
      {name:"advanced_monitoring", show:false, output:<AdvancedMonitoring/>},
      {name:"onsite_monitoring", show:false, output:<OnsiteMonitoring/>},
      {name:"protect", show:false, output:<Protect/>},


        {name:"dr_planning", show:false, output:<DRPlanning/>},
        { name:"dr", show:false, output:<DR/>},
        { name:"draas", show:false, output:<DRaaS/>},
        {name:"managed_backup", show:false, output:<ManagedBackup/>},
        { name:"arcserve", show:false, output:<Arcserve/>}
    


        
    ],
    showBackDrop:false,
    showSideBar:false
}

//testing out compententDidMount for db /http requests later
componentDidMount() {

  axios.get('db.json')
 // axios.get('db-test.json')
  .then(response => {
     console.log(response.data.dropdowns)
    
    const DROPDOWNS = response.data.dropdowns;
     const UPDATED_DROPDOWNS = DROPDOWNS.map(DropDown =>{
         return{
             ...DropDown,
             img: IMAGE_MAP.get(DropDown.page)
         }
     }

     )
      this.setState({
        DROPDOWNS: UPDATED_DROPDOWNS
      });
  });
  


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




     return (  
        <Aux>
              <Navibar dropDowns={this.state.DROPDOWNS} changePageHandler={this.changePageHandler} showBackDrop={this.state.showBackDrop} showSideBar={this.state.showSideBar} toggleBackDropHandler={this.toggleBackDropHandler}/>
            <main className={classes.Layout}>
            {this.state.pages.map( item => {
            if(item.show){
              if(item.solution){
                  /*if(item.output === -1){return <Home allInfo={DROPDOWNS} changePageHandler={this.changePageHandler}/>}
                  else{*/
                  return <SolutionsController key ={item.name} allInfo={this.state.DROPDOWNS} index = {item.output} changePageHandler={this.changePageHandler} />/*}*/
              }
              else{
            return(item.output );}}
            else{return null;}
        }
        )}
            </main>  
            <Footer changePageHandler={this.changePageHandler} dropDowns={this.state.DROPDOWNS}></Footer>
          </Aux>);
          
}
}

export default Layout;