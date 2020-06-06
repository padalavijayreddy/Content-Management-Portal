import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import ReactMarkdown from 'react-markdown';
import { ProblemDescription } from './ProblemDescription';
import { ProblemStatementView, ProblemStatementMode, CreateProblemStatement, ReactWrap, CreatePreviewProblemStatement, SaveButtonField, ErrorMessage } from './ProblemStatementStyle';
import { ShortText } from './ShortText';
import { SaveButton } from './SaveButton';
import "github-markdown-css";
import { problemStatement } from '../../../CommonModule/i18n/strings';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
   position: 'bottom-center'
});

@observer
class ProblemStatement extends React.Component {
   @observable problemDescription;
   @observable shortText;
   @observable selectedMode;
   @observable errorMessage;

   componentDidMount() {
      const { statement } = this.props;
      if (statement) {
         this.shortText = statement.shortTitle;
         this.selectedMode = statement.contentType;
         this.problemDescription = statement.problemDescription;
      }

      else {
         this.shortText = '';
         this.problemDescription = '';
         this.selectedMode = '';
      }
   }

   handleChangeState = (event) => {
      this.selectedMode = event.target.value;
   }

   onChangeEditor = (newValue) => {
      this.problemDescription = newValue;
   }

   onChangeShortText = (event) => {
      this.shortText = event.target.value;
   }

   onRemoveEditorBox = () => {
      this.problemDescription = ' ';
   }

   onSuccess = () => {
      console.log("success");
      const { changeSelectedTask } = this.props;
      changeSelectedTask('Rough Solution');
      toast.warn('Successfully Saved the Question');
   }

   onFailure = () => {
      const { getUserSignInAPIError: apiError } = this.props;
      if (apiError !== null && apiError !== undefined) {
         this.errorMessage = apiError;
      }
   }

   saveTheProblem = () => {
      const { saveUserData } = this.props;
      const { onSuccess, onFailure } = this;
      if (this.shortText.trim().length === 0) {
         this.errorMessage = "Please enter shortText";
      }
      else if (this.problemDescription.trim().length === 0) {
         this.errorMessage = "Please enter problemDescription";
      }
      else {
         console.log(this.shortText, this.problemDescription);
         const postData = {
            "short_title": this.shortText,
            "problem_description": {
               "content_type": this.selectedMode,
               "content": this.problemDescription
            }
         };
         console.log(postData);
         saveUserData(postData, onSuccess, onFailure);
      }
   }

   render() {
      const { handleChangeState, problemDescription, selectedMode, shortText, onChangeEditor, onChangeShortText, onRemoveEditorBox, saveTheProblem, errorMessage } = this;
      return (
         <ProblemStatementView>
            <ProblemStatementMode>
               <CreateProblemStatement>
                  <ShortText  shortText={shortText} onChangeShortText={onChangeShortText}/>
                  <ProblemDescription problemDescription={problemDescription} selectedMode={selectedMode} onRemoveEditorBox={onRemoveEditorBox} handleChangeState={handleChangeState} onChangeEditor={onChangeEditor}/>
               </CreateProblemStatement>
               <CreatePreviewProblemStatement>
                  {(selectedMode === 'HTML') ?
                  <iframe srcDoc={this.problemDescription} src={problemStatement.iframeSrc}>
                        <p>{problemStatement.HTMLPreviewMessage}</p>
                  </iframe> :
                  <ReactWrap className="markdown-body">
                     <ReactMarkdown source={this.problemDescription}/>
                  </ReactWrap>}   
               </CreatePreviewProblemStatement>
            </ProblemStatementMode>  
            <SaveButtonField>
               <SaveButton saveTheProblem={saveTheProblem} />
               <ErrorMessage>{errorMessage }</ErrorMessage>
            </SaveButtonField>
         </ProblemStatementView>
      );
   }
}

export { ProblemStatement };
