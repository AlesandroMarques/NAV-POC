import React from 'react';
import classes from './footerBannerColour.module.css';
import ciscoImg from '../../../assets/Banner/cisco.png';
import vmwareImg from '../../../assets/Banner/wmware.png';
import hpImg from '../../../assets/Banner/hp.png';
import hpeImg from '../../../assets/Banner/hpe.png';
import msImg from '../../../assets/Banner/microsoft.png';
import rsaImg from '../../../assets/Banner/RSA.png';
import arcImg from '../../../assets/Banner/arcserve.png';
import veeamImg from '../../../assets/Banner/veeam.png';
import arubaImg from '../../../assets/Banner/aruba.png';
const footerBanner = (props) =>{


  return(

    <div className={classes.FooterBanner}>
           <div > <h4>OUR PARTNERS</h4></div>
           <div >
           <a href="https://www.cisco.com/" target="_blank"><img
   src={ciscoImg}
   width="105"
   height="45"
  alt="cisco"
 /></a>
 <a href="https://www.vmware.com/ca.html" target="_blank"><img
   src={vmwareImg}
   width="115"
   height="20"
  alt="cisco"
 /></a>
  <a href="https://www.veeam.com/" target="_blank"><img
   src={veeamImg}
   width="105"
   height="20"
  alt="cisco"
 /></a>
  <a href="https://www.arubanetworks.com/" target="_blank"> <img
   src={arubaImg}
   width="105"
   height="30"
  alt="cisco"
 /></a>
 
 <a href="https://www8.hp.com/ca/en/home.html" target="_blank"> <img
   src={hpImg}
   width="50"
   height="50"
  alt="cisco"
 /></a>
  <a href="https://www.microsoft.com/en-ca" target="_blank"> <img
   src={msImg}
   width="115"
   height="25"
  alt="cisco"
 /></a>
  <a href="https://www.rsa.com/" target="_blank"> <img
   src={rsaImg}
   width="100"
   height="35"
  alt="cisco"
 /></a>
 <a href="https://www.arcserve.com/" target="_blank"><img
   src={arcImg}
   width="115"
   height="15"
  alt="cisco"
 /></a>
<a href="https://www.hpe.com/ca/en/home.html" target="_blank"> <img
   src={hpeImg}
   width="115"
   height="45"
  alt="cisco"
 /></a>


           </div>
</div>

);
}

export default footerBanner;