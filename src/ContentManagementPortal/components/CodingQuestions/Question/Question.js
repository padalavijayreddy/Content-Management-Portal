import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

@observer
class Question extends React.Component {
    render() {
        const { questionItem } = this.props;
        return (
            <div>
                {questionItem.id}
                {questionItem.questions}
                {(questionItem.roughSolution)?'true':'false'}
                {(questionItem.testCases)?'true':'false'}
                {(questionItem.prefilledCode)?'true':'false'}
                {(questionItem.cleanSolution)?'true':'false'}
                {(questionItem.solutionApproach)?'true':'false'}
            </div>
        );
    }
}

export { Question };
