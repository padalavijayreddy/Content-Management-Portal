import React from 'react'
import { observer } from 'mobx-react'
import { TabBarView, Tab } from './TabBarStyle';

@observer
class TabBar extends React.Component {
   render() {
      const { selectedTask, changeSelectedTask } = this.props;
      return (
         <TabBarView>
            <Tab border={selectedTask==="Problem Statement"} onClick={changeSelectedTask} id='Problem Statement'>
               Statement
            </Tab>
            <Tab border={selectedTask==="Rough Solution"} onClick={changeSelectedTask} id='Rough Solution'>
               Rough Solution
            </Tab>
            <Tab border={selectedTask==="Test Cases"} onClick={changeSelectedTask} id='Test Cases'>
               Test Cases
            </Tab>
            <Tab border={selectedTask==="Prefilled Code"} onClick={changeSelectedTask} id='Prefilled Code'>
               Prefilled Code
            </Tab>
            <Tab border={selectedTask==="Solution Approach"} onClick={changeSelectedTask} id='Solution Approach'>
               Solution Approach
            </Tab>
            <Tab border={selectedTask==="Clean Solution"}  onClick={changeSelectedTask} id='Clean Solution'>
               Clean Solution
            </Tab>
            <Tab border={selectedTask==="Hints"} onClick={changeSelectedTask} id='Hints'>
               Hints
            </Tab>
         </TabBarView>
      );
   }
}

export { TabBar };
