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
    render() {
        const { onChangeEditor } = this.props;
        const mystyle = {
            width: "630px",
            height: "100%",
            padding: "10px",
            fontFamily: "Arial",
            border: "1px solid lightgrey"
        };
        return (
            <EditorView>    
                <AceEditor
                    data-testid='Editor'
                    style ={mystyle}
                    mode="java"
                    theme="github"
                    highlightActiveLine={true}
                    onChange={onChangeEditor}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}/>
            </EditorView>
        );
    }
}

export { Editor };
