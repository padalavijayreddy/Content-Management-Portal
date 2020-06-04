import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { ButtonsList, McqButton, CodingButton, QuestionsList } from './MCQCodingQuestionListButtonsStyle';
import { RenderCodingQuestionsList } from '../RenderCodingQuestionsList';
import { McqCodingButton } from '../../../../CommonModule/i18n/strings';

@observer
class MCQCodingQuestionListButtons extends React.Component {

    renderCodingQuestionList = () => {
        const { codingQuestions, doNetworkCalls, getCodingQuestionsListAPIStatus, getCodingQuestionsListAPIError, onChangeSortBy, addCodingQuestion, onChangeSearchText } = this.props;
        return <RenderCodingQuestionsList doNetworkCalls={doNetworkCalls} getCodingQuestionsListAPIStatus={getCodingQuestionsListAPIStatus} getCodingQuestionsListAPIError={getCodingQuestionsListAPIError} onChangeSortBy={onChangeSortBy} addCodingQuestion={addCodingQuestion} onChangeSearchText={onChangeSearchText} codingQuestions={codingQuestions} />;
    };

    render() {
        return (
            <div>
                <ButtonsList>
                    <McqButton>{McqCodingButton.MCQ}</McqButton>
                    <CodingButton>{McqCodingButton.Coding}</CodingButton>
                </ButtonsList>
                <div>{this.renderCodingQuestionList()}</div>
            </div>
        );
    }
}

export { MCQCodingQuestionListButtons };
