import React, { Component } from 'react';
import { RichUtils, Entity, ContentState } from 'draft-js';
import { faLink, faCheck } from '@fortawesome/free-solid-svg-icons';

import MonoDropdown from './MonoDropdown';
import ButtonIcon from './ButtonIcon';

class LinkDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            active: false,
            urlValue: ''
        }
        this.dropDown = React.createRef();
        this.onValidateClick = this.onValidateClick.bind(this);
        this.onTriggerClick = this.onTriggerClick.bind(this);
        this.onInput = this.onInput.bind(this);
        this.onChange = this.onChange.bind(this);
        this.event = null;
    }
    componentDidMount() {
        const dropDown = this.dropDown.current;
        this.event = window.addEventListener('click', e => {
            if(!e.path.includes(dropDown))
                this.setState({active: false});
        }, false)
    }
    componentWillUnmount() {
        window.removeEventListener(this.event, false)
    }
    onInput(e) {
        this.setState({url: e.target.value})
    }
    onChange(e) {
        this.setState({url: e.target.value})
    }
    onTriggerClick() {
        this.setState({active: !this.state.active});
    }
    onValidateClick() {
    }
    render() { 
        return (
            <MonoDropdown 
                active={this.state.active}
                reference={this.dropDown}
                trigger={
                    <ButtonIcon
                        icon={faLink}
                        onClick={this.onTriggerClick}
                    />
                }
                content={
                    <div className="field has-addons">
                        <div className="control">
                            <input 
                                aria-label='url input'
                                className='input'
                                onInput={this.onInput}
                                placeholder='Link Url'
                                type='text'
                                value={this.state.value}
                            ></input>
                        </div>                            
                        <div className="control">
                            <ButtonIcon
                                action='link'
                                icon={faCheck}
                                onClick={this.onValidateClick}
                                size={'is-small'}
                            />
                        </div>
                    </div>
                }
            />
        );
    }
}

export default LinkDropDown;