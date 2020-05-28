import React from 'react';
import { observer } from 'mobx-react';
import { Header } from '../Header';
import { GoBack } from '../GoBack';
import { TabBar } from '../TabBar';
import { ProblemStatement } from '../ProblemStatement';
import { RoughSolution } from '../RoughSolution';
import { TestCases } from '../TestCases';
import { PrefilledCode } from '../PrefilledCode';
import { SolutionApproach } from '../SolutionApproach';
import { CodingQuestionsListView } from './CodingQuestionsListStyle';
import { Hints } from '../Hints';
import { CleanSolution } from '../CleanSolution';


@observer
class CodingQuestionsList extends React.Component {
   render() {
      const { signOut, selectedTask, changeSelectedTask } = this.props;
      return (
         <CodingQuestionsListView>
            <Header signOut={signOut} />
            <GoBack selectedTask={selectedTask} />
            <TabBar
               selectedTask={selectedTask}
               changeSelectedTask={changeSelectedTask}
            />
            {selectedTask === 'Problem Statement' ? (
               <ProblemStatement />
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
            
         </CodingQuestionsListView>
      );
   }
}

export { CodingQuestionsList };
