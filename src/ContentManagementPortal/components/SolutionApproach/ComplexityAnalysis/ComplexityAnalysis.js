import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import { SolutionApproach } from '../../../../CommonModule/i18n/strings'
import {
   DescriptionView,
   DescriptionLabel,
   ProblemDescriptionTextarea
} from './ComplexityAnalysisStyle'
import { EditorBox } from './EditorBox'

@observer
class ComplexityAnalysis extends React.Component {
   render() {
      const {
         onChangeAnalysisEditor,
         complexityAnalysis,
         complexitySelectedMode,
         handleChangeAnalysisState
      } = this.props
      return (
         <DescriptionView>
            <DescriptionLabel>
               {SolutionApproach.complexityAnalysis}
            </DescriptionLabel>
            <EditorBox
               complexityAnalysis={complexityAnalysis}
               complexitySelectedMode={complexitySelectedMode}
               onChangeAnalysisEditor={onChangeAnalysisEditor}
               handleChangeAnalysisState={handleChangeAnalysisState}
            />
         </DescriptionView>
      )
   }
}

export { ComplexityAnalysis }
