import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { RoughSolutionView, Buttons } from './RoughSolutionStyle';
import { EditorBox } from './EditorBox';
import { SaveButton } from './SaveButton';
import { AddButton } from './AddButton';
import EditorModel from '../../models/RoughSolutionModel';

@observer
class RoughSolution extends React.Component {

   @observable roughSolutionList;

   constructor(props) {
      super(props);
      this.init();
      this.AddCodeEditor();
   }

   @action.bound
   init() {
      this.roughSolutionList = new Map();
   }

   AddCodeEditor = () => {
      console.log("Added");
      const editorObject = {
         id: Math.random().toString(),
         fileName: '',
         languageType: '',
         content: ''
      };
      this.roughSolutionList.set(editorObject.id, new EditorModel(editorObject));
   }

   saveTheRoughSolution = () => {
      console.log("saved", this.roughSolutionList);
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
         console.log('Finalcontent', eachEditor.content);
      });
   }

   onRemoveEditorBox = (event) => {
      this.roughSolutionList.delete(event.target.id);
   }

   RenderCodeEditors = () => {
      const { roughSolutionList, onChangeFileName, onChangeLanguageType, onChangeContent, onRemoveEditorBox, } = this;
      const roughSolutionListOfArray = [...roughSolutionList.values()];
      return roughSolutionListOfArray.map(eachEditorBox => {
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


   render() {
      const { saveTheRoughSolution, AddCodeEditor, RenderCodeEditors } = this;
      return (
         <RoughSolutionView>
            <div>
               {RenderCodeEditors()}
            </div>
            <Buttons>
               <AddButton AddCodeEditor = {AddCodeEditor}/>
               <SaveButton saveTheRoughSolution={saveTheRoughSolution}/>
            </Buttons>
         </RoughSolutionView>
      );
   }
}

export { RoughSolution };
















































// @observer
// class RoughSolution extends React.Component {
//    @observable editorBoxIds = [1, 2];

//    @action.bound
//    renderEditorBoxList(editorBoxIds) {
//       return editorBoxIds.map(eachEditorBoxId => {
//          return <EditorBox key={eachEditorBoxId} id={eachEditorBoxId}
//          onRemoveEditorBox={this.onRemoveEditorBox}
//          />;
//       });
//    }

//    onAddEditorBox = () => {
//       const prevStateEditorBoxIds = this.editorBoxIds.slice();
//       const lengthOfEditorBoxIds = prevStateEditorBoxIds.length;
//       const lastEditorBoxId = prevStateEditorBoxIds[lengthOfEditorBoxIds - 1];
//       const newEditorBoxId = lastEditorBoxId + 1;
//       prevStateEditorBoxIds.push(newEditorBoxId);
//       if (isNaN(prevStateEditorBoxIds[0])) {
//          prevStateEditorBoxIds[0] = 1;
//       }
//       this.editorBoxIds = prevStateEditorBoxIds;

//    }

//    onRemoveEditorBox = (event) => {
//       const Index = this.editorBoxIds.findIndex(item =>
//          item === Number(event.target.id)
//       );
//       let remainingEditorBox = this.editorBoxIds.filter((item, index) =>
//          index !== Index,
//       );
//       this.editorBoxIds = remainingEditorBox;
//    }

//    saveTheRoughSolution = () => {

//    }

//    render() {
//       const { saveTheRoughSolution, renderEditorBoxList, editorBoxIds, onAddEditorBox } = this;
//       return (
//          <RoughSolutionView>
//             <div>
//                {renderEditorBoxList(editorBoxIds)}
//             </div>
//             <Buttons>
//                <AddButton onAddEditorBox = {onAddEditorBox}/>
//                <SaveButton saveTheRoughSolution={saveTheRoughSolution}/>
//             </Buttons>
//          </RoughSolutionView>
//       );
//    }
// }
