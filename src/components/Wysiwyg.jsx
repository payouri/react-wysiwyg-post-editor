import React, {Component} from 'react';
import { EditorState} from 'draft-js';
import EditorArea from './EditorArea';
import EditorTools from './EditorTools';

class PostEditor extends Component {

    constructor(props) {
        
        super(props);
        this.state = {editorState: EditorState.createEmpty()}
        this.onAreaChange = this.onAreaChange.bind(this);
    }
    onAreaChange(editorState) {
        this.setState({editorState});
    }

    render() {

        return (
            <>
                <h1>Editeur D'article</h1>
                <EditorTools 
                    editorState={this.state.editorState}
                    onChange={this.onAreaChange}
                />
                <EditorArea 
                    editorState={this.state.editorState} 
                    onChange={this.onAreaChange}
                />
            </>
        );

    }


}

export default PostEditor;