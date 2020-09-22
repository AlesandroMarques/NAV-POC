import React from 'react';
import classes from '../Service.module.css';

const service = (props) => {

return (

    <div className={classes.Service} >
    <h4>Protect</h4>
    <p>Network security is a top priority for any organization in today’s uncertain IT environment. Threats to your system and data can severely 
        impede business innovation, limit productivity and damage compliance efforts. Duologik’s network security services provide organizations 
        preemptive threat measures, protect your operating environment, and monitor suspicious activity.</p>

    <h6>PCI-DSS PREPARATION</h6>  
    <p>Organizations which store, process or transmit cardholder data are subject to complying with Payment Card Industry Data Security Standard (PCI-DSS). 
        This standard was developed by major card brands such as Visa, MasterCard and American Express with the primary goal of consolidating their 
        requirements on how to protect credit card account data.</p>  
    <p>We have been helping organizations of all sizes and transaction volumes to achieve and maintain their compliance. Some of the key areas we focus on are:</p>      
         
         <ul>
             <li>High-level control review and assistance with remediation</li>
             <li>Full PCI-DSS Gap Analysis</li>
             <li>Assistance with completion of the Self-Assessment Questionnaire</li>
             <li>Customized Security Awareness training</li>
             <li>Hardening of operating system, firewalls, routers and switches against major standards such as CSI-Benchmark or NIST</li>
         </ul>

     <h6>ISO RISK ASSESSMENTS (27001, 27005)</h6>    
     <p>Our experts can provide vulnerability assessments at the host and application level either remotely or on premise. They are trained
          and certified in Penetration Testing, an important component in achieving PCI compliance and in identifying weaknesses within your environment. 
          An important requirement for merchants to achieve PCI compliance is to undergo a formalized risk assessment on an annual basis using an industry
           accepted standard such as ISO 27001/27005.</p>
    
           <h6>CYBER SECURITY STRENGTHENING</h6>    
     <p>Duologik’s team of trained experts will apply proven techniques to fortify your organization’s security posture by helping you apply defense in depth. 
         We have helped countless organizations become more secure at an economical price.</p>

         <h6>SIEM AND INTRUSION DETECTION</h6>    
     <p>We have a 24×7 Security Operation Centre operated by trained staff that will monitor the security of your computing resources. Your only focus would be on growing
          & sustaining your business. Duologik’s intrusion detections services offer:</p>
          <ul>
              <li>Monitor for intrusions, rootkits and anomalous behavior</li>
              <li>Intrusion detection monitor for changes to critical system files or other suspicious events</li>
          </ul>

          <h6>How can Duologik help you?</h6>
          <p>Starting with a technical assessment, our Statement of Work (SoW) contains appropriate technical recommendations and action items to help your security decision. 
              You can expect an architecture update, implementation details with priorities, ongoing support and responsibilities (through a custom SLA agreement) flexible 
              pricing options and ROI.</p>
          <p>Working with your team, we have the capabilities to implement and maintain the security recommendations. Please contact us today to speak to a technical representative.</p>    
    
    


        </div>

    );
}

export default service;