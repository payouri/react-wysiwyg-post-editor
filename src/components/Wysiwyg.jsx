import {Component} from 'react';
import {} from 'draft-js';

class Editor extends Component {

    constructor(props) {
        
        super(props);
        this.state = {editorState: EditorState.createEmpty()}
        this.onChange = editorState => this.setState({editorState});
    }

    render() {

        return <Editor editorState={this.state.editorState} onChange={this.onChange} />;

    }


}

export default Editor;