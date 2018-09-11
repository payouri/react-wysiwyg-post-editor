import React, {Component} from 'react';
import {Editor, EditorState} from 'draft-js';

class PostEditor extends Component {

    constructor(props) {
        
        super(props);
        this.state = {editorState: EditorState.createEmpty()}
        this.onChange = editorState => this.setState({editorState});
    }

    render() {

        return (
            <>
                <h1>Editeur D'article</h1>
                <Editor editorState={this.state.editorState} onChange={this.onChange} />
            </>
        );

    }


}

export default PostEditor;