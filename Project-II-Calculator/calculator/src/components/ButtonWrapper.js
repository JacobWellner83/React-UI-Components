import React from 'react';
import './Button.css';

const ButtonWrapper = props => {
    return (
        <div className={`button-wrapper ${props.className}`}>
            {props.children}
        </div>
    );
};

export default ButtonWrapper;