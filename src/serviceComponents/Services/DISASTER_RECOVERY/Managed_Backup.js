import React from 'react';
import classes from '../Service.module.css';

const service = (props) => {

return (
    <div className={classes.Service} >
    <h4>Managed Back-up Services</h4>
    <p>Your data is your business. Whether you’re a small business or a large enterprise you can depend on us to help you recover quickly after an accidental file deletion,
         hardware failure, virus or any other unforeseen event. Take protective measures now to ensure your data is safe.</p>

    <p>Duologik Managed Backup Services provides organizations with back up stability and predictability that you need to protect your most critical asset: information.</p>

    

        <h6>Duologik Solutions offers:</h6>    
        
        <ul className={classes.List}>
            <li>Protective Monitoring and Management:</li>
            <dl>We monitor your business 24×7; create real time incident remediation, and implement end to end insight to back up infrastructure.</dl>
            <li>World Class Expertise:</li>
            <dl>We remedy the events as soon as they occur to reduce any snowball effects, perform root cause analysis to prevent the problem from re-occurring,
                 proactively plan to make sure your environment is always safe, and patch/update your environment as needed.</dl>
            <li>Business Outcomes:</li>
            <dl>SLA are established and enforced to provide piece of mind for your business. We create reports with metrics and insights that showcase your objectives.</dl>
            <li>Rates:</li>
            <dl>Our services are competitively priced, payable on a predictable monthly plan.</dl>

        </ul>

        <h6>Why Choose Duologik Services?</h6>    
        
        <ul className={classes.List}>
            <li>Focus on What Matters</li>
            <dl>Easily offload critical IT functions for your most important applications. Save time and increase productivity by outsourcing the installation,
                 configuration, and management of critical unique applications, such as DR</dl>
            <li>Trust the Experts</li>
            <dl>With deep expertise in infrastructure and application management at a scale for mid-sized to large organizations, our managed services team leads the industry.</dl>
            <li>Increased Security</li>
            <dl>Firewalls and servers are regularly monitored, so the risk from viruses and other threats is dramatically reduced. Servers are patched as needed.</dl>

        </ul>

    
        <h6>How can the Duologik team help?</h6>
        <p>We align your business needs with recommendations to help you decide on an appropriate Managed Services solution.
             Our proposal includes implementation details, service flexibility and ongoing responsibilities to monitor and protect your system, remedy incidents, 
             and implement proper back-up through a custom SLA agreement. Please contact us today to speak to a technical representative.</p>

        

      
        
        </div>




);

}

export default service;