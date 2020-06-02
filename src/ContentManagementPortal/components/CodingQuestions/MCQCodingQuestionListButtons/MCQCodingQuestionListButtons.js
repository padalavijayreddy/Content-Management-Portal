import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { ButtonsList, McqButton, CodingButton, QuestionsList } from './MCQCodingQuestionListButtonsStyle';
import NoDataView from '../../../../CommonModule/components/common/NoDataView';
import { RenderCodingQuestionsList } from '../RenderCodingQuestionsList';

@observer
class MCQCodingQuestionListButtons extends React.Component {

    renderCodingQuestionList = () => {
        const { codingQuestions, addCodingQuestion, onChangeSearchText } = this.props;
        if (codingQuestions.length === 0) {
            return <NoDataView/>;
        }
        else {
            return <RenderCodingQuestionsList addCodingQuestion={addCodingQuestion} onChangeSearchText={onChangeSearchText} codingQuestions={codingQuestions} />;
        }
    };

    render() {
        return (
            <div>
                <ButtonsList>
                    <McqButton>MCQs List</McqButton>
                    <CodingButton>Coding Questions List</CodingButton>
                </ButtonsList>
                <div>{this.renderCodingQuestionList()}</div>
            </div>
        );
    }
}

export { MCQCodingQuestionListButtons };
