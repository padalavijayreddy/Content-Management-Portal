import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { problemStatement } from '../../../../CommonModule/i18n/strings';
import { ProblemDescriptionView, ProblemDescriptionLabel, ProblemDescriptionTextarea } from './ProblemDescriptionStyle';
import { EditorBox } from '../EditorBox';

@observer
class ProblemDescription extends React.Component {
    render() {
        const { handleChangeState, selectedMode, onRemoveEditorBox, onChangeEditor } = this.props;
        return (
            <ProblemDescriptionView>
                <ProblemDescriptionLabel>{problemStatement.problemDescription}</ProblemDescriptionLabel>
                <EditorBox selectedMode={selectedMode} handleChangeState={handleChangeState} onRemoveEditorBox={onRemoveEditorBox} onChangeEditor={onChangeEditor} />
            </ProblemDescriptionView>
        );
    }
}

export { ProblemDescription };
