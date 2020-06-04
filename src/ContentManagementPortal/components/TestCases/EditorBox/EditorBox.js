import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { TestCasesComponent, Header, IsHiddenCheck, Checkbox, IsHidden } from './EditorBoxStyle';
import { Editor } from '../Editor';
import { SaveButton } from '../SaveButton';

@observer
class EditorBox extends React.Component {
    render() {
        const { eachTestcase } = this.props;
        return (
            <TestCasesComponent>
                <Header>INPUT</Header>
                <Editor/>
                <Header>OUTPUT</Header>
                <Editor/>
                <Header>{eachTestcase.id}</Header>
                <Checkbox type="text" placeholder='66'/>
                <IsHiddenCheck>
                    <input type="checkbox"/>
                    <IsHidden>Is Hidden</IsHidden>
                </IsHiddenCheck>
                <SaveButton/>
            </TestCasesComponent>
        );
    }
}

export { EditorBox };
