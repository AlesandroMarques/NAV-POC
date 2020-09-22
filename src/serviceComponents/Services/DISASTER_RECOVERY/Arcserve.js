import React from 'react';
import classes from '../Service.module.css';
import image1 from '../../../assets/Arcserve/Arcserve-1.png';
import image2 from '../../../assets/Arcserve/Arcserve-2.png';
import image3 from '../../../assets/Arcserve/Arcserve-3.png';
import image4 from '../../../assets/Arcserve/Arcserve-4.png';

import Video from '../../Videos/ArcServe_Video'


const service = (props) => {

return (
    <div className={classes.Service} >
    <h4>Arcserve Products and Services</h4>

    <h5>Unified Data Protection</h5>
    <h6 style={{color:"black"}}>Reliable, all-in-one disaster recovery and backup for cloud, virtual and physical workloads.</h6>
    <p>Arcserve Unified Data Protection (UDP) combines enterprise-ready technologies into an all-in-one solution that 
        delivers every data protection capability businesses need, without the complexity of traditional enterprise solutions. 
        Powered by heterogeneous, image based technology that protects to and from any target, it eliminates the need for discrete products.</p>
    
        <img
        src={image1}
        width="500"
        height="395"
       alt="AS 1"
      />


    <h5>Arcserve Appliances</h5>    
    <h6 style={{color:"black"}}>Turnkey disaster recovery and backup combing enterprise-grade software with industrial-strength hardware, protected by Sophos</h6>
    <p>Arcserve Appliances enable businesses to deploy a cost-effective, all-in-one data protection strategy in 15 minutes, flat. 
        Powered by award-winning Arcserve UDP software, this turnkey solution bundles robust server processing, flash-accelerated deduplicated storage,
         and high-speed networking with highly redundant hardware and cloud services for a true plug-and-play solution. Fully integrated onsite 
         and offsite disaster recovery, backup, and optional high availability remove the complexity of orchestrating a cohesive data protection strategy.</p>

         <img
        src={image2}
        width="733"
        height="300"
       alt="AS 1"
      />

    <h5>Unified Replication and High Availability</h5>    
    <h6 style={{color:"black"}}>Continuous data protection to ensure vital systems and applications remain operational.</h6> 
    <p>Arcserve Replication and High Availability (RHA) ensures business continuity for applications and systems with proven technologies that have one common purpose: 
        to keep the business up and running, and operational. Confidently deliver on the most stringent SLAs with asynchronous technologies that eliminate the need 
        for discrete replication programs focused on specific applications and systems. Arcserve Replication and High Availability synchronizes the data on Windows 
        and Linux systems with a second physical or virtual system provisioned locally, at a remote location, or in the cloud. Once synchronized, byte-level changes 
        are continuously replicated from the production system to the replica system, providing constant protection to keep data and information accurate, and systems operational</p>

    
    
    <Video></Video>
    <p></p>

    <h5>Unified Data Protection Archiving</h5>
    <h6 style={{color:"black"}}>Purpose-built email archiving solution for regulatory compliance.</h6>
    <p>Arcserve UDP Archiving is a purpose-built email archiving solution that makes it easy to comply with stringent legal and regulatory requirements,
         delivering robust capabilities on- and offsite, as well as across multiple tenants and languages. Businesses eliminate the cost and hassle of 
         traditional archiving solutions and leverage robust capabilities not found in native solutions, including Office 365, at a lower cost.</p>

         <img
        src={image3}
        width="641"
        height="300"
       alt="AS 1"
      />

    <h5>Arcserve Backup</h5>
    <h6 style={{color:"black"}}>Battle-tested backup to tape, disk and cloud storage.</h6>
    <p>Arcserve Backup is a comprehensive storage management solution designed with unique technologies that improve the economies of data protection by enabling longer 
        retention periods, reducing storage, and integrating powerful deduplication into existing backup environments. Its highly-scalable architecture, central database
         and distributed member servers let IT teams manage very large environments with ease, with full control and visibility from one management console – whether 
         supporting small- or large-scale enterprise environments across different platforms and organizations.</p>


         <img
        src={image4}
        width="500"
        height="395"
       alt="AS 1"
      />
        </div>




);

}

export default service;