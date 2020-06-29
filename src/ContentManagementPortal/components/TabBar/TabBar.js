import React from 'react'
import { observer } from 'mobx-react'
import { TabBarView, Tab } from './TabBarStyle'
import { tabBar } from '../../../CommonModule/i18n/strings'

@observer
class TabBar extends React.Component {
   render() {
      const { selectedTask, changeSelectedTask } = this.props
      return (
         <TabBarView>
            <Tab
               border={selectedTask === 'Problem Statement'}
               data-testid={tabBar.statementTestId}
               onClick={() => changeSelectedTask('Problem Statement')}
               id={tabBar.ProblemStatement}
            >
               {tabBar.Statement}
            </Tab>
            <Tab
               border={selectedTask === 'Rough Solution'}
               data-testid={tabBar.roughSolutionTestId}
               onClick={() => changeSelectedTask('Rough Solution')}
               id={tabBar.RoughSolution}
            >
               {tabBar.RoughSolution}
            </Tab>
            <Tab
               border={selectedTask === 'Test Cases'}
               dataTextid={tabBar.testCasesTestId}
               onClick={() => changeSelectedTask('Test Cases')}
               id={tabBar.TestCases}
            >
               {tabBar.TestCases}
            </Tab>
            <Tab
               border={selectedTask === 'Prefilled Code'}
               dataTextid={tabBar.prefilledCodeTestId}
               onClick={() => changeSelectedTask('Prefilled Code')}
               id={tabBar.PrefilledCode}
            >
               {tabBar.PrefilledCode}
            </Tab>
            <Tab
               border={selectedTask === 'Solution Approach'}
               dataTextid={tabBar.solutionApproachTestId}
               onClick={() => changeSelectedTask('Solution Approach')}
               id={tabBar.SolutionApproach}
            >
               {tabBar.SolutionApproach}
            </Tab>
            <Tab
               border={selectedTask === 'Clean Solution'}
               dataTextid={tabBar.cleanSolutionTestId}
               onClick={() => changeSelectedTask('Clean Solution')}
               id={tabBar.CleanSolution}
            >
               {tabBar.CleanSolution}
            </Tab>
            <Tab
               border={selectedTask === 'Hints'}
               dataTextid={tabBar.hintsTestId}
               onClick={() => changeSelectedTask('Hints')}
               id={tabBar.Hints}
            >
               {tabBar.Hints}
            </Tab>
         </TabBarView>
      )
   }
}

export { TabBar }
