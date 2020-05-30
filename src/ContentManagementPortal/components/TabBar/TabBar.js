import React from 'react'
import { observer } from 'mobx-react'
import { TabBarView, Tab } from './TabBarStyle';

@observer
class TabBar extends React.Component {
   render() {
      const { selectedTask, changeSelectedTask } = this.props;
      return (
         <TabBarView>
            <Tab border={selectedTask==="Problem Statement"} data-testid='Problem-statement' onClick={()=> changeSelectedTask("Problem Statement")} id='Problem Statement'>
               Statement
            </Tab>
            <Tab border={selectedTask==="Rough Solution"} data-testid='Rough-solution' onClick={()=> changeSelectedTask("Rough Solution")} id='Rough Solution'>
               Rough Solution
            </Tab>
            <Tab border={selectedTask==="Test Cases"} onClick={()=> changeSelectedTask("Test Cases")} id='Test Cases'>
               Test Cases
            </Tab>
            <Tab border={selectedTask==="Prefilled Code"} onClick={()=> changeSelectedTask("Prefilled Code")} id='Prefilled Code'>
               Prefilled Code
            </Tab>
            <Tab border={selectedTask==="Solution Approach"} onClick={()=> changeSelectedTask("Solution Approach")} id='Solution Approach'>
               Solution Approach
            </Tab>
            <Tab border={selectedTask==="Clean Solution"} onClick={()=> changeSelectedTask("Clean Solution")} id='Clean Solution'>
               Clean Solution
            </Tab>
            <Tab border={selectedTask==="Hints"} onClick={()=> changeSelectedTask("Hints")} id='Hints'>
               Hints
            </Tab>
         </TabBarView>
      );
   }
}

export { TabBar };
