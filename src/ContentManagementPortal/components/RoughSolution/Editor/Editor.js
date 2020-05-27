import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace-builds";
import "react-ace-builds/webpack-resolver-min";
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

@observer
class Editor extends React.Component {

    @action.bound
    onChange(newValue) {
        console.log("change", newValue);
    }

    render() {
        return (
            <div>    
                <AceEditor
                    mode="java"
                    theme="github"
                    onChange={this.onChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}/>
            </div>
        );
    }
}

export { Editor };
