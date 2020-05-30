import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { RoughSolutionComponent } from './EditorBoxStyle';
import { Header } from '../Header';
import { Editor } from '../Editor';

@observer
class EditorBox extends React.Component {
    render() {
        const { onRemoveEditorBox, selectedMode, handleChangeState, onChangeEditor } = this.props;
        return (
            <RoughSolutionComponent>
                 <Header selectedMod={selectedMode} handleChangeState={handleChangeState} onRemoveEditorBox={onRemoveEditorBox} />
                 <Editor onChangeEditor={onChangeEditor}/>
            </RoughSolutionComponent>
        );
    }
}

export { EditorBox };
