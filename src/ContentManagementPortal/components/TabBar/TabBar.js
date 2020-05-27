import React from 'react'
import { observer } from 'mobx-react'
import { TabBarView, Tab } from './TabBarStyle';

@observer
class TabBar extends React.Component {
   render() {
      const { selectedTask, changeSelectedTask } = this.props;
      return (
         <TabBarView>
            <Tab onClick={changeSelectedTask} id='Problem Statement'>
               Statement
            </Tab>
            <Tab onClick={changeSelectedTask} id='Rough Solution'>
               Rough Solution
            </Tab>
            <Tab onClick={changeSelectedTask} id='Test Cases'>
               Test Cases
            </Tab>
            <Tab onClick={changeSelectedTask} id='Prefilled Code'>
               Prefilled Code
            </Tab>
            <Tab onClick={changeSelectedTask} id='Solution Approach'>
               Solution Approach
            </Tab>
            <Tab onClick={changeSelectedTask} id='clean Solution'>
               clean Solution
            </Tab>
            <Tab onClick={changeSelectedTask} id='Hints'>
               Hints
            </Tab>
         </TabBarView>
      );
   }
}

export { TabBar };
