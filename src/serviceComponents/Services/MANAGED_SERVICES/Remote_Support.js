import React from 'react';
import classes from '../Service.module.css';

const service = (props) => {

return (

    <div className={classes.Service} >
    <h4>Remote Support</h4>
    <p>Our remote support objective is to resolve incidents quickly with the use of sophisticated industry standard tools and process. 
        Services around the clock ranges from level 1: basic help desk to level 3: advanced support engineers who can help with pressing issues, 
        including problem diagnosis and remediation. Our support is customized depending on your business needs.</p>

    <h6>Support Level Function</h6>  
    <p>Duologik remote support services will first gather information about your request to analyze and troubleshoot in order to find the best 
        solution to fix the problem. Our support staff can handle basic support calls i.e., login troubleshooting, password resets, printer 
        configuration, break fix instructions to hardware that requires fixing or added configuration and more.</p>  
    <p>Our advanced engineering team is able to support and troubleshoot remotely and confirm issues for your server, 
        software installation, network, database, infrastructure, data center, email, and file share and recommend onsite access and resolution.</p>      
         
         <h6>How can the Duologik team help?</h6>
         <p>We align your objectives with recommendations on an appropriate remote support services method with a Statement of Work (SOW) 
             that includes implementation details, service flexibility and ongoing responsibilities to manage basic support calls, 
             fix hardware, and support your system through a custom SLA agreement. Contact us today to speak to a technical representative.</p>
    
    


        </div>

    );
}

export default service;