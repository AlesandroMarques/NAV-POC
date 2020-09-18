import React from 'react';
import classes from '../Service.module.css';
import image1 from '../../../assets/HP-Converged.jpg'
import image2 from '../../../assets/HP-Converged-2.jpg'

const service = (props) => {

return (
    <div className={classes.Service} >
    <h4>Converged Infrastructure</h4>
    <p>You want to deploy applications faster. You want to deliver IT capacity to your business and services to 
        your customers more quickly and easily. And you want a shorter time-to-value for IT investments. 
        Virtualization is a well-understood technology that can help you increase agility, reduce costs, 
        and simplify IT management. But virtualization is not ”just another technology.”</p>
    
    <p>Virtualization impacts your entire organization, but it is complex to plan, deploy, and support. Like 
        many organizations, you may have attempted to overcome complexity through optimization and standardization. 
        But there’s still much work to be done before reaching a state of extreme IT efficiency, in terms of 
        resource utilization, management, and cost.</p>

    <p>Taking efficiency to new heights,  Duologik offers an innovative approach to virtualization. We use the 
        HP Converged Systems for Virtualization. Fully integrated and workload-optimized, the HP Converged 
        Systems for Virtualization are designed to help you harness the full potential of virtualization. 
        The HP Converged Systems for Virtualization include everything you need for a complete virtualization 
        solution—servers, storage, networking, virtualization software, and technology services—making it 
        easy to procure, manage, scale, and support</p>  
        <img
        src={image1}
        width="400"
        height="225"
       alt="React Bootstrap logo"
      />
      <p></p>

<img
        src={image2}
        width="400"
        height="225"
       alt="React Bootstrap logo"
      />

    <h6>How can Duologik help?</h6>
    <p>Starting with a technical assessment, our Statement of Work (SoW) contains appropriate technical 
        recommendations and action items to help your strategic decision.  You can expect an architecture 
        update, implementation details with priorities, ongoing support and responsibilities (through a custom SLA agreement) 
        flexible pricing options and ROI.  Working with your team, we have the capabilities to complete the SoW. 
        Please contact us today to speak to a technical representative.</p>
     
        
    


        </div>




);

}

export default service;