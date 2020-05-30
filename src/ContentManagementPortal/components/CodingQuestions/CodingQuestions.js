import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { MCQCodingQuestionListButtons } from './MCQCodingQuestionListButtons';
import { CodingQuestionsView } from './CodingQuestionsStyle';

@observer
class CodingQuestions extends React.Component {
    render() {
        const { AddCodingQuestions, codingQuestionsList } = this.props;
        return (
            <CodingQuestionsView>
                <MCQCodingQuestionListButtons codingQuestions = {codingQuestionsList}/>
                <button onClick={AddCodingQuestions}>Add Coding Questions</button>
            </CodingQuestionsView>
        );
    }
}

export { CodingQuestions };
