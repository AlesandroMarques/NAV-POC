import React from 'react';
import classes from '../Service.module.css';
import image from '../../../assets/backup.jpg'


const service = (props) => {

return (
    <div className={classes.Service} >
    <h4>Cloud Backup</h4>
    <p>Organizations have traditionally implemented proper Disaster Recovery (DR) practice by writing backups 
        to tape and shipping them offsite.  This is a costly and complex system owing to hardware and personnel requirements. 
        Duologik’s Cloud backup system eliminates these requirements ensuring backups are secure and up-to-date.</p>
    <h6>Tape-Based Backup System</h6>

    <p>Traditional tape-based IT back-up systems requires offsite storage capabilities in case of a disaster or data loss 
        and the best in-house tape backup software and support infrastructure. When restoring data, the tapes are shipped 
        from an offsite location taking a considerable amount of time to load at the office.</p>  


     <h6>Benefits of Cloud Backup</h6>  
     <p>With the Cloud-based backup system, files are stored in the Cloud and customers benefit from low operational 
         expenses and elasticity in capacity.  Its geographic distribution, fast network and skilled personnel ensures 
         minimal or no loss of data availability and the ability to retrieve data from anywhere on the Internet should a disaster happen.</p> 
        <img
        src={image}
        width="300"
        height="293"
       alt="React Bootstrap logo"
      />
      <h6>Duologik Cloud Backup Infrastructure</h6>
      <p>Duologik’s Cloud backup simplifies your IT infrastructure.  It is highly competitive offering complete security and encryption, 
          higher performance, constant backup accessibility, and unlimited scalability.  Customers also benefit from a right combination 
          of parallelism and compression capabilities when transmitting backups over slower networks thereby attaining high speed, making 
          it a compelling alternative to traditional backup systems.</p>

          <h6>Back Up Managed Services</h6>
      <p>Backups stored in Duologik’s Cloud are always accessible using standard tools that make restoration faster and downtime shorter. 
          We keep multiple redundant copies of data, making it inherently reliable. Customers do not have to worry about provisioning local 
          storage to hold the required backup data. furthermore, our technical specialists can manage and monitor your back up process and 
          restore systems and data files when necessary.  You only pay for what you use.</p>   


    <h6>How can Duologik help?</h6>
    <p>We align your objectives with recommendations on an appropriate cloud backup solution in a Statement of Work (SOW) with implementation details, 
        service flexibility and ongoing responsibilities to migrate and secure your data to the cloud and keep redundancy and reliability through 
        a custom SLA agreement and flexible pricing options. Please contact us today to speak to a technical representative.</p>
     
        
    


        </div>




);

}

export default service;