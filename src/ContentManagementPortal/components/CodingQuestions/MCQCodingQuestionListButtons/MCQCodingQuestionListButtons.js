import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { ButtonsList, McqButton, CodingButton, QuestionsList } from './MCQCodingQuestionListButtonsStyle';
import { RenderCodingQuestionsList } from '../RenderCodingQuestionsList';
import { McqCodingButton } from '../../../../CommonModule/i18n/strings';

@observer
class MCQCodingQuestionListButtons extends React.Component {

    renderCodingQuestionList = () => {
        const {
            deleteCodingQuestion,
            getProjectNameAPIStatus,
            codingQuestions,
            doNetworkCalls,
            currentPagePositionIncrementor,
            currentPagePositionDecrementor,
            currentPagePosition,
            totalCountOfPages,
            getCodingQuestionsListAPIStatus,
            getCodingQuestionsListAPIError,
            onChangeSortBy,
            addCodingQuestion,
            onChangeSearchText,
            onPageChange,
            onDeleteAll
        } = this.props;
        return <RenderCodingQuestionsList 
        onDeleteAll={onDeleteAll}
        onPageChange={onPageChange}
        deleteCodingQuestion={deleteCodingQuestion}
        getProjectNameAPIStatus={getProjectNameAPIStatus}
        doNetworkCalls={doNetworkCalls} 
        getCodingQuestionsListAPIStatus={getCodingQuestionsListAPIStatus} 
        getCodingQuestionsListAPIError={getCodingQuestionsListAPIError} 
        onChangeSortBy={onChangeSortBy} 
        addCodingQuestion={addCodingQuestion} 
        onChangeSearchText={onChangeSearchText} 
        codingQuestions={codingQuestions} 
        currentPagePositionIncrementor={currentPagePositionIncrementor} 
        currentPagePositionDecrementor={currentPagePositionDecrementor} 
        currentPagePosition={currentPagePosition} 
        totalCountOfPages={totalCountOfPages}
        />;
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
