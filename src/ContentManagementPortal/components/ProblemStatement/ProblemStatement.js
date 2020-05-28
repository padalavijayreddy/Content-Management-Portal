import React from 'react';
import { observer } from 'mobx-react';
import { ProblemDescription } from './ProblemDescription';
import { ProblemStatementView, ProblemStatementMode, CreateProblemStatement, CreatePreviewProblemStatement, SaveButtonField } from './ProblemStatementStyle';
import { ShortText } from './ShortText';
import { SaveButton } from './SaveButton';


@observer
class ProblemStatement extends React.Component {
   render() {
      const { saveTheProblem } = this.props;
      return (
         <ProblemStatementView>
            <ProblemStatementMode>
               <CreateProblemStatement>
                  <ShortText/>
                  <ProblemDescription/>
               </CreateProblemStatement>
               <CreatePreviewProblemStatement>
                  Preview Mode Here
               </CreatePreviewProblemStatement>
            </ProblemStatementMode>  
            <SaveButtonField>
               <SaveButton saveTheFields={saveTheProblem}/>
            </SaveButtonField>
         </ProblemStatementView>
      );
   }
}

export { ProblemStatement };
