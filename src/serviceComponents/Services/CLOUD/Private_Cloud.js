import React from 'react';
import classes from '../Service.module.css';

const service = (props) => {

return (
    <div className={classes.Service} >
    <h4>Private Cloud</h4>
    <p>We incorporate proven elastic cloud infrastructure and our decades of managed operations experience 
        delivering a secure, private, custom solution addressing the most demanding businesses challenges.</p>
    
    
    <h5>GDL Private Cloud Solutions</h5>
    <h6>Exclusive</h6>
    

        <ul className={classes.List}>
            <li>Complete Control</li>
            <dl>Interact with your environment through a single pane of glass,
                 optionally integrating with existing frameworks for added transparency.</dl>
            <li>Secure</li>
            <dl>Single tenant security ensures a private and secure environment for all 
                private resources. No co-mingling of data, no sharing of resources.</dl>
            <li>Custom Workload Management</li>
            <dl>Complete control over how your workload is deployed and managed. Optionally,
                 upload and consume your own OS templates for the ultimate in control over how your apps run in the cloud.</dl>
        </ul>

        <h6>Simple</h6>
        
        <ul className={classes.List}>
            <li>Contain Budgets</li>
            <dl>Remove cost variability of cost and other hidden surprises found in public clouds.
                 Your private cloud environment is easy to budget, predict and scale.</dl>
            <li>Orchestrate</li>
            <dl>Orchestrate, automate your workload with ease. Our open cloud platform easy extends existing processes into your cloud.</dl>
            <li>Hardware Free</li>
            <dl>Stop managing hardware and reduce complexity of your critical applications.
             We completely abstract all hardware elements, delivering predictable consumption of compute, storage, and network resources.</dl>
        </ul>


        <h6>Robust</h6>
        
        <ul className={classes.List}>
            <li>Committed resources</li>
            <dl>Dedicated pool of resources to your unique business needs.</dl>
            <li>Interoperable</li>
            <dl>Easily promote your on premise workloads to the cloud and vice-versa. Our open platform works with common DevOps tool sets.</dl>
            <li>Completely Elastic</li>
            <dl>Consume what you need now, scale on demand for future growth. Our private cloud platform enables additional capacity on demand, when needed</dl>
            <li>Available </li>
            <dl>100% of resources are available and dedicated to your applications.</dl>
        </ul>

      
        
        </div>




);

}

export default service;