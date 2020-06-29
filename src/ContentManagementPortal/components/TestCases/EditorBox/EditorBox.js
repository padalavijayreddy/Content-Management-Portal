import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import {
   TestCasesComponent,
   Header,
   IsHiddenCheck,
   Checkbox,
   IsHidden
} from './EditorBoxStyle'
import { Editor } from '../Editor'
import { SaveButton } from '../SaveButton'
import { OutputEditor } from '../OutputEditor'

@observer
class EditorBox extends React.Component {
   @observable score
   @observable checked = false

   onChangeCheckbox = () => {
      const { onChangeIsHidden, id } = this.props
      this.checked = !this.checked
      onChangeIsHidden(this.checked, id)
   }

   onChangeScoreValue = event => {
      console.log('event', event.target.value)
      const { onChangeScore, id } = this.props
      this.score = event.target.value
      onChangeScore(this.score, id)
   }

   render() {
      const {
         eachTestcase,
         saveTheTestCases,
         id,
         onChangeScore,
         onChangeInputContent,
         onChangeOutputContent,
         onChangeIsHidden
      } = this.props
      return (
         <TestCasesComponent>
            {id}
            <Header>INPUT</Header>
            <Editor
               onChangeInputContent={onChangeInputContent}
               id={eachTestcase.id}
            />
            <Header>OUTPUT</Header>
            <OutputEditor
               onChangeOutputContent={onChangeOutputContent}
               id={eachTestcase.id}
            />
            <Header>SCORE</Header>
            <Checkbox
               type='text'
               onChange={this.onChangeScoreValue}
               value={this.score}
               placeholder='66'
            />
            <IsHiddenCheck>
               <input
                  onChange={this.onChangeCheckbox}
                  checked={this.checked}
                  type='checkbox'
               />
               <IsHidden>Is Hidden</IsHidden>
            </IsHiddenCheck>
            <SaveButton saveTheTestCases={saveTheTestCases} />
         </TestCasesComponent>
      )
   }
}

export { EditorBox }
