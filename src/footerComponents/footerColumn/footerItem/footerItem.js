import React from 'react';

const footerItem = (props) =>{


    return(
    <p href={props.href} onClick={() => props.changePageHandler(props.page)}>{props.name}</p>

    );
}

export default footerItem;