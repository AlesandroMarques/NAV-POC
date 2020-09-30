import React from 'react';

import Resource from './Resource/Resource';
import classes from './Resources.module.css';

import O365pdf from '../../../../assets/PDFs/O365-Case-Study.pdf';
import DRAASpdf1 from '../../../../assets/PDFs/DRAAS-Case-Study.pdf';
import DRAASpdf2 from '../../../../assets/PDFs/DRAAS-White-Paper.pdf';
import DRpdf from '../../../../assets/PDFs/DR-Case-Study.pdf';
import VEEAMpdf from '../../../../assets/PDFs/Veeam.pdf';

import O365 from '../../../../assets/PDFs/O365.png';
import Veeam from '../../../../assets/PDFs/Veeam.png';
import DR from '../../../../assets/PDFs/DR.png';
import DRAAScase from '../../../../assets/PDFs/DRAAS-Case.png';
import DRAASwhite from '../../../../assets/PDFs/DRAAS-White.png';

const RESOURCES = [
    {
        header:"ONE PAGER",
        title:"Office 365 Migration and Backup",
        info:"Find out how we can help you bring your Microsoft Office implementation to the cloud.",
        buttonName:"Download One Pager Now",
        pdf: O365pdf,
        img: O365

    },
    {
        header:"CASE STUDY",
        title:"Disaster Recovery as a Service",
        info:"How we helped a company to recover from a declared disaster with quick RPO and RTO times.",
        buttonName:"Download Case Study Now",
        pdf: DRAASpdf1,
        img: DRAAScase

    },
    {
        header:"WHITEPAPER",
        title:"Disaster Recovery for Municipalities",
        info:"Learn how municipalities view Disaster Recovery and how the DRaaS shared service works.",
        buttonName:"Download Whitepaper Now",
        pdf: DRAASpdf2,
        img: DRAASwhite

    },
    {
        header:"CASE STUDY",
        title:"Duologik DR Readiness Assessment",
        info:"This Case Study is based on an actual engagement for which Duologik was contracted by a public sector organization in Southwest Ontario to develop a Disaster Recovery Readiness Assessment.",
        buttonName:"Download Case Study Now",
        pdf: DRpdf,
        img: DR

    },
    {
        header:"PRESENTATION",
        title:"Veeam: Manage All Workloads – Virtual, Physical and Cloud – from a Single Console.",
        info:"- Veeam Availability Suite 9.5 Update 3  - Veeam Agent for Microsoft Windows 2.1  - Veeam Agent for Linux v2",
        buttonName:"Download Presentaion Now",
        pdf: VEEAMpdf,
        img: Veeam

    }

]

const resources = () => {

    const openWindow = (pdf) =>{

        window.open(pdf);
    };

return(
    <div className={classes.Resources}>
        <h3  >Resources</h3>
        {RESOURCES.map( item=> {
            return <Resource header={item.header} title={item.title} info={item.info} buttonName={item.buttonName} pdf={item.pdf} img={item.img} openWindow={openWindow}/>
                 

        })}
    </div>
);

}

export default resources;