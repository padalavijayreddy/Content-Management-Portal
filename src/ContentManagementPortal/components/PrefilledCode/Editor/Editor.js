import React from "react";
import { render } from "react-dom";
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import AceEditor from "react-ace";
import { EditorView } from './EditorStyle';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

@observer
class Editor extends React.Component {
    @observable content;

    componentDidMount() {
        const { editorBox } = this.props;
        console.log("editorBoxInEditor", editorBox);
        if (editorBox) {
            this.content = editorBox.content;
        }
        else {
            this.content = '';
        }
    }

    onChangeEditor = (newValue) => {
        const { onChangeContent, id } = this.props;
        onChangeContent(newValue, id);
    }

    render() {
        const {id, mode } = this.props;
        const mystyle = {
            color: "black",
            width: "100%",
            height: "100%",
            padding: "10px",
            fontFamily: "Arial",
        };
        return (
            <EditorView>    
                <AceEditor
                    value={this.content}
                    style ={mystyle}
                    mode={mode}
                    theme="github"
                    onChange={this.onChangeEditor}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}/>
            </EditorView>
        );
    }
}

export { Editor };
