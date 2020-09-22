import React from 'react';
import classes from '../Service.module.css';
import image from '../../../assets/DraaS.jpg';

const service = (props) => {

return (
    <div className={classes.Service} >
    <h4>Disaster Recovery as a Service</h4>
    <p>Your data is essential to running your business, downtime is not an option. With all the high demands placed on your team, 
        you cannot always prioritize the time, energy and budget required to handle a complete and reliable Disaster Recovery (DR) undertaking.</p>

    <p>Duologik’s DR services protect your systems and data to ensure minimal disruption in the event of a partial or complete site disaster.</p>

    <p>Duologik’s DR services deliver reliability to your critical systems and data without the high costs of traditional methods. 
        Our services do not require you to purchase any licenses or hardware and still permit you to operate your infrastructure.</p>

    <p>We have developed a comprehensive tool customizable for your specific business needs to drastically reduce business Recovery 
        Time Objectives (RTO) while maintaining Recovery Point Objectives (RPO), all in one solutions for a smooth recovery experience.</p>

        <h6>Key Benefits of our DR Services:</h6>    
        
        <ul className={classes.List}>
            <li>Fast:</li>
            <dl>Replication tools that have the capacity to recover your system quickly within minutes so your organization is protected against unforeseen outages.</dl>
            <li>Testable:</li>
            <dl>So simple to test that we make the first test part of your onboarding process.</dl>
            <li>Highly Supported:</li>
            <dl>Dedicated, exceptional support from an engineering team with a customer centric approach.</dl>
            <li>Cost Effective:</li>
            <dl>Cut traditional DR costs in half with a competitive, monthly cost model and the ability to expand your recovery as your business grows. 
                Protect each application individually so you can prioritize what can be recovered first.</dl>
            <li>All in one solution:</li>
            <dl>A single integrated solutions for all your back up, disaster recovery, and data retention needs.</dl>
            <li>Flexible RTO/RPO:</li>
            <dl>Flexible RTO/PRO – recover in minutes</dl>

        </ul>



        <img
        src={image}
        width="691"
        height="325"
       alt="DRaaS"
      />
    
    
    <h6>Your Trusted Disaster Recovery Service Advisor</h6>
    <p>Our clients have chosen us as their trusted partner for secure and scalable solutions to combat aging hardware, tapes-restricted RPO/RTO, 
        and the high costs of co-location services.</p>

    <p>Companies turn to us for our ability to meet aggressive recovery time and point objectives, cutting their DR and backup operating costs. 
        We have broad experience in highly regulated industries such as, healthcare, government, private sector and publicly traded corporations. 
        Our flexible pricing model, proven technologies, and engineering talent set us apart from other approaches.</p>    
    
    
        <h6>How can the Duologik team help?</h6>
        <p>We align your objectives with recommendations on appropriate DR services with a proposal that includes implementation details, 
            service flexibility and ongoing responsibilities to protect your critical systems, meet your RTO/RPO objectives and secure 
            your data through a custom SLA agreement. Please contact us today to speak to a technical representative.</p>

        

      
        
        </div>




);

}

export default service;