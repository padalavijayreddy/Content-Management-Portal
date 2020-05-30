import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import { TestCasesView, SaveButtonField, TestCasesComponent } from './TestCasesStyle';
import { EditorBox } from './EditorBox';
import { SaveButton } from './SaveButton';

@observer
class TestCases extends React.Component {

   @observable testCasesList = [1];

   renderTestCases = () => {
      return this.testCasesList.map(eachTestcase => {
         return <EditorBox key={eachTestcase} />
      })
   }

   render() {
      return (
         <TestCasesComponent>
            <TestCasesView>
               {this.renderTestCases()}
            </TestCasesView>
            <SaveButtonField>
               <SaveButton/>
            </SaveButtonField>
         </TestCasesComponent>
      );
   }
}

export { TestCases }
