import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { RoughSolutionView, Buttons, SaveButtonField, ErrorMessage } from './RoughSolutionStyle';
import { EditorBox } from './EditorBox';
import { SaveButton } from './SaveButton';
import { AddButton } from './AddButton';
import RoughSolutionModel from '../../models/RoughSolutionModel';

@observer
class RoughSolution extends React.Component {

   @observable roughSolutionList;

   constructor(props) {
      super(props);
      this.init();
   }

   componentDidMount() {
      const { roughSolutions } = this.props;
      console.log("roughSolutions", roughSolutions);
      if (roughSolutions) {
         console.log("roughSolutionList", [...this.roughSolutionList.values()]);
         roughSolutions.map(eachRoughSolution => {
            this.roughSolutionList.set(eachRoughSolution.id, {
               id: eachRoughSolution.id,
               fileName: eachRoughSolution.fileName,
               languageType: eachRoughSolution.languageType,
               content: eachRoughSolution.content,
            });
         });
      }
      else {
         this.addCodeEditor();
      }
   }

   @action.bound
   init() {
      this.roughSolutionList = new Map();
      this.errorMessage = '';
   }

   addCodeEditor = () => {
      console.log("Added");
      const editorObject = {
         roughsolution_id: Math.random().toString(),
         code_type: '',
         code: '',
         filename: ''
      };
      this.roughSolutionList.set(editorObject.roughsolution_id, new RoughSolutionModel(editorObject));
   }

   onChangeFileName = (value, id) => {
      const { roughSolutionList } = this;
      const roughSolutionListOfArray = [...roughSolutionList.values()];
      roughSolutionListOfArray.map(eachEditor => {
         if (eachEditor.id === id) {
            eachEditor.fileName = value;
         }
      });
      roughSolutionListOfArray.map(eachEditor => {
         console.log('finalfileName', eachEditor.fileName);
      });
   }

   onChangeLanguageType = (value, id) => {
      const { roughSolutionList } = this;
      const roughSolutionListOfArray = [...roughSolutionList.values()];
      roughSolutionListOfArray.map(eachEditor => {
         if (eachEditor.id === id) {
            eachEditor.languageType = value;
         }
      });
      roughSolutionListOfArray.map(eachEditor => {
         console.log('finalLanguage', eachEditor.languageType);
      });
   }

   onChangeContent = (value, id) => {
      const { roughSolutionList } = this;
      const roughSolutionListOfArray = [...roughSolutionList.values()];
      roughSolutionListOfArray.map(eachEditor => {
         if (eachEditor.id === id) {
            eachEditor.content = value;
         }
      });
      roughSolutionListOfArray.map(eachEditor => {
         console.log('Finalcontent', eachEditor.id, eachEditor.content);
      });
   }

   onRemoveEditorBox = (event) => {
      console.log(event.target.id);
      this.roughSolutionList.delete(event.target.id);
      console.log(this.roughSolutionList);
   }

   renderCodeEditors = () => {
      console.log("roughSolutionList", [...this.roughSolutionList.values()]);
      const { roughSolutionList, onChangeFileName, onChangeLanguageType, onChangeContent, onRemoveEditorBox, } = this;
      const roughSolutionListOfArray = [...roughSolutionList.values()];
      return roughSolutionListOfArray.map(eachEditorBox => {
         console.log("eachEditorBox", eachEditorBox);
         return <EditorBox 
         key={eachEditorBox.id}
         editorBox={eachEditorBox}                                        
         onRemoveEditorBox={onRemoveEditorBox} 
         onChangeLanguageType={onChangeLanguageType} 
         onChangeFileName={onChangeFileName}
         onChangeContent={onChangeContent}
         />;
      });
   }

   onSuccess = () => {
      console.log("success");
      const { changeSelectedTask } = this.props;
      changeSelectedTask('Test Cases');
   }

   onFailure = () => {
      const { getUserSignInAPIError: apiError } = this.props;
      if (apiError !== null && apiError !== undefined) {
         this.errorMessage = apiError;
      }
   }


   saveTheRoughSolution = () => {
      if ([...this.roughSolutionList.values()].length === 0) {
         this.errorMessage = 'Please enter Text';
      }
      else {
         console.log("Length", [...this.roughSolutionList.values()].length);
         console.log("saved", this.roughSolutionList);
         const { saveRoughSolutionList } = this.props;
         const { onSuccess, onFailure } = this;
         const roughSolutionListOfArray = [...this.roughSolutionList.values()];
         const solutionPostDataList = [];
         roughSolutionListOfArray.map(eachEditorBox => {
            solutionPostDataList.push({
               roughSolution: [{
                  "roughsolution_id": eachEditorBox.id,
                  "code_type": eachEditorBox.languageType,
                  "code": eachEditorBox.content,
                  "filename": eachEditorBox.fileName
               }]
            });
         });
         console.log(solutionPostDataList);
         saveRoughSolutionList(solutionPostDataList, onSuccess, onFailure);
      }
   }


   render() {
      console.log('delete');
      const { saveTheRoughSolution, addCodeEditor, renderCodeEditors } = this;
      return (
         <RoughSolutionView>
            <div>
               {renderCodeEditors()}
            </div>
            <Buttons>
               <AddButton addCodeEditor = {addCodeEditor}/>
               <SaveButton saveTheRoughSolution={saveTheRoughSolution}/>
            </Buttons>
         </RoughSolutionView>
      );
   }
}

export { RoughSolution };