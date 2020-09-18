import React from 'react';
import classes from '../Service.module.css';
import image from '../../../assets/Networking-Performance.jpg';

const service = (props) => {

return (
    <div className={classes.Service} >
    <h4>Networking</h4>
    <p>With the explosion of employees bringing their own devices to the office, you can see 
        the benefits of implementing wireless and wired networks into your organization. 
        To maintain productivity, it is important for employees to have access to the corporate 
        network by giving them wireless access from their own devices.</p>

    <p>Duologik effectively maintains and monitors your network performance, checking for 
        security breaches and poor data management practices for both physical and virtual environments.</p>    

    <h6>Enable Employee Devices</h6>    
    <p>Enabling workers to use their own mobile devices cause headaches for the IT department from a security 
        point of view. The threat of malware getting onto the corporate network through a compromised device 
        is a particular issue. If the mobile or tablet is owned by the business, security is easier to control. 
        But, are employee-owned devices protected? The answer is no.</p>
    <h6>Reduce Performance Bottlenecks</h6>
    <p>Enterprise mobility to the convergence of voice, video, data to cloud computing adds to its already 
        heavy workload with the added pressure of balancing cost and performance.  Providing a consistently 
        excellent end-user experience on a myriad of devices, across many different networks, and on applications 
        that are everywhere is the new performance paradigm. Do you know what traffic is running across your network? 
        How do you improve the network performance?</p>

    <h6>Improve Policy and Best Practice</h6>    
    <p>Duologik will implement an automated network improvement process that addresses your highest business priorities 
        and operational risks. Our analytics process will provide you with the information to manage and track improvements 
        across hardware, software, security, and system log data.</p>
        <img
        src={image}
        width="400"
        height="225"
       alt="React Bootstrap logo"
      />    

      <h6>Manage configurations to prevent errors</h6>
    <p>Let Duologik manage your network configuration to save you administration cost, time and prevent configuration errors 
        from a manual process. We can avoid bad or invalid configuration changes before deployment through a variety of 
        services to meet your network performance standards:</p>
    
    <h6>We take control of changes</h6>
    
        <ul>
            <li>Deploy new patches using a change approval process</li>
            <li>Replace the erroneous configuration with the last known good configuration from the archives.</li>
            <li>Schedule automatic network backups of device configurations.</li>
            <li>Ensure configuration changes comply with regulations.</li>
            <li>Ensure fast recovery from configuration change errors.</li>
            <li>Real-time configuration change monitoring to meet security policy requirements.</li>
            <li>Ensure that configurations and changes follow both internal and external policies.</li>
        </ul>
        
        <h6>We ensure your business is compliant within your industry</h6>
    
    <ul>
        <li>Observe a regulatory audit policy to secure sensitive data isn’t compromised.</li>
        <li>Meet compliance measures to establish network security processes for detecting network anomalies, attacks and other vulnerabilities.</li>
        <li>Create compliance reports that demonstrate current security measures.</li>
        <li>Ensure configuration changes comply with regulations.</li>
        <li>Retain log data of your network devices and applications for long periods for audit trails.</li>
    </ul>


    <h6>We automate manual configuration</h6>
    
    <ul>
        <li>Automate manual configuration and reconfiguration of network devices to reduce error and scalability problems</li>
        <li>Apply automation principles and tools to make your networks more cost effective, reliable, and easier to maintain.</li>
    </ul>
    

    <h6>We create audit trails</h6>
    
    <ul>
        <li>Automate network deployments, handle large and complex topologies, and comply with design requirements and best practices.</li>
        <li>Comply with regulatory policies, corporate IT methodologies, and technology best practices.</li>
    </ul>

    <h6>We improve your network visibility</h6>
    
    <ul>
        <li>End-to-end visibility of users, nodes, virtual servers, and endpoints.</li>
        <li>Make rapid decisions in real time before threats affect the entire infrastructure.</li>
        <li>Regularly monitor the network for new devices attempting to connect to corporate resources.</li>
        <li>Identify device usage patterns to improve network performance and eliminate underutilized devices and systems that expand the attack surface for hackers and criminals.</li>
        <li>Reduce the need for multi security devices.</li>
        <li>We use a visibility fabric approach that boosts response times by allowing network teams to access and modify network traffic with greater flexibility.</li>
        <li>Fabric visibility helps organizations fully leverage existing investments and improve interconnectedness so that network analysts can respond with agility to multiple issues.</li>
        <li>We ensure network uptime, reduce unplanned configuration changes and improve network security.</li>
    </ul>

        <h6>How can Duologik help you?</h6>
         <p>Starting with a technical assessment, our Statement of Work (SoW) contains appropriate technical 
             recommendations and action items to help your strategic decision.  You can expect an architecture 
             update, implementation details with priorities, ongoing support and responsibilities, flexible pricing 
             options and ROI. Please contact us today to speak to a technical representative.</p>
        
        </div>




);

}

export default service;