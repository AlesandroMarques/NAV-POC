import React from 'react';

const footerItem = (props) =>{


    return(
    <p><a href={props.href} onClick={() => props.changePageHandler(props.page)}>{props.name}</a></p>

    );
}

export default footerItem;