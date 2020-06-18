import React from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { CodingQuestionsList } from '../../components/CodingQuestionsList';
import { LOGIN_PATH } from '../../../AuthModule/constants/RouteConstants/Navigation';

@inject('authStore', 'contentManagementStore')
@observer
class CodingQuestionsListRoute extends React.Component {
   @observable shouldDisplayCart;

   constructor(props) {
      super(props);
      this.shouldDisplayCart = false;
   }

   componentDidMount() {
      this.doNetworkCalls();
   }

   doNetworkCalls = () => {
      const { contentManagementStore } = this.props;
      contentManagementStore.getCodingQuestionsList();
   }

   toggleDisplayCart = () => {
      {
         this.shouldDisplayCart = (this.shouldDisplayCart) ? false : true;
      }
   }

   onPageChange = (value) => {
      const { currentPagePositionUpdater, getCodingQuestionsList } = this.props.contentManagementStore;
      console.log(value.selected);
      currentPagePositionUpdater(value.selected + 1);
      getCodingQuestionsList();
   }

   signOut = () => {
      const { authStore } = this.props;
      authStore.userSignOut();
      this.props.history.replace(LOGIN_PATH);
   }

   render() {
      const { contentManagementStore } = this.props;
      const {
         saveUserData,
         postUserDataAPIError,
         questions, //codingQuestionsList
         onChangeSearchText,
         onChangeSortBy,
         saveRoughSolutionList,
         savePreFilledList,
         saveUserSolution,
         saveCleanSolutionList,
         selectedTask,
         changeSelectedTask,
         addButton,
         addCodingQuestion,
         getCodingQuestionsListAPIStatus,
         getCodingQuestionsListAPIError,
         currentPagePositionIncrementor,
         currentPagePositionDecrementor,
         currentPagePosition,
         totalCountOfPages,
         projectName,
         getProjectName,
         getProjectNameAPIStatus,
         deleteCodingQuestion,
         onDeleteAll,
      } = contentManagementStore;
      const { signOut, doNetworkCalls, onPageChange, toggleDisplayCart, shouldDisplayCart } = this;
      return (
         <CodingQuestionsList
            {...{
               toggleDisplayCart,
               shouldDisplayCart,
               onPageChange,
               currentPagePositionIncrementor,
               getProjectNameAPIStatus,
               getProjectName,
               projectName,
               currentPagePositionDecrementor,
               currentPagePosition,
               totalCountOfPages,
               signOut,
               doNetworkCalls,
               getCodingQuestionsListAPIStatus,
               getCodingQuestionsListAPIError,
               addCodingQuestion,
               addButton,
               saveUserSolution,
               saveCleanSolutionList,
               saveRoughSolutionList,
               savePreFilledList,
               saveUserData,
               questions,
               onChangeSearchText,
               onChangeSortBy,
               selectedTask,
               changeSelectedTask,
               postUserDataAPIError,
               deleteCodingQuestion,
               onDeleteAll
            }}
         />
      );
   }
}

export { CodingQuestionsListRoute };
