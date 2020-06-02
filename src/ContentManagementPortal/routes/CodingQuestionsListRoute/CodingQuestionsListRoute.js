import React from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { CodingQuestionsList } from '../../components/CodingQuestionsList';
import { LOGIN_PATH } from '../../../AuthModule/constants/RouteConstants/Navigation';

@inject('authStore', 'contentManagementStore')
@observer
class CodingQuestionsListRoute extends React.Component {

   componentDidMount() {
      this.doNetworkCalls();
   }

   doNetworkCalls = () => {
      const { contentManagementStore } = this.props;
      contentManagementStore.getCodingQuestionsList();
   }

   constructor(props) {
      super(props);
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
         saveRoughSolutionList,
         savePreFilledList,
         saveUserSolution,
         saveCleanSolutionList,
         selectedTask,
         changeSelectedTask,
         addButton,
         addCodingQuestion,
      } = contentManagementStore;
      const { signOut } = this;
      return (
         <CodingQuestionsList
            {...{ signOut,addCodingQuestion,addButton,saveUserSolution,saveCleanSolutionList,saveRoughSolutionList,savePreFilledList,saveUserData,questions,onChangeSearchText,selectedTask, changeSelectedTask,postUserDataAPIError }}
         />
      );
   }
}

export { CodingQuestionsListRoute };
