import React from 'react';
import { observer } from 'mobx-react';
import { GoBack } from '../GoBack';
import { TabBar } from '../TabBar';
import { ProblemStatement } from '../ProblemStatement';
import { RoughSolution } from '../RoughSolution';
import { TestCases } from '../TestCases';
import { PrefilledCode } from '../PrefilledCode';
import { SolutionApproach } from '../SolutionApproach';
import { CreateCodingQuestionsView } from './CreateCodingQuestionsStyle';
import { Hints } from '../Hints';
import { CleanSolution } from '../CleanSolution';


@observer
class CreateCodingQuestions extends React.Component {
   render() {
      console.log(CreateCodingQuestions);
      const { selectedTask, changeSelectedTask, saveUserData, postUserDataAPIError } = this.props;
      return (
         <CreateCodingQuestionsView>
                     <GoBack selectedTask={selectedTask} />
                     <TabBar
                        selectedTask={selectedTask}
                        changeSelectedTask={changeSelectedTask}
                     />
                     {selectedTask === 'Problem Statement' ? (
                     <ProblemStatement selectedTask={selectedTask} postUserDataAPIError={postUserDataAPIError} changeSelectedTask={changeSelectedTask} saveUserData={saveUserData} />
                     ) : selectedTask === 'Rough Solution' ? (
                     <RoughSolution />
                     ) : selectedTask === 'Test Cases' ? (
                     <TestCases />
                     ) : selectedTask === 'Prefilled Code' ? (
                     <PrefilledCode />
                     ) : selectedTask === 'Solution Approach' ? (
                     <SolutionApproach/>
                     ) : selectedTask === 'Clean Solution' ? (
                     <CleanSolution/>
                     ) : selectedTask === 'Hints' ? (
                     <Hints/>
                     ) : ''
                     }
         </CreateCodingQuestionsView>
      );
   }
}

export { CreateCodingQuestions };
