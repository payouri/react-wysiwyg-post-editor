import React, { Component } from 'react';
import { Editor } from 'draft-js';

class EditorArea extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className='textarea'>
                <Editor 
                    editorState={this.props.editorState} 
                    onChange={this.props.onChange}
                    spellCheck={true}
                />
            </div>
        );
    }
}
 
export default EditorArea;