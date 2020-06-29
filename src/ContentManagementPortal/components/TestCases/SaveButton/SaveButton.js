import React from 'react'
import { Save, Button } from './SaveButtonStyle'
import { save } from '../../../../CommonModule/i18n/strings'

class SaveButton extends React.Component {
   render() {
      const { saveTheTestCases } = this.props
      return (
         <Save onClick={saveTheTestCases}>
            <Button>{save.saveButton}</Button>
         </Save>
      )
   }
}

export { SaveButton }
