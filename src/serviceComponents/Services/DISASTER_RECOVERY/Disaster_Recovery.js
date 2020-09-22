import React from 'react';
import classes from '../Service.module.css';
import image from '../../../assets/DR.png';

const service = (props) => {

return (
    <div className={classes.Service} >
    <h4>Disaster Recovery</h4>
    <p>What if your critical servers go down today, how long will it take for you to get back online? Do you have the resource to recover your servers quickly? 
        Unexpected disruptions can severely affect your operations, resulting in lost revenue and unhappy customers. Duologik cost-effective Disaster Recovery 
        solution gets you up and running in minutes or hours.</p>
    <p> A DR plan is a vital protecting your operations from an interruption i.e., damaging natural disaster or man-made events, which could lead to lost 
        productivity, revenue loss, and brand equity impact. Duologik’s DR solution enables enterprises to recover a file, system or an entire data 
        center with the most advance comprehensive, automated, local and remote recovery tools and processes available.</p>
    
    
    
    <h6>Are you prepared for a disaster?</h6>
    <p>A recent survey conducted by the DR Preparedness Council shows 73% of survey participants worldwide are failing in terms of disaster readiness, 
        scoring ratings of either D or F grade. The costs of outages remain a major challenge for many organizations, according to the survey results:</p>
    <ul>
        <li>36% of organizations lost one or more critical applications, VMs, or critical data files for hours at a time over the past year.</li>
        <li>One in four respondents said that they had lost most or all of a datacenter for hours or even days!</li>
        <li>Reported losses from outages ranged from a few thousand dollars to millions of dollars with nearly 20% indicating losses of more than $50,000 to over $5 million.</li>
        <li>More than 60% of those who took the survey do not have a fully documented DR plan and another 40% admitted that the DR plan they currently have did not prove very useful.</li>
    </ul>

    <img
        src={image}
        width="375"
        height="320"
       alt="DR Logo"
      />
        <h6>We will keep your business protected</h6>
        <p>Our engineering team performs timely test on your critical applications to determine the robustness of your preparedness in case of a disaster. 
            We offer organizations fully encripted disk based back up and archiving solutions, server replication, restoration, audits and consulting.
             Our facilities are located in Canada and audited by SSAE 16 Type II certifited ISO 20000 1 Standards.</p>

         <h6>Want to work with us? </h6>    
        
        <ul className={classes.List}>
            <li>Remote Backup Storage Services:</li>
            <dl>We can replicate your data to our state of the art data center to protect your business in case of a disruption.</dl>
            <li>Managed DR:</li>
            <dl>We will work with you to plan, implement, maintain, and test your DR solution. Duologik assumes full responsibility
                 for managing your complete recovery lifecycle</dl>
            <li>Hardware/Software:</li>
            <dl>We will provide the right hardware and software solutions for your organization’s needs.</dl>
            <li>Compliance with Security Practices:</li>
            <dl>PCI, HIPAA, FISMA, PIPEDA, ISO, Internal Audit Committee and External Audits.</dl>
        </ul>


        <h6>How can Duologik team help?</h6>
        
        <p>We align your business needs with recommendations to help you decide on an appropriate disaster recovery solution. 
            Our proposal includes implementation details, service flexibility, timely testing and ongoing responsibilities 
            to recover a file, system, or an entire data center through a custom SLA agreement. Please contact us today to speak to a technical representative.</p>

      
        
        </div>




);

}

export default service;