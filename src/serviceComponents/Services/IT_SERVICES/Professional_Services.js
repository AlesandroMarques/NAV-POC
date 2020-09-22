import React from 'react';
import classes from '../Service.module.css';


import ciscoImage from '../../../assets/professional_services/cisco.png';
import citrixImage from '../../../assets/professional_services/citrix.jpg';
import comptiaImage from '../../../assets/professional_services/comptia.png';
import hpeImage from '../../../assets/professional_services/hpe.png';
import microsoftImage from '../../../assets/professional_services/microsoft.jpg';
import wmwareImage from '../../../assets/professional_services/vmware.png';

const service = (props) => {

return (
    <div className={classes.Service} >
    <h4>Professional Services</h4>
    <p>Duologik Infrastructure Consulting Services takes a holistic, adaptive approach that simplifies the IT modernization process. 
        Equally important, we help prepare your people, processes and organization for change. You get more agility, lower costs and 
        greater flexibility to better pursue your business goals.</p>

    <p>Our consulting experts become your technology and strategy partners. We collaborate, help guide, and implement your transition 
        every step of the way, from concept through deployment, training and ongoing support. We’re here to help you build a nimble, 
        cost-effective, scalable IT infrastructure with flexible service options so you can choose the best way to work.</p>    
    
    
  
    <h6>Staff Augmentation</h6>
    <p>Our extensive professional service capabilities help you meet the challenges of managing an IT staff. 
        Our Consultants have the certifications and widespread experience with new and emerging technologies 
        to augment your in-house competencies and ensure your IT projects are deployed on time and on budget.</p>

    <h6>Expertise at Every Step</h6>

        <ul className={classes.List}>
            <li>Consulting Support as you Transform IT</li>
            <dl>Use our IT consulting services and support to architect deploy and optimize your technology 
                assets with total dedication to understanding your business.</dl>
            <li>Help when you need it</li>
            <dl>Leverage our expertise to help your realize the value of your investment more quickly with our deployment and implementation services,
                 from installing a set of new servers, relocating your data center to ongoing assistance to augment your technical staff.</dl>
            <li>Enhancing Operational Efficienciest</li>
            <dl>Virtualization has helped stretch IT resources but can lead to IT inefficiencies.
                 Utilize our services to analyze performance and capacity to improve your virtualized environment.</dl>
            <li>Take a proactive approach to protect your data privacy</li>
            <dl>We bring your organization the necessary infrastructure support to help you protect sensitive data across the entire IT lifecycle.</dl>
            <li>Customize</li>
            <dl>With end-to-end services, we’re able to leverage our industry-specific expertise to fit a custom solution for your current environment.</dl>          
        </ul>

        <h6>Our Certifications:</h6>
        
        
        <img
        src={ciscoImage}
        width="160"
        height="80"
       alt="Cisco"
      />
        <ul >
            <li>CCIE – Data Center</li>
            <li>Cisco Unified Communications Certified</li>
        </ul>

        <img
        src={citrixImage}
        width="160"
        height="60"
       alt="Citrix"
      />
        <ul >
            <li>CCAA: Citrix Certified Advanced Administrator in XenApp</li>
            <li>CCA: Citrix Certified Administrator in XenApp</li>
        </ul>

        <img
        src={comptiaImage}
        width="180"
        height="40"
       alt="CompTia"
      />
        <ul >
            <li>CompTIA A</li>
            <li>CompTIA Network</li>
        </ul>

        <img
        src={hpeImage}
        width="250"
        height="100"
       alt="HPE"
      />
        <ul >
            <li>Support Service Level I</li>
            <li>Support Service Level II</li>
            <li>Master Accredited Solutions Expert Storage Solutions Architect</li>
            <li>Accredited Systems Engineer StorageWorks Integration</li>
            <li>HP Enterprise Group Delivery Authorization</li>
            <li>HP ServiceOne Expert</li>
            <li>HP ServiceOne Delivery</li>
            <li>HP Master ASE – Storage Solutions Architect</li>
            <li>HP ASE – StorageWorks Integration</li>
            <li>HP ASP Enterprise Solutions</li>
            <li>HP APP Enterprise Solutions</li>
        </ul>

        <img
        src={microsoftImage}
        width="250"
        height="100"
       alt="Microsoft"
      />
        <ul >
            <li>MCSE: Server infrastructure</li>
            <li>MCSE: Private Cloud</li>
            <li>MCITP: Enterprise Administrator on Windows Server</li>
            <li>MCSA: Windows Server</li>
            <li>MCITP: Server Administrator on Windows Server</li>
            <li>MCTS: Server Virtualization with Hyper-V and System Center</li>
            <li>MCTS: Windows Server  Active Directory Configuration</li>
            <li>MCTS: Windows Server Network Infrastructure Configuring</li>
            <li>MCTS: Windows Server  Applications Infrastructure Configuring</li>
        </ul>

        <img
        src={wmwareImage}
        width="220"
        height="40"
       alt="VM Ware"
      />
        <ul >
            <li>VCP5-DCV: VMware Certified Professional</li>
            <li>Data Center Virtualization</li>
            <li>VCP5-DT: Vmware Certified Professional</li>
            <li>VCA-DCV: Vmware Certified Associate – Data Center Virtualization</li>
            <li>VCA-Cloud: Vmware Certified Associate – Cloud</li>
            <li>VCA-W/M: Vmware Certified Associate – Workforce Mobility</li>
            <li>VMware vSphere: Install, Configure, Manage</li>
        </ul>

        


        <h6>How can Duologik help you?</h6>
        <p>Starting with a technical assessment, we can help your decision process with appropriate technology recommendations and action items in a Statement of Work.
            You can expect an architecture update and priorities, implementation details with priorities, ongoing support and responsibilities, flexible pricing options
             and ROI.  Please contact us today to speak with a representative.</p>
        

      
        
        </div>




);

}

export default service;

