import React from 'react';
import classes from './Button.module.css';
const Button = (prop)=> {
    return (
        <button className={`${classes.button} ${classes.className}`} 
        type={prop.type || 'button'} 
        onClick={prop.onClick}>{prop.children}</button>
    )
}

export default Button;
