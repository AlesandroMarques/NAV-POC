import React from 'react';
import SolutionsHeader from './SolutionsHeader/SolutionsHeader';
import SolutionsContent from './SolutionsContent/SolutionsContent';
import classes from './SolutionsController.module.css';




         
const testSolutions =(props) =>{
  
   
      
        return (
      
          <div >
          <SolutionsHeader img={props.allInfo.img} header={props.allInfo.nameUp} des={props.allInfo.des}/>
          <SolutionsContent name={props.allInfo.nameUp} dropDownItems={props.allInfo.dropDownItems} clicked={props.changePageHandler} />

          </div>
        );
    
}

export default testSolutions;