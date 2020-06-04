import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { MCQCodingQuestionListButtons } from './MCQCodingQuestionListButtons';
import { CodingQuestionsView } from './CodingQuestionsStyle';

@observer
class CodingQuestions extends React.Component {
    render() {
        const { addCodingQuestion, doNetworkCalls, getCodingQuestionsListAPIStatus, getCodingQuestionsListAPIError, onChangeSortBy, onChangeSearchText, codingQuestionsList } = this.props;
        return (
            <CodingQuestionsView>
                <MCQCodingQuestionListButtons doNetworkCalls={doNetworkCalls} getCodingQuestionsListAPIStatus={getCodingQuestionsListAPIStatus} getCodingQuestionsListAPIError={getCodingQuestionsListAPIError} onChangeSortBy={onChangeSortBy} onChangeSearchText={onChangeSearchText} addCodingQuestion={addCodingQuestion} codingQuestions = {codingQuestionsList}/>
            </CodingQuestionsView>
        );
    }
}

export { CodingQuestions };
