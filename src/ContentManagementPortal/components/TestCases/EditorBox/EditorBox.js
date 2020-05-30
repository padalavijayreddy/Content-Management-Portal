import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { TestCasesComponent, Header } from './EditorBoxStyle';
import { Editor } from '../Editor';

@observer
class EditorBox extends React.Component {
    render() {
        return (
            <TestCasesComponent>
                 <Header>Input</Header>
                 <Editor/>
                 <Header>Output</Header>
                 <Editor/>
                 <Header>Score</Header>
                 <input type="text" placeholder='66'/>
                 <input type="checkbox" />
                 <Header>isHidden</Header>
            </TestCasesComponent>
        );
    }
}

export { EditorBox };
