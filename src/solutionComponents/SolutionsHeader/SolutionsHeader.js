import React from 'react';

import {Image} from 'react-bootstrap';
import classes from './SolutionsHeader.module.css'


const testSolutions =(props) =>{

   
      
        return (
         
            <div className={classes.Solution}>
                <Image className={classes.backgroundImage} responsive 
                    
                  src={props.img}>
                </Image>
                <h1 >{props.header}</h1>
                <h4 >{props.des}</h4>
            </div>
            

            
        );
    
}

export default testSolutions;