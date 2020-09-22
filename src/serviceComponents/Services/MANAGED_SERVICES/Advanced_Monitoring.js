import React from 'react';
import classes from '../Service.module.css';

const service = (props) => {

return (

    <div className={classes.Service} >
    <h4>Advanced Monitoring</h4>
    <p>Duologik Advanced Monitoring service tracks the leading indicators in your infrastructure such as: device CPU utilization, 
        capacity and memory utilization, including device and server availability. You can rest assured if an issue arises, 
        you will get the notifications you need to effectively maintain your IT performance.</p>

    <p>Duologik’s advanced monitoring services observe your most critical servers to maintain their health and performance. 
        Our key metrics ensure optimized performance for CPU, disk, memory and network utilization.  Network problems are 
        identified from interface statistics through devices and servers.  Our team uses advanced network monitoring software 
        to monitor fault and availability, to aid in detection, diagnosis, and resolution of your network performance.</p>    

    <h6>Duologik Advanced Monitoring Services – Key Benefits</h6>  
    <p>Our Automatic IP network services help maintain accurate and up-to-date IP inventory. Network routing monitors and alerts on large,
         complex network routes, including support for major routing protocols. Interface monitors traffic, performance, network interface
          statistics, and analysis to identify the cause of a slow network.Wireless network monitoring retrieves performance metrics for 
          access points and wireless controllers, wireless clients authentication and attacks. Virtualization monitor and report on key 
          metrics of physical host servers and hypervisors, the virtual machine monitors and the applications running inside the VMs. 
          Monitor hardware health, alert and report on key device metrics, including temperature, fan speed, and power supply status, disk and array status.</p>  
          
         
         <h6>How can the Duologik team help?</h6>
         <p>We offer monitoring as part of our managed services through a custom SLA agreement and flexible pricing options. 
             Please contact us to speak with a technical representative.</p>
    
    


        </div>

    );
}

export default service;