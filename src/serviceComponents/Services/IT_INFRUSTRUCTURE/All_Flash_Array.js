import React from 'react';
import classes from '../Service.module.css';

const service = (props) => {

return (
    <div className={classes.Service} >
    <h4>All Flash Array</h4>
    <p>As the world steams along its path toward a digital economy and businesses transition from datadependent
         to data-driven, the demands placed on storage performance continue to escalate. With performance 
         increasing at less than one-third the rate of capacity, disk technology, the foundation of non-human 
         memory and the workhorse of the datacentre, seems to be headed out to a much-deserved pasture.</p>
    <p>Enter flash, not a new technology by any means, but a relatively new player in the enterprise storage world. 
        The use of hybrid (disk/flash) arrays has grown in the datacentre over the past several years, with their 
        effectiveness in resolving specific performance issues paving the way for the all-flash array. The AFA has 
        been hyped as the future of enterprise storage, but before you go out and scrap your disk arrays for an 
        all-flash solution, a few important considerations and some planning can help you maximize your storage investment over the longer term</p>
    <p>As every IT professional will attest to, the central problem with storage is that the technology has kept up
         with neither client-side improvements nor the data explosion, creating what is essentially a supply and demand
          imbalance – more demand for more data coupled with stagnated delivery capabilities. The result is latency, 
          bottlenecks, boot storms and, ultimately, lowered productivity. Until recently the answer to storage issues 
          was to throw more disks at the problem (more disks that are still focused on capacity vs. performance)</p>    

    <h6>Disk Performance Improvements Mostly</h6>
    <p>Limited to Capacity While there has been significant improvement in disk performance over the past several 
        years (high-performance HDDs can offer as high as 210 IOPS) most of it has been in terms of capacity. 
        All the disk space in the world, though, can’t remedy one fundamental limitation. To work, a disk must 
        rotate and an arm must seek data, creating two unavoidable latency opportunities. The time required for 
        actual data transfer will always be a fraction (a tiny fraction as it were) of the time required for any data operation.</p>
     
        
        <h6>Download the file to read more.</h6>
    


        </div>




);

}

export default service;