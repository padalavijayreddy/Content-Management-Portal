import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Header } from '../Header';
import { CreateCodingQuestions } from '../CreateCodingQuestions';
import { CodingQuestionsListView, RenderQuestions } from './CodingQuestionsListStyle';
import { GoBack } from '../GoBack';
import { CodingQuestions } from '../CodingQuestions';

@observer
class CodingQuestionsList extends React.Component {

    @observable addButton = false;

    CreateCodingQuestionList = (isCreate) => {
        const { selectedTask, codingQuestionsList, changeSelectedTask, saveUserData, postUserDataAPIError } = this.props;
        const { AddCodingQuestion } = this;
        return isCreate ?
            <CreateCodingQuestions postUserDataAPIError={postUserDataAPIError} saveUserData={saveUserData} selectedTask={selectedTask} changeSelectedTask={changeSelectedTask} /> :
            <CodingQuestions codingQuestionsList={codingQuestionsList} AddCodingQuestions = {AddCodingQuestion}/>;
    }

    AddCodingQuestion = () => {
        this.addButton = (this.addButton) ? false : true;
    }

    render() {
        const { signOut } = this.props;
        const { CreateCodingQuestionList, addButton } = this;
        return (
            <CodingQuestionsListView>
                <Header signOut={signOut} />
                <RenderQuestions>{CreateCodingQuestionList(addButton)}</RenderQuestions>
           </CodingQuestionsListView>
        );
    }
}

export { CodingQuestionsList };
