import React from 'react';
import { observer } from 'mobx-react';
import {
   GoBackView,
   BackToListDiv,
   BackArrow,
   BackToListP,
   SelectedTaskDiv
}
from './GoBackStyle';
import { goBack } from '../../../CommonModule/i18n/strings';
import { Coding_Questions_List_Path } from '../../../CommonModule/constants/RouteConstants';
import { withRouter } from 'react-router-dom';

@observer
class GoBack extends React.Component {

   navigateToCodingQuestionsList = () => {
      const { history } = this.props;
      history.goBack('/Content-Management-Portal/coding-questions-list-path/');
   }

   render() {
      const { selectedTask } = this.props;
      return (
         <GoBackView>
            <BackToListDiv>
               <BackArrow onClick={this.navigateToCodingQuestionsList} src={goBack.backArrowImg} alt={goBack.goBack}></BackArrow>
               <BackToListP>Back To List</BackToListP>
            </BackToListDiv>
            <SelectedTaskDiv>{selectedTask}</SelectedTaskDiv>
         </GoBackView>
      );
   }
}

export default withRouter(GoBack);
