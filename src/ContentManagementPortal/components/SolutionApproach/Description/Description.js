import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { SolutionApproach } from '../../../../CommonModule/i18n/strings';
import { DescriptionView, DescriptionLabel, ProblemDescriptionTextarea } from './DescriptionStyle';
import { EditorBox } from '../EditorBox';

@observer
class Description extends React.Component {
    render() {
        const { handleChangeState, description, selectedMode, onRemoveEditorBox, onChangeEditor } = this.props;
        return (
            <DescriptionView>
                <DescriptionLabel>{SolutionApproach.description}</DescriptionLabel>
                <EditorBox description={description} selectedMode={selectedMode} handleChangeState={handleChangeState} onRemoveEditorBox={onRemoveEditorBox} onChangeEditor={onChangeEditor} />
            </DescriptionView>
        );
    }
}

export { Description };
