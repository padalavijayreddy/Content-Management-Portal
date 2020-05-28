import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { RoughSolutionView, Buttons } from './RoughSolutionStyle';
import { EditorBox } from './EditorBox';
import { SaveButton } from '../ProblemStatement/SaveButton';
import { AddButton } from './AddButton';

@observer
class RoughSolution extends React.Component {
   @observable editorBoxIds = [1, 2];

   @action.bound
   renderEditorBoxList(editorBoxIds) {
      return editorBoxIds.map(eachEditorBoxId => {
         return <EditorBox key={eachEditorBoxId} id={eachEditorBoxId}
         onRemoveEditorBox={this.onRemoveEditorBox}
         />;
      });
   }

   onAddEditorBox = () => {
      const prevStateEditorBoxIds = this.editorBoxIds.slice();
      const lengthOfEditorBoxIds = prevStateEditorBoxIds.length;
      const lastEditorBoxId = prevStateEditorBoxIds[lengthOfEditorBoxIds - 1];
      const newEditorBoxId = lastEditorBoxId + 1;
      prevStateEditorBoxIds.push(newEditorBoxId);
      if (isNaN(prevStateEditorBoxIds[0])) {
         prevStateEditorBoxIds[0] = 1;
      }
      this.editorBoxIds = prevStateEditorBoxIds;
   }

   onRemoveEditorBox = (event) => {
      const Index = this.editorBoxIds.findIndex(item =>
         item === Number(event.target.id)
      );
      let remainingEditorBox = this.editorBoxIds.filter((item, index) =>
         index !== Index,
      );
      this.editorBoxIds = remainingEditorBox;
   }

   render() {
      return (
         <RoughSolutionView>
            <div>
               {this.renderEditorBoxList(this.editorBoxIds)}
            </div>
            <Buttons>
               <AddButton onAddEditorBox = {this.onAddEditorBox}/>
               <SaveButton/>
            </Buttons>
         </RoughSolutionView>
      );
   }
}

export { RoughSolution };
