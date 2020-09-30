import React from 'react';
import classes from './Resource.module.css'



const resource = (props) => {
/*<button onClick={() => props.openWindow(props.pdf)}>{props.buttonName}</button>  */
    return(
        <div className={classes.Resource}>
            <h4>{props.header}</h4>
             <h5>{props.title}</h5>
             <img
        src={props.img}
        width="200"
        height="258"
       alt="Case Study Img"
      />
                <p>{props.info}</p>
                <button onClick={() => props.openWindow(props.pdf)}>{props.buttonName}</button>
        </div>

    );
} 

export default resource;