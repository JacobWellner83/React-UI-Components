import React from 'react';
import './Button.css';

const ButtonWrapper = props => {
    return (
        <div className={``}>
            {props.children}
        </div>
    );
};

export default ButtonWrapper;