import React from 'react';
import { observer } from 'mobx-react';
import { observable, computed } from 'mobx';
import { TestCasesView, SaveButtonField, TestCasesComponent, TestCasesIdList, Add } from './TestCasesStyle';
import { EditorBox } from './EditorBox';
import { SaveButton } from './SaveButton';
import { IdButton } from './IdButton';
import TestCasesModel from '../../models/TestCasesModel';

@observer
class TestCases extends React.Component {

   @observable testCasesList;

   constructor(props) {
      super(props);
      this.init();
   }

   init() {
      this.testCasesList = new Map();
      this.addButton();
   }

   @computed
   get renderTestCases() {
      const testCasesListOfArray = [...this.testCasesList.values()]
      let testData = testCasesListOfArray.find(eachTestcase => eachTestcase.isActive);
      testData = (testData === undefined) ? testCasesListOfArray[0] : testData;
      return (
         <EditorBox 
            key = { testData }
            id={testData.id}
            eachTestcase={testData} 
            onChangeInputContent={this.onChangeInputContent}
            onChangeOutputContent={this.onChangeOutputContent}
            onChangeScore={this.onChangeScore}
            onChangeIsHidden = {this.onChangeIsHidden}
            saveTheTestCases = {this.saveTheTestCases}
         />
      );
   }

   @computed
   get renderTestCaseIds() {
      const { makeActiveItem, deleteId } = this;
      const testCasesListOfArray = [...this.testCasesList.values()];
      return testCasesListOfArray.map((eachTestcase, index) => {
         return <IdButton key={eachTestcase.id} id={eachTestcase.id} index={index} eachTestcase={eachTestcase} makeActiveItem={makeActiveItem} deleteId={deleteId}/>;
      });
   }

   addButton = () => {
      console.log("Added");
      const testCasesListOfArray = [...this.testCasesList.values()];
      const editorObject = {
         testcases_id: Math.random().toString(),
         input: '',
         output: '',
         score: 0,
         isHidden: false,
         isActive: true
      };
      testCasesListOfArray.forEach((eachTestcase) => eachTestcase.isActive = false);
      this.testCasesList.set(editorObject.testcases_id, new TestCasesModel(editorObject));
   }

   deleteId = (id) => {
      const testCasesListOfArray = Array.from(this.testCasesList.values());
      if (testCasesListOfArray.length === 1) return
      else {
         testCasesListOfArray.forEach((eachTestcase, index) => {
            if (eachTestcase.id === id) {
               testCasesListOfArray[(index === 0) ? index + 1 : index - 1].isActive = true;
            }
         });
         this.testCasesList.delete(id);
      }
   };

   makeActiveItem = (id) => {
      const testCasesListOfArray = [...this.testCasesList.values()];
      console.log("object 1", testCasesListOfArray);
      testCasesListOfArray.forEach((eachTestcase) => {
         if (eachTestcase.id === id) {
            eachTestcase.isActive = true;
         }
         else {
            eachTestcase.isActive = false;
         }
      });
      console.log('item id', id)
      console.log('Item Active', [...this.testCasesList.values()].find(eachTestcase => eachTestcase.isActive));
   };

   onChangeInputContent = (value, id) => {
      console.log("onChangeInputContent");
      const { testCasesList } = this;
      const testCasesListOfArray = [...testCasesList.values()];
      testCasesListOfArray.map(eachEditor => {
         if (eachEditor.id === id) {
            eachEditor.input = value;
         }
      });
      testCasesListOfArray.map(eachEditor => {
         console.log('Finalcontent', eachEditor.id, eachEditor.input);
      });
   }

   onChangeOutputContent = (value, id) => {
      console.log("onChangeOutputContent");
      const { testCasesList } = this;
      const testCasesListOfArray = [...testCasesList.values()];
      testCasesListOfArray.map(eachEditor => {
         if (eachEditor.id === id) {
            eachEditor.output = value;
         }
      });
      testCasesListOfArray.map(eachEditor => {
         console.log('Finalcontent', eachEditor.id, eachEditor.output);
      });
   }

   onChangeScore = (score, id) => {
      console.log("onChangeScore", score, id);
      const { testCasesList } = this;
      const testCasesListOfArray = [...testCasesList.values()];
      testCasesListOfArray.map(eachEditor => {
         if (eachEditor.id === id) {
            eachEditor.score = score;
         }
      });
      testCasesListOfArray.map(eachEditor => {
         console.log('Finalcontent', eachEditor.id, eachEditor.score);
      });
   }

   onChangeIsHidden = (isHidden, id) => {
      console.log("OnchangeIshidden", isHidden, id);
      const { testCasesList } = this;
      const testCasesListOfArray = [...testCasesList.values()];
      testCasesListOfArray.map(eachEditor => {
         if (eachEditor.id === id) {
            eachEditor.isHidden = isHidden;
         }
      });
      testCasesListOfArray.map(eachEditor => {
         console.log('FinalIsHidden', eachEditor.id, eachEditor.isHidden);
      });
   }

   render() {
      return (
         <TestCasesComponent>
            <TestCasesIdList>
               {this.renderTestCaseIds}
               <Add onClick={this.addButton} src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/e15c2a28-6962-46d9-9835-03d6a61be3f7.svg"/>
            </TestCasesIdList>
            <TestCasesView>
               {this.renderTestCases}
            </TestCasesView>
         </TestCasesComponent>
      );
   }
}

export { TestCases };
