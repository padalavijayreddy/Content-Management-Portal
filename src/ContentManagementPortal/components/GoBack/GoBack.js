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
import { CODING_QUESTIONS_LIST_PATH } from '../../constants/RouteConstants/Navigation';
import { withRouter } from 'react-router-dom';

@observer
class GoBack extends React.Component {

   navigateToCodingQuestionsList = () => {
      const { history } = this.props;
      history.goBack(CODING_QUESTIONS_LIST_PATH);
   }

   render() {
      const { selectedTask } = this.props;
      return (
         <GoBackView>
            <BackToListDiv>
               <BackArrow onClick={this.navigateToCodingQuestionsList} src={goBack.backArrowImg} alt={goBack.goBack}></BackArrow>
               <BackToListP>{goBack.BackToList}</BackToListP>
            </BackToListDiv>
            <SelectedTaskDiv>{selectedTask}</SelectedTaskDiv>
         </GoBackView>
      );
   }
}

export default withRouter(GoBack);
