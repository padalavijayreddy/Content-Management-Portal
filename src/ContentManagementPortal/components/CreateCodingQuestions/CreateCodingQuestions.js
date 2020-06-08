import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { GoBack } from '../GoBack';
import { TabBar } from '../TabBar';
import { ProblemStatement } from '../ProblemStatement';
import { RoughSolution } from '../RoughSolution';
import { TestCases } from '../TestCases';
import { PrefilledCode } from '../PrefilledCode';
import { SolutionApproach } from '../SolutionApproach';
import { CreateCodingQuestionsView } from './CreateCodingQuestionsStyle';
import { Hints } from '../Hints';
import { CleanSolution } from '../CleanSolution';
import { Header } from '../Header';
import { LOGIN_PATH } from '../../../AuthModule/constants/RouteConstants/Navigation';
import { withRouter } from 'react-router-dom';
import Loader from "../../../CommonModule/components/Icons/Loader";
import LoadingWrapperWithFailure from '../../../CommonModule/components/LoadingWrapperWithFailure';
import { createCodingQuestions } from '../../../CommonModule/i18n/strings';

import {
   API_SUCCESS,
   API_FAILED,
   API_FETCHING,
   API_INITIAL,
}
from "@ib/api-constants";

@inject('authStore', 'contentManagementStore')
@observer
class CreateCodingQuestions extends React.Component {
   @observable questionId;

   componentDidMount() {
      this.questionId = this.props.match.params.questionId;
      if (this.questionId) {
         this.doNetworkCalls(this.questionId);
      }
      const { contentManagementStore } = this.props;
      const { changeSelectedTask } = contentManagementStore;
      changeSelectedTask('Problem Statement');
   }

   componentWillUnmount() {
      this.props.contentManagementStore.codingQuestionDetails = undefined;
   }

   doNetworkCalls = (questionId) => {
      const { contentManagementStore } = this.props;
      contentManagementStore.getCodingQuestionDetails(questionId);
   }

   signOut = () => {
      const { authStore } = this.props;
      authStore.userSignOut();
      this.props.history.replace(LOGIN_PATH);
   }

   //Here im getting the Id and im using id for the delete id and im sesding the roughsolution_id null and they will return back the some rough solution_id and but im getting here id why ???? i dont get y

   renderCodingQuestionUI = observer(({}) => {
      const { signOut } = this;
      const { contentManagementStore } = this.props;
      console.log(contentManagementStore.codingQuestionDetails);
      let statement, roughSolutions, solutionApproach, prefilledCode, cleanSolution;
      if (contentManagementStore.codingQuestionDetails) {
         console.log("rough solution in create componentDidMount", contentManagementStore.codingQuestionDetails.roughSolution);
         statement = contentManagementStore.codingQuestionDetails.problemStatement;
         roughSolutions = contentManagementStore.codingQuestionDetails.roughSolution;
         prefilledCode = contentManagementStore.codingQuestionDetails.prefilledCode;
         solutionApproach = contentManagementStore.codingQuestionDetails.solutionApproach;
         cleanSolution = contentManagementStore.codingQuestionDetails.cleanSolution;
      }
      const {
         saveUserData,
         postUserDataAPIError,
         saveRoughSolutionList,
         savePreFilledList,
         saveUserSolution,
         saveCleanSolutionList,
         selectedTask,
         changeSelectedTask,
         addCodingQuestion,
      } = contentManagementStore;
      return (
         <CreateCodingQuestionsView>
            <Header signOut={signOut} />
            <GoBack addCodingQuestion={addCodingQuestion} selectedTask={selectedTask} />
            <TabBar
               selectedTask={selectedTask}
               changeSelectedTask={changeSelectedTask}
            />
            {selectedTask === 'Problem Statement' ? (
            <ProblemStatement statement={statement} selectedTask={selectedTask} postUserDataAPIError={postUserDataAPIError} changeSelectedTask={changeSelectedTask} saveUserData={saveUserData} />
            ) : selectedTask === 'Rough Solution' ? (
            <RoughSolution roughSolutions={roughSolutions} selectedTask={selectedTask} saveRoughSolutionList={saveRoughSolutionList} changeSelectedTask={changeSelectedTask}/>
            ) : selectedTask === 'Test Cases' ? (
            <TestCases />
            ) : selectedTask === 'Prefilled Code' ? (
            <PrefilledCode prefilledCode={prefilledCode} savePreFilledList={savePreFilledList} changeSelectedTask={changeSelectedTask}/>
            ) : selectedTask === 'Solution Approach' ? (
            <SolutionApproach solutionApproach={solutionApproach} saveUserSolution={saveUserSolution} changeSelectedTask={changeSelectedTask}/>
            ) : selectedTask === 'Clean Solution' ? (
            <CleanSolution cleanSolution={cleanSolution} saveCleanSolutionList={saveCleanSolutionList} changeSelectedTask={changeSelectedTask}/>
            ) : selectedTask === 'Hints' ? (
            <Hints/>
            ) : ''}
         </CreateCodingQuestionsView>
      );
   });

   renderAPIStatus = (APIStatus) => {
      const { contentManagementStore } = this.props;
      const { getCodingQuestionDetailsAPIStatus } = contentManagementStore;
      if (this.questionId) {
         return getCodingQuestionDetailsAPIStatus;
      }
      else {
         return API_SUCCESS;
      }
   }


   render() {
      const { contentManagementStore } = this.props;
      const { getCodingQuestionDetailsAPIError, getCodingQuestionDetailsAPIStatus } = contentManagementStore;
      return (
         <LoadingWrapperWithFailure 
            apiStatus = { this.renderAPIStatus(getCodingQuestionDetailsAPIStatus) } 
            apiError = { getCodingQuestionDetailsAPIError } 
            onRetryClick = { this.doNetworkCalls } 
            renderSuccessUI = { this.renderCodingQuestionUI }
            />
      );
   }
}

export default withRouter(CreateCodingQuestions);
