import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { RoughSolutionComponent } from './EditorBoxStyle';
import { Header } from '../Header';
import { Editor } from '../Editor';

@observer
class EditorBox extends React.Component {
    render() {
        console.log('complexity editor box');
        const { complexitySelectedMode, complexityAnalysis, handleChangeAnalysisState, onChangeAnalysisEditor } = this.props;
        return (
            <RoughSolutionComponent>
                <Header complexitySelectedMode={complexitySelectedMode} handleChangeAnalysisState={handleChangeAnalysisState} />
                <Editor complexitySelectedMode={complexitySelectedMode} complexityAnalysis={complexityAnalysis} onChangeAnalysisEditor={onChangeAnalysisEditor}/>
            </RoughSolutionComponent>
        );
    }
}

export { EditorBox };
