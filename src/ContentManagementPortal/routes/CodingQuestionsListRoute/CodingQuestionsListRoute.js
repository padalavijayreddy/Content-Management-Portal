import React from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { CodingQuestionsList } from '../../components/CodingQuestionsList';
import { SIGN_IN_PATH } from '../../../SignInPage/constants/RouteConstants';

@inject('authStore', 'contentManagementStore')
@observer
class CodingQuestionsListRoute extends React.Component {
   @observable selectedTask;

   constructor(props) {
      super(props);
      this.selectedTask = 'Problem Statement';
   }

   @action.bound
   changeSelectedTask(event) {
      console.log(event.target);
      this.selectedTask = event.target.id;
   }

   signOut = () => {
      const { authStore } = this.props;
      authStore.userSignOut();
      this.props.history.replace(SIGN_IN_PATH);
   }

   render() {
      const { contentManagementStore } = this.props;
      const {
         problemDescription,
         shortText,
         onChangeTextArea,

      } = contentManagementStore
      const { signOut, selectedTask, changeSelectedTask } = this;
      return (
         <CodingQuestionsList
            {...{ signOut, selectedTask, changeSelectedTask }}
         />
      );
   }
}

export { CodingQuestionsListRoute };
