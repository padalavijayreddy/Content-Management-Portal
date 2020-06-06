import React from "react";
import { render } from "react-dom";
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import AceEditor from "react-ace";
import { EditorView } from './OutputEditorStyle';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

@observer
class OutputEditor extends React.Component {

    @observable outputContent;

    componentDidMount() {
        const { editorBox } = this.props;
        console.log("editorBoxInEditor", editorBox);
        if (editorBox) {
            this.outputContent = editorBox.output;
        }
        else {
            this.outputContent = '';
        }
    }

    onChangeEditor = (newValue) => {
        const { onChangeOutputContent, id } = this.props;
        onChangeOutputContent(newValue, id);
    }

    render() {
        const { id, outputValue } = this.props;
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
                    value={this.outputContent}
                    style ={mystyle}
                    placeholder="Write Solution Description"
                    mode="java"
                    theme="textmate"
                    name="blah2"
                    data-testid='Editor'
                    onChange={this.onChangeEditor}
                    fontSize={16}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    setOptions={{
                        showLineNumbers: true,
                        tabSize: 2,
                    }}/>
            </EditorView>
        );
    }
}

export { OutputEditor };
