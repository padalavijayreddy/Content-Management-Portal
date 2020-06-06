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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
   background: 'white',
   position: 'bottom-center'
});

@observer
class SolutionApproach extends React.Component {
   @observable description = '';
   @observable complexityAnalysis = '';
   @observable complexitySelectedMode = '';
   @observable title = '';
   @observable selectedMode = '';
   @observable errorMessage = '';
   @observable solutionapproach_id = null;

   componentDidMount() {
      const { solutionApproach } = this.props;
      console.log("SOLUTION APPROACH", solutionApproach);
      if (solutionApproach) {
         this.solutionapproach_id = solutionApproach.id;
         this.title = solutionApproach.title;
         this.selectedMode = solutionApproach.descriptionContentType;
         this.description = solutionApproach.descriptionContent;
         this.complexitySelectedMode = solutionApproach.complexityAnalysisContentType;
         this.complexityAnalysis = solutionApproach.complexityAnalysisContent;
      }
      else {
         this.solutionapproach_id = null;
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
      console.log(event.target.value);
      this.title = event.target.value;
   }

   onRemoveEditorBox = () => {
      this.description = ' ';
   }

   onSuccess = () => {
      console.log("success");
      const { changeSelectedTask } = this.props;
      toast.success('You had Successfully saved the data');
      this.title = '';
      this.description = '';
      this.selectedMode = '';
      this.complexitySelectedMode = '';
      this.complexityAnalysis = '';
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
         toast.error('Please enter title');
      }

      else if (this.description.trim().length === 0) {
         this.errorMessage = 'Please enter description';
         toast.error('Please enter description');
      }

      else if (this.complexityAnalysis.trim().length === 0) {
         this.errorMessage = 'Please enter complexityAnalysis';
         toast.error('Please enter complexityAnalysis');
      }
      else {
         console.log(this.title, this.description, this.complexityAnalysis);
         const postData = {
            "solution_approach_details": {
               "solutionapproach_id": this.solutionapproach_id,
               "title": this.title,
               "description_content_type": this.selectedMode,
               "description_content": this.description,
               "complexity_analysis_content_type": this.complexitySelectedMode,
               "complexity_analysis_content": this.complexityAnalysis
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
