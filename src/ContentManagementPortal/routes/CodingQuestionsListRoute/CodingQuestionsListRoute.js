import React from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { CodingQuestionsList } from '../../components/CodingQuestionsList';
import { LOGIN_PATH } from '../../../AuthModule/constants/RouteConstants/Navigation';

@inject('authStore', 'contentManagementStore')
@observer
class CodingQuestionsListRoute extends React.Component {
   @observable selectedTask;

   componentDidMount() {
      this.doNetworkCalls();
   }

   doNetworkCalls = () => {
      const { contentManagementStore } = this.props;
      contentManagementStore.getCodingQuestionsList();
   }

   constructor(props) {
      super(props);
      this.selectedTask = 'Problem Statement';
   }

   changeSelectedTask = (selectedTask) => {
      this.selectedTask = selectedTask;
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
         codingQuestionsList,
      } = contentManagementStore;
      const { signOut, selectedTask, changeSelectedTask } = this;
      return (
         <CodingQuestionsList
            {...{ signOut,saveUserData,codingQuestionsList,selectedTask, changeSelectedTask,postUserDataAPIError }}
         />
      );
   }
}

export { CodingQuestionsListRoute };
