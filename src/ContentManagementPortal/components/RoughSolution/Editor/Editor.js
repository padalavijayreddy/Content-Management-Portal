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

    @action.bound
    onChange(newValue) {
        console.log("change", newValue);
    }

    render() {
        const mystyle = {
            color: "white",
            height: "100%",
            padding: "10px",
            fontFamily: "Arial"
        };
        return (
            <EditorView>    
                <AceEditor
                    style ={mystyle}
                    mode="java"
                    theme="github"
                    onChange={this.onChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}/>
            </EditorView>
        );
    }
}

export { Editor };
