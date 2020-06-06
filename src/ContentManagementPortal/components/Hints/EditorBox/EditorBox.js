import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { TestCasesComponent, Header, IsHiddenCheck, Checkbox, IsHidden } from './EditorBoxStyle';
import { Editor } from '../Editor';
import { SaveButton } from '../SaveButton';

@observer
class EditorBox extends React.Component {

    @observable title = '';

    saveTheHints = () => {
        console.log("save");
        this.title = '';
    }

    onChangeTitleValue = (event) => {
        const { onChangeTitle, id } = this.props;
        this.title = event.target.value;
        onChangeTitle(this.title, id);
    }

    render() {
        const { eachHint, onChangeDescription } = this.props;
        return (
            <TestCasesComponent>
                <Header>Title</Header>
                <input onChange={this.onChangeTitleValue} value={this.title} id={eachHint.id} />
                <Header>Description</Header>
                <Editor onChangeDescription={onChangeDescription} id={eachHint.id} />
                <SaveButton saveTheHints={this.saveTheHints}/>
            </TestCasesComponent>
        );
    }
}

export { EditorBox };
