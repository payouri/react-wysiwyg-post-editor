import React from 'react';

const Button = props => (

    <button
        aria-label={props.label}
        className={`${props.className} ${props.size}`}
        data-action={props.action}
        disabled={props.disabled} 
        onClick={props.onClick}
    >{props.children}</button>

);

Button.defaultProps = {
    className: 'button',
    disabled: false,
    label: '',
    onClick: () => console.log('button clicked'),
    size: 'is-large'
}

export default Button;