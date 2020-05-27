import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { RoughSolutionView } from './RoughSolutionStyle';
import { Header } from './Header';
import { Editor } from './Editor';

@observer
class RoughSolution extends React.Component {
   render() {
      return (
         <RoughSolutionView>
            <Header/>
            <Editor/>
         </RoughSolutionView>
      );
   }
}

export { RoughSolution };
