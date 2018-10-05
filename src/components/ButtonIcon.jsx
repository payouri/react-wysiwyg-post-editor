import React from 'react';
import Button from './Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const ButtonIcon = props => (

    <Button 
    action={props.action}
    disabled={props.disabled}
    onClick={props.onClick}
    size={props.size} 
    >
        <FontAwesomeIcon icon={props.icon}/>
        {props.children}
    </Button>

)

ButtonIcon.defaultProps = {
    icon: faCoffee
}

export default ButtonIcon;