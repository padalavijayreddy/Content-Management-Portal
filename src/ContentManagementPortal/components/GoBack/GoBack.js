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
import { goBack } from '../../../i18n/strings';

@observer
class GoBack extends React.Component {
   render() {
      const { selectedTask } = this.props;
      return (
         <GoBackView>
            <BackToListDiv>
               <BackArrow src={goBack.backArrowImg} alt={goBack.goBack}></BackArrow>
               <BackToListP>Back To List</BackToListP>
            </BackToListDiv>
            <SelectedTaskDiv>{selectedTask}</SelectedTaskDiv>
         </GoBackView>
      );
   }
}

export { GoBack };
