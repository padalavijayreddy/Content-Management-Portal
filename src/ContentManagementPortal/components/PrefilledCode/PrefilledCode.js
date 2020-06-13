import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { PrefilledCodeView, Buttons, SaveButtonField, ErrorMessage } from './PrefilledCodeStyle';
import { EditorBox } from './EditorBox';
import { SaveButton } from './SaveButton';
import { AddButton } from './AddButton';
import PrefilledCodeModel from '../../models/PrefilledCodeModel';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
   position: 'bottom-center',
   hideProgressBar: true,
});

@observer
class PrefilledCode extends React.Component {

   @observable PrefilledCodeList;

   constructor(props) {
      super(props);
      this.init();
   }

   componentDidMount() {
      const { prefilledCode } = this.props;
      console.log("prefilledCode", prefilledCode);
      if (prefilledCode) {
         console.log("PrefilledCodeList", [...this.PrefilledCodeList.values()]);
         prefilledCode.map(eachPrefilledCode => {
            this.PrefilledCodeList.set(eachPrefilledCode.prefilledcode_id, {
               prefilledcode_id: eachPrefilledCode.id,
               fileName: eachPrefilledCode.fileName,
               languageType: eachPrefilledCode.languageType,
               content: eachPrefilledCode.content,
            });
         });
      }
      else {
         this.addCodeEditor();
         this.addCodeEditor();
      }
   }

   @action.bound
   init() {
      this.PrefilledCodeList = new Map();
      this.errorMessage = '';
   }

   addCodeEditor = () => {
      console.log("Added");
      const editorObject = {
         prefilledcode_id: null,
         code_type: '',
         code: '',
         filename: '',
         delete_id: Math.random().toString()
      };
      this.PrefilledCodeList.set(editorObject.delete_id, new PrefilledCodeModel(editorObject));
   }

   onChangeFileName = (value, id) => {
      const { PrefilledCodeList } = this;
      const PrefilledCodeListOfArray = [...PrefilledCodeList.values()];
      PrefilledCodeListOfArray.map(eachEditor => {
         if (eachEditor.id === id) {
            eachEditor.fileName = value;
         }
      });
      PrefilledCodeListOfArray.map(eachEditor => {
         console.log('finalfileName', eachEditor.fileName);
      });
   }

   onChangeLanguageType = (value, id) => {
      const { PrefilledCodeList } = this;
      const PrefilledCodeListOfArray = [...PrefilledCodeList.values()];
      PrefilledCodeListOfArray.map(eachEditor => {
         if (eachEditor.id === id) {
            eachEditor.languageType = value;
         }
      });
      PrefilledCodeListOfArray.map(eachEditor => {
         console.log('finalLanguage', eachEditor.languageType);
      });
   }

   onChangeContent = (value, id) => {
      const { PrefilledCodeList } = this;
      const PrefilledCodeListOfArray = [...PrefilledCodeList.values()];
      PrefilledCodeListOfArray.map(eachEditor => {
         if (eachEditor.id === id) {
            eachEditor.content = value;
         }
      });
      PrefilledCodeListOfArray.map(eachEditor => {
         console.log('Finalcontent', eachEditor.content);
      });
   }

   onRemoveEditorBox = (event) => {
      this.PrefilledCodeList.delete(event.target.id);
   }

   renderCodeEditors = () => {
      const { PrefilledCodeList, onChangeFileName, onChangeLanguageType, onChangeContent, onRemoveEditorBox, } = this;
      const PrefilledCodeListOfArray = [...PrefilledCodeList.values()];
      return PrefilledCodeListOfArray.map(eachEditorBox => {
         return <EditorBox 
         key={eachEditorBox.id} 
         editorBox={eachEditorBox}                                        
         onRemoveEditorBox={onRemoveEditorBox} 
         onChangeLanguageType={onChangeLanguageType} 
         onChangeFileName={onChangeFileName}
         onChangeContent={onChangeContent}
         />;
      });
   }

   onSuccess = () => {
      console.log("success");
      const { changeSelectedTask } = this.props;
      toast.warn('Successfully, You have Saved the Prefilled Code');
      toast.success('If you want to add another Prefilled Code, please click on the Add button');
      this.PrefilledCodeList = new Map();
   }

   onFailure = () => {
      const { getUserSignInAPIError: apiError } = this.props;
      if (apiError !== null && apiError !== undefined) {
         this.errorMessage = apiError;
      }
   }


   saveThePrefilledCode = () => {
      if ([...this.PrefilledCodeList.values()].length === 0) {
         toast.error('Please Add atleast one Prefilled Code to save the data');
         this.errorMessage = 'Please enter Text';
      }
      else {
         console.log("Length", [...this.PrefilledCodeList.values()].length);
         console.log("saved", this.PrefilledCodeList);
         const { savePreFilledList } = this.props;
         const { onSuccess, onFailure } = this;
         const PrefilledCodeListOfArray = [...this.PrefilledCodeList.values()];
         const filledPostDataList = {
            prefilledcode_details: []
         };
         PrefilledCodeListOfArray.map(eachEditorBox => {
            filledPostDataList.prefilledcode_details.push({
               "prefilledcode_id": eachEditorBox.prefilledcode_id,
               "code_type": eachEditorBox.languageType,
               "code": eachEditorBox.content,
               "filename": eachEditorBox.fileName
            });
         });
         console.log(filledPostDataList);
         savePreFilledList(filledPostDataList, onSuccess, onFailure);
      }
   }


   render() {
      const { saveThePrefilledCode, addCodeEditor, renderCodeEditors, errorMessage } = this;
      return (
         <PrefilledCodeView>
            <div>
               {renderCodeEditors()}
            </div>
            <Buttons>
               <AddButton addCodeEditor = {addCodeEditor}/>
               <SaveButton saveThePrefilledCode={saveThePrefilledCode}/>
            </Buttons>
         </PrefilledCodeView>
      );
   }
}

export { PrefilledCode };
