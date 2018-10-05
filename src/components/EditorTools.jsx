import React, { Component } from 'react';
import { RichUtils } from 'draft-js';

import SimpleModal from './SimpleModal';
import ButtonIcon from './ButtonIcon';
import { faSave, faBold, faItalic, faUnderline } from '@fortawesome/free-solid-svg-icons';
import LinkDropdown from './LinkDropdown';

class EditorTools extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.onToolClick = this.onToolClick.bind(this);
    }
    onLinkClick() {

    }
    onToolClick(e) {
        
        const action = e.target.getAttribute('data-action');
        let {editorState, onChange} = this.props;
        onChange(RichUtils.toggleInlineStyle(editorState, action.toUpperCase()));
        
    }
    render() { 
        return (
            <>
                <div className="navbar">
                    <div className="navbar-menu is-active">
                        <div className="navbar-item">
                            <LinkDropdown
                                editorState={this.props.editorState}
                                onChange={this.props.onChange}                                
                            />
                        </div>
                        <div className="navbar-item">
                            <div className="buttons">
                                <ButtonIcon action='bold' icon={faBold} onClick={this.onToolClick}/>
                                <ButtonIcon action='italic' icon={faItalic} onClick={this.onToolClick}/>
                                <ButtonIcon action='underline' icon={faUnderline} onClick={this.onToolClick}/>
                                <ButtonIcon action='save' icon={faSave}/>
                            </div>
                        </div>
                    </div>
                </div>
                <SimpleModal/>
            </>
        );
    }
}
 
export default EditorTools;