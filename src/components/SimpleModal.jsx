import React, { Component } from 'react';

import ButtonCloseModal from './ButtonCloseModal';

class SimpleModal extends Component {
    constructor(props) {
        super(props);
        this.modalView = React.createRef();
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal() {
        const modal = this.modalView.current;

        if(modal.classList.contains('is-active')) {
            modal.classList.toggle('is-active', false)
        }else {
            modal.classList.toggle('is-active', true)
        }
    }

    render() { 
        return ( 
           
            <div ref={this.modalView} className={`${this.props.className}${this.props.active ? ' is-active' : ''}`}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    {this.props.children}
                </div>
                <ButtonCloseModal onClick={this.toggleModal}></ButtonCloseModal>            
            </div>

        )
    }
}

SimpleModal.defaultProps = {
    active: false,
    className:'modal',

}

export default SimpleModal;