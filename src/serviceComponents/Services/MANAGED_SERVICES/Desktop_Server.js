import React from 'react';
import classes from '../Service.module.css';

const service = (props) => {

return (

    <div className={classes.Service} >
    <h4>Desktop and Server</h4>
    <p>Duologik provides desktop and server and management services to support your end users with their PC 
        and local devices needs, i.e. smartphones, tablets, scanners, and printers. 
        We work with you to understand and choose the best service option that suits your business needs</p>

    <h6>We manage your desktop</h6>  
    <p>Our desktop management services monitor and manage the overall health of each device to protect against
         threats and ensure devices are up to date. We offer on-site or remote support only.</p>  

         <h6>Improve server quality, productivity and performance</h6>  
    <p>Server Management is a fully-managed service designed to take away the pain of managing your server infrastructure, 
        providing you with around-the-clock service, maintenance and support.</p>  
    <p>We focus on optimizing your IT infrastructure and lowering your costs – whether you have dedicated or virtual servers. 
        We provide support for a wide range of servers, including Dell, HP and IBM</p>    

        <h6>Our services include:</h6>  
        <ul>
            <li>Setup and installation</li>
            <li>End-to-end monitoring and reporting</li>
            <li>Incident management</li>
            <li>Configuration management</li>
            <li>Release and deployment management</li>
            <li>Maintenance management</li>
            <li>Access management</li>
        </ul>
         
         <h6>How can the Duologik team help?</h6>
         <p>We align your objectives with recommendations of on an appropriate managed service solution with a proposal 
             that includes implementation details, service flexibility and ongoing responsibilities managing of your desktops 
             and servers through a custom SLA agreement.Please contact us today to speak to a technical representative.</p>
    
    


        </div>

    );
}

export default service;