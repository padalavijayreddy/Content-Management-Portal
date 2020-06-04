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
        const { onChangeEditor, selectedMode, description } = this.props;
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
                    style ={mystyle}
                    placeholder="Write Solution Description"
                    mode={selectedMode}
                    theme="textmate"
                    name="blah2"
                    data-testid='Editor'
                    onChange={onChangeEditor}
                    fontSize={16}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={description}
                    setOptions={{
                        showLineNumbers: true,
                        tabSize: 2,
                    }}/>
            </EditorView>
        );
    }
}

export { Editor };
