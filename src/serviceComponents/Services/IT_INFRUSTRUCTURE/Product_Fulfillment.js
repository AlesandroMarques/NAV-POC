import React from 'react';
import classes from '../Service.module.css';

const prodfill = (props) => {

return (
    <div className={classes.Service} >
    <h4>Product Fullfillment</h4>
    <p>Duologik’s IT procurement services enable customers to source, warehouse, configure, test 
        and ship hardware and software nationally.  We work with your budget to meet the 
        specification, brand quality and delivery schedules for successful project deployments. 
        Our team negotiates directly with vendors for the best possible pricesand terms to address 
        your unique IT demands and we help you manage cash flow with convenient credit terms or leasing options</p>
    
    
    <h6>Mastering Procurements</h6>
    <p>Customers benefit for our extensive procurement experience and investments in our logistics. 
         We adopt a structured approach to effectively serve your procurement requirements with:</p>
        <ul className={classes.List}>
            <li>Flexible Pricing:</li>
            <dl>Duologik professional IT procurement team helps to simplify your procurement strategy.
                Our familiarity with vendor’s product offering, operational and pricing policies well 
                position us to negotiate and recommend the best transaction for you.  
                Our flexible pricing policy is based on a flat price or cost plus a 
                negotiated margin designed for volume purchases and long term agreements.</dl>
            <li>Customer Service:</li>
            <dl>Our technical and procurement team work hard to build trust and a long lasting relationship
                 with our customers.  Their collaborative effort ensure complicated  technology purchases 
                 are compatible with your current installed systems, helping you deliver successful projects 
                 with quality products and services on schedule  and within budget</dl>
            <li>Procurement Framework:</li>
            <dl>Customers are provided with better visibility in the IT supply chain upstream activities. 
                Understanding your environment we conduct technical research to recommend and source products 
                correctly and work with vendors to bring you modern knowledge, product guidance and technology 
                roadmap for better purchasing decisions.  Further enhanced with our technical advice, assessment, 
                Statement of Work, Bill of material, logistics and vendor contract negotiation.</dl>
            <li>Logistic Services:</li>
            <dl>Our logistic services include transportation, warehousing, equipment staging and testing 
                benchmarked against various standards, proof of concept, image management 
                and green disposal of obsolete equipment.</dl>
        </ul>
        
        <h6>Product Fullfillment</h6>
        <p>Whether you are looking to acquire or dispose of your IT equipment, Duologik IT Procurement 
            Services can help you in the most cost-effective manner. Our product offering include:</p>
        <ul>
            <li>Server, Storage and Networking Solutions</li>
            <li>Desktop, Notebook and Peripherals</li>
            <li>Cloud Services:
                <ul>
                    <li>Infrastructure as a Service (IaaS)</li>
                    <li>Software as a Service (SaaS)</li>
                    <li>Disaster Recovery as a Service (DraaS)</li>
                </ul>
            </li>
        </ul>

        <h6>Asset Disposal</h6>
        <p>Duologik’s asset disposal services ensure data security, regulatory compliance, and best
             practices for greening IT.  Our product offering include:</p>
        <ul>
            <li>Recycling</li>
            <li>Certificates of Destruction</li>
            <li>Consignment & Selling</li>
        </ul>



        <h6>Financing</h6>
    <p>Duologik financing options enable companies to purchase much needed IT infrastructure for better 
        productivity while retaining their cash for working capital. Our finance department will work 
        directly with your organization to determine your best option. Key benefits include:</p>
        <ul className={classes.List}>
            <li>Convenience</li>
            <dl>Let our team work directly with the manufacturer and handle all of the paper work.</dl>
            <li>Cost Savings</li>
            <dl>We work directly with various manufactures and financial institutions to ensure a more competitive rate.</dl>
            <li>Budget Constraints</li>
            <dl>We allow product acquisition to fit into tight budgets and negotiate with vendors on balance sheet constraints.</dl>
            <li>Flexible</li>
            <dl>Our leases can include equipment, software, maintenance, and services</dl>
        </ul>

        <h6>Type of Lease/Rentals:  </h6>
        <ul className={classes.List}>
            <li>Operational</li>
            <dl>Equipment options at the end of the term are: return equipment – upgrades allowed mid-lease,
                 continue to finance or purchase at fair market value</dl>
            <li>Capital Leases</li>
            <dl>Certain criteria would allow the lease to be a balance sheet item.</dl>
            <li>Rentals</li>
            <dl>A cost-effective means to solve short-term equipment needs such as:  providing a custom duplicated test environment
         for software migrations and proof of concept projects, boost seasonal capacity computing power and disaster recovery preparedness.</dl>
        </ul>


        <h6>How can Duologik help you?</h6>
         <p>Starting with a technical assessment, we can help your decision process with appropriate technology recommendations
              and action items in a Statement of Work.  You can expect an architecture update and priorities, implementation
               details with priorities, ongoing support and responsibilities, flexible pricing options and ROI. 
               Please contact us today to speak with a representative.</p>
        
        </div>




);

}

export default prodfill;