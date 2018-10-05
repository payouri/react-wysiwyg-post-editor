import React from 'react';
import Button from './Button';


const ButtonModal = props => (

    <Button
        className={`modal-close ${props.size}`}
        label='close'
        onClick={props.onClick}>
    </Button>

)

ButtonModal.defaultProps = {
    size: 'is-large'
}
export default ButtonModal;