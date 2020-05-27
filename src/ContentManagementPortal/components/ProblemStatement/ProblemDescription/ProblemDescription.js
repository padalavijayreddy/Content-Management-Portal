import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { problemStatement } from '../../../../i18n/strings';
import { ProblemDescriptionView, ProblemDescriptionLabel, ProblemDescriptionTextarea } from './ProblemDescriptionStyle';

@observer
class ProblemDescription extends React.Component {
    @observable problemDescription

    @action.bound
    onChangeTextArea(event) {
        this.problemDescription = event.target.value;
    }

    render() {
        return (
            <ProblemDescriptionView>
                <ProblemDescriptionLabel>{problemStatement.problemDescription}</ProblemDescriptionLabel>
                <ProblemDescriptionTextarea value={this.problemDescription} onChange={this.onChangeTextArea} name="message" rows="10" cols="30" placeholder={problemStatement.problemDescriptionPlaceHolder}></ProblemDescriptionTextarea>
            </ProblemDescriptionView>
        );
    }
}

export { ProblemDescription };
