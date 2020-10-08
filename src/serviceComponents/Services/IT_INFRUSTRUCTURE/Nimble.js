import React from 'react';
import classes from '../Service.module.css';

const service = (props) => {

return (
    <div className={classes.Service} >
    <h4>Nimble Storage</h4>
    <p>HPE Nimble Storage has set the bar for disrupting, simplifying, and modernizing storage to help customers accelerate 
        their digital transformation. Today the innovation continues. Nimble Storage customers now have an enhanced platform 
        that turbocharges apps, eliminates disruptions, and drives more IT agility.</p>

    <p>Looking to consolidate onto an enterprise-class flash array without compromising performance, 
        scalability, data services, or resiliency? With unmatched versatility, performance, and density, 
        HPE Nimble Storage has you covered. Duologik is an HP Enterprise fully certified and service
         authorized reseller for Nimble technology.</p>
    <h6>HPE Nimble Benefits</h6>
    <p>HPE Nimble Storage delivers the performance advantages of a purpose-built, flash-optimized architecture
         without compromising resiliency, data services, or data mobility. A flash-optimized architecture 
         reduces the performance bottlenecks that can choke hybrid and general-purpose disk arrays. 
         However, unlike other purpose-built flash arrays, HPE 3PAR does not require you to introduce an 
         entirely new architecture into your environment to achieve flash-optimized performance.</p>
    <p>As a result, you don’t have to sacrifice rich, Tier-1 data services, quad-node resiliency, or 
        flexibility to get midrange affordability. A choice of all-flash, converged flash, and tiered-flash 
        models gives you a range of options that support true convergence of block and file protocols, and 
        the use of spinning media to further optimize costs. Duologik offers a all-flash performance of thin 
        technologies including Thin Deduplication and growth without disruption. Support for iSCSI connectivity 
        gives you the flexibility to deploy flash using Ethernet while preserving sub-millisecond latencies.</p>     
    <p>You’ll be up and running in just minutes, meeting mixed workload demands with improved service levels and 
        virtually unlimited scalability options. You’ll spend less time managing your storage with converged block, 
        file, and object access from a single interface. You’ll maintain high availability through a complete set of 
        persistent technologies and have the option of simple and efficient data protection with flat backup to HPE 
        StoreOnce Backup appliances. You’ll rid yourself of trade-offs that have forced you to sacrifice critical 
        capabilities like all-flash performance for scalability and Tier-1 data services.</p>    
        
        <h6>How can Duologik help?</h6>
    <p>Our technical team includes an HP Master storage architect.  Starting with a technical assessment, we can 
        help your decision process with appropriate technology recommendations and action items in a Statement of Work. 
        You can expect an architecture update and priorities, implementation details with priorities, ongoing support 
        and responsibilities, flexible pricing options and ROI.  Please contact us today to speak to a technical representative.</p>
   
        </div>




);

}

export default service;