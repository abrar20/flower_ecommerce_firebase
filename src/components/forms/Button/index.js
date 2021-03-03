import React from 'react'
import './style.scss';

const Button=({children, ...otherProps})=> {
    return (
        <button  {...otherProps}>
            {children}
        </button>
    )
}
export default Button;