import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import ReactMarkdown from 'react-markdown';
import { Description } from './Description';
import { SolutionApproachView, SolutionApproachMode, CreateSolutionStatement, ReactWrap, CreatePreviewProblemStatement, SaveButtonField, ErrorMessage } from './SolutionApproachStyle';
import { Title } from './Title';
import { ComplexityAnalysis } from './ComplexityAnalysis';
import { SaveButton } from './SaveButton';
import "github-markdown-css";


@observer
class SolutionApproach extends React.Component {
   @observable description = '';
   @observable complexityAnalysis = '';
   @observable complexitySelectedMode = '';
   @observable title = '';
   @observable selectedMode = '';
   @observable errorMessage = '';

   componentDidMount() {
      const { solutionApproach } = this.props;
      if (solutionApproach) {
         this.title = solutionApproach.title;
         this.selectedMode = solutionApproach.descriptionContentType;
         this.description = solutionApproach.descriptionContent;
         this.complexitySelectedMode = solutionApproach.complexityAnalysisContentType;
         this.complexityAnalysis = solutionApproach.complexityAnalysisContent;
      }
      else {
         this.title = '';
         this.description = '';
         this.selectedMode = '';
         this.complexitySelectedMode = '';
         this.complexityAnalysis = '';
      }
   }


   handleChangeState = (event) => {
      this.selectedMode = event.target.value;
   }

   handleChangeAnalysisState = (event) => {
      this.complexitySelectedMode = event.target.value;
   }

   onChangeEditor = (newValue) => {
      this.description = newValue;
   }

   onChangeAnalysisEditor = (newValue) => {
      console.log(newValue);
      this.complexityAnalysis = newValue;
   }

   onChangeTitle = (event) => {
      this.title = event.target.value;
   }

   onRemoveEditorBox = () => {
      this.description = ' ';
   }

   onSuccess = () => {
      console.log("success");
      const { changeSelectedTask } = this.props;
      changeSelectedTask('Clean Solution');
   }

   onFailure = () => {
      const { getUserSignInAPIError: apiError } = this.props;
      if (apiError !== null && apiError !== undefined) {
         this.errorMessage = apiError;
      }
   }

   saveTheSolution = () => {
      const { saveUserSolution } = this.props;
      const { onSuccess, onFailure } = this;
      if (this.title.trim().length === 0) {
         this.errorMessage = 'Please enter title';
      }

      else if (this.description.trim().length === 0) {
         this.errorMessage = 'Please enter problemDescription';
      }

      else if (this.complexityAnalysis.trim().length === 0) {
         this.errorMessage = 'Please enter complexityAnalysis';
      }
      else {
         console.log(this.title, this.description, this.complexityAnalysis);
         const postData = {
            "title": this.shortText,
            "description": {
               "content_type": this.selectedMode,
               "content": this.description
            },
            "complexity_analysis": {
               "content_type": this.complexitySelectedMode,
               "content": this.complexityAnalysis
            }
         };
         console.log(postData);
         saveUserSolution(postData, onSuccess, onFailure);
      }
   }


   render() {
      const { handleChangeState, complexityAnalysis, description, handleChangeAnalysisState, complexitySelectedMode, selectedMode, title, onChangeEditor, onChangeAnalysisEditor, onChangeTitle, onRemoveEditorBox, saveTheSolution, errorMessage } = this;
      console.log(selectedMode);
      return (
         <SolutionApproachView>
            <SolutionApproachMode>
               <CreateSolutionStatement>
                  <Title  title={title} onChangeTitle={onChangeTitle}/>
                  <Description description={description} selectedMode={selectedMode} onRemoveEditorBox={onRemoveEditorBox} handleChangeState={handleChangeState} onChangeEditor={onChangeEditor}/>
                  <ComplexityAnalysis complexityAnalysis={complexityAnalysis} complexitySelectedMode={complexitySelectedMode} handleChangeAnalysisState={handleChangeAnalysisState} onChangeAnalysisEditor={onChangeAnalysisEditor} />
               </CreateSolutionStatement>
               <CreatePreviewProblemStatement>
                  {(selectedMode === 'HTML') ?
                  <iframe srcDoc={this.description} src="demo_iframe_srcdoc.htm">
                        <p>Your browser does not support iframes.</p>
                  </iframe> :
                  <ReactWrap className="markdown-body">
                     <ReactMarkdown source={this.description}/>
                  </ReactWrap>}   
               </CreatePreviewProblemStatement>
            </SolutionApproachMode>  
            <SaveButtonField>
               <SaveButton saveTheSolution={saveTheSolution} />
               <ErrorMessage>{errorMessage }</ErrorMessage>
            </SaveButtonField>
         </SolutionApproachView>
      );
   }
}

export { SolutionApproach };
