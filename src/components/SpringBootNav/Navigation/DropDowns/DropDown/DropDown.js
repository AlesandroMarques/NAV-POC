import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import DropDownItem from './DropDownItem/DropDownItem';


const DropDown = (props) => {

  // expect a title , href and list of dropDownItems {name ,href}

 
  

  return(
    <div>
    <ReactBootStrap.SplitButton variant="light" bg="light"  title={props.title} onClick={() => props.changePageHandler(props.page)} id="collasible-nav-dropdown" href={props.href}>
      {props.dropDownItems.map( item => (
        <DropDownItem href={item.href} name={item.nameUp} page={item.page} changePageHandler={props.changePageHandler}/>
      )
      )}
    </ReactBootStrap.SplitButton>
    </div>);
  
}

export default DropDown;