import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { RoughSolutionComponent } from './EditorBoxStyle';
import { Header } from '../Header';
import { Editor } from '../Editor';

@observer
class EditorBox extends React.Component {

    render() {
        const { onRemoveEditorBox, id } = this.props;
        return (
            <RoughSolutionComponent>
                 <Header id={id} onRemoveEditorBox={onRemoveEditorBox} />
                 <Editor/>
            </RoughSolutionComponent>
        );
    }
}

export { EditorBox };
