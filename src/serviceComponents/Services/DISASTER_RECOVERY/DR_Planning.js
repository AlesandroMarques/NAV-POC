import React from 'react';
import classes from '../Service.module.css';
import image from '../../../assets/DR_Planning.jpg';

const service = (props) => {

return (
    <div className={classes.Service} >
    <h4>Disaster Recovery Planning</h4>
    <p>Our specialists have the capabilities to help you create a DR strategy to keep your systems safe, accessible, recoverable
         and meet compliance obligations.  They will restore your most critical applications in our state of the art data centre
          recovering you from IT outages should a disaster strike.  </p>
    <p>Duologik’s Disaster Recovery (DR) planning session includes aligning people, processes, policies, and technologies. 
        The primary objective is to enable business continuity with as little lost data as possible, within an acceptable time frame.</p>
        <img
        src={image}
        width="375"
        height="375"
       alt="DR Planning Logo"
      />
    
    
    <h6>Meeting your planning objective</h6>
    <p>We have the experience, technologies, process, and engineering talent to help you determine the business applications and critical 
        data required to continue running your business, and to architect even the most complex recovery solution across your offices,
         data centers or cloud with the primary objective of reducing downtime. Furthermore, strict recovery time objectives increases 
         your ability to recover quickly, pushing up costs and impacting your budget.  Our specialist will help you evaluate and decide 
         on a cost effective solution and help you choose the right recovery time and recovery point objectives based on your risk tolerance, 
         budget, and business expectations. Our list of satisfied customers will attest to our ability to provide a reliable DR outcome.</p>
    
    
        <h6>We will keep your business protected</h6>
        <p>Our engineering team performs timely test on your critical applications to determine the robustness of your preparedness in case of a disaster. 
            We offer organizations fully encripted disk based back up and archiving solutions, server replication, restoration, audits and consulting.
             Our facilities are located in Canada and audited by SSAE 16 Type II certifited ISO 20000 1 Standards.</p>

         <h6>Duologik DR planning process</h6>    
        
        <ul className={classes.List}>
            <li>Current State Assessment</li>
            <dl>Our DR specialists will conduct a deep-dive analysis of your current infrastructure, business risk of critical applications and data to calculate the business requirements.</dl>
            <li>Requirements Gathering</li>
            <dl>We collect and document critical applications and availability requirements per business unit and record in a master DR document to be used in the event of a crisis.</dl>
            <li>Initial Disaster Recovery Planning</li>
            <dl>We can create a new, fully customized DR plan or update an existing one if you already have one.</dl>
            <li>Fit Assessment</li>
            <dl>We determine and respond to any gaps between the DR plan and the existing environment.</dl>
            <li>Deployment</li>
            <dl>Once the solution is set up, we then replicate the entire environment into the DR site which may be our data center.</dl>
            <li>Testing and Mitigation</li>
            <dl>We perform timely tests to mitigate recovery risks as part of execution, for a confident recovery in the event of a crisis.</dl>

        </ul>


        <h6>How can Duologik team help?</h6>
        
        <p>We align our solutions with your business needs to accommodate your disaster recovery plan requirements from a technical perspective. 
            Starting with a technical assessment, our report contains appropriate technical recommendations and action items to help your DR decision.</p>

            <p>You can expect, implementation details with priorities, ongoing support and responsibilities and flexible pricing options.  Please contact us today to speak to a technical representative.</p>

      
        
        </div>




);

}

export default service;