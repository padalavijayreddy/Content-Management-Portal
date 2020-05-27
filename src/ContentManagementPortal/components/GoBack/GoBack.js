import React from 'react'
import { observer } from 'mobx-react'
import {
   GoBackView,
   BackToListDiv,
   BackToListP,
   SelectedTaskDiv
} from './GoBackStyle'

@observer
class GoBack extends React.Component {
   render() {
      const { selectedTask } = this.props
      return (
         <div className='font-bold text-xl'>
            <div>
               <BackToListP>Back To List</BackToListP>
            </div>
            <div>{selectedTask}</div>
         </div>
      )
   }
}

export { GoBack }
