import React from 'react';
import SolutionsHeader from './SolutionsHeader/SolutionsHeader';
import SolutionsContent from './SolutionsContent/SolutionsContent';
//import classes from './SolutionsController.module.css';




         
const testSolutions =(props) =>{
          const AllInfo= props.allInfo[props.index];
      
        return (
      
          <div >
          <SolutionsHeader img={AllInfo.img} header={AllInfo.nameUp} des={AllInfo.des}/>
          <SolutionsContent name={AllInfo.nameUp} dropDownItems={AllInfo.dropDownItems} clicked={props.changePageHandler} />

          </div>
        );
    
}

export default testSolutions;