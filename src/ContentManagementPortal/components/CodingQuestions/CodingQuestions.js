import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { MCQCodingQuestionListButtons } from './MCQCodingQuestionListButtons';
import { CodingQuestionsView } from './CodingQuestionsStyle';

@observer
class CodingQuestions extends React.Component {
    render() {
        const { addCodingQuestion, onChangeSearchText, codingQuestionsList } = this.props;
        return (
            <CodingQuestionsView>
                <MCQCodingQuestionListButtons onChangeSearchText={onChangeSearchText} addCodingQuestion={addCodingQuestion} codingQuestions = {codingQuestionsList}/>
            </CodingQuestionsView>
        );
    }
}

export { CodingQuestions };
