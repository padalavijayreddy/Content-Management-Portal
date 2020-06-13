import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { CleanSolutionView, Buttons, SaveButtonField, ErrorMessage } from './CleanSolutionStyle';
import { EditorBox } from './EditorBox';
import { SaveButton } from './SaveButton';
import { AddButton } from './AddButton';
import CleanSolutionModel from '../../models/CleanSolutionModel';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
    position: 'bottom-center',
    hideProgressBar: true,
});

@observer
class CleanSolution extends React.Component {

    @observable cleanSolutionList;

    constructor(props) {
        super(props);
        this.init();
    }

    componentDidMount() {
        const { cleanSolution } = this.props;
        console.log("cleanSolution", cleanSolution);
        if (cleanSolution) {
            console.log("cleanSolutionList", [...this.cleanSolutionList.values()]);
            cleanSolution.map(eachCleanSolution => {
                this.cleanSolutionList.set(eachCleanSolution.cleansolution_id, {
                    cleansolution_id: eachCleanSolution.id,
                    fileName: eachCleanSolution.fileName,
                    languageType: eachCleanSolution.languageType,
                    content: eachCleanSolution.content,
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
        this.cleanSolutionList = new Map();
        this.errorMessage = '';
    }

    addCodeEditor = () => {
        console.log("Added");
        const editorObject = {
            cleansolution_id: null,
            code_type: '',
            code: '',
            filename: '',
            delete_id: Math.random().toString()
        };
        this.cleanSolutionList.set(editorObject.delete_id, new CleanSolutionModel(editorObject));
    }

    onChangeFileName = (value, id) => {
        const { cleanSolutionList } = this;
        const cleanSolutionListOfArray = [...cleanSolutionList.values()];
        cleanSolutionListOfArray.map(eachEditor => {
            if (eachEditor.id === id) {
                eachEditor.fileName = value;
            }
        });
        cleanSolutionListOfArray.map(eachEditor => {
            console.log('finalfileName', eachEditor.fileName);
        });
    }

    onChangeLanguageType = (value, id) => {
        const { cleanSolutionList } = this;
        const cleanSolutionListOfArray = [...cleanSolutionList.values()];
        cleanSolutionListOfArray.map(eachEditor => {
            if (eachEditor.id === id) {
                eachEditor.languageType = value;
            }
        });
        cleanSolutionListOfArray.map(eachEditor => {
            console.log('finalLanguage', eachEditor.languageType);
        });
    }

    onChangeContent = (value, id) => {
        const { cleanSolutionList } = this;
        const cleanSolutionListOfArray = [...cleanSolutionList.values()];
        cleanSolutionListOfArray.map(eachEditor => {
            if (eachEditor.id === id) {
                eachEditor.content = value;
            }
        });
        cleanSolutionListOfArray.map(eachEditor => {
            console.log('Finalcontent', eachEditor.content);
        });
    }

    onRemoveEditorBox = (event) => {
        this.cleanSolutionList.delete(event.target.id);
    }

    renderCodeEditors = () => {
        const { cleanSolutionList, onChangeFileName, onChangeLanguageType, onChangeContent, onRemoveEditorBox, } = this;
        const cleanSolutionListOfArray = [...cleanSolutionList.values()];
        return cleanSolutionListOfArray.map(eachEditorBox => {
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
        toast.warn('Successfully, You have Saved the Clean Solution Code');
        toast.success('If you want to add another Clean solution, please click on the Add button');
        this.cleanSolutionList = new Map();
    }

    onFailure = () => {
        const { getUserSignInAPIError: apiError } = this.props;
        if (apiError !== null && apiError !== undefined) {
            this.errorMessage = apiError;
        }
    }


    saveTheCleanSolution = () => {
        if ([...this.cleanSolutionList.values()].length === 0) {
            toast.error('Please Add atleast one Clean Code to save the data');
            this.errorMessage = 'Please enter Text';
        }
        else {
            console.log("Length", [...this.cleanSolutionList.values()].length);
            console.log("saved", this.cleanSolutionList);
            const { saveCleanSolutionList } = this.props;
            const { onSuccess, onFailure } = this;
            const cleanSolutionListOfArray = [...this.cleanSolutionList.values()];
            const filledCleanSolutionList = {
                cleansolution_details: []
            };
            cleanSolutionListOfArray.map(eachEditorBox => {
                filledCleanSolutionList.cleansolution_details.push({
                    "cleansolution_id": eachEditorBox.cleansolution_id,
                    "code_type": eachEditorBox.languageType,
                    "code": eachEditorBox.content,
                    "filename": eachEditorBox.fileName
                });
            });
            console.log(filledCleanSolutionList);
            saveCleanSolutionList(filledCleanSolutionList, onSuccess, onFailure);
        }
    }


    render() {
        const { saveTheCleanSolution, addCodeEditor, renderCodeEditors, errorMessage } = this;
        return (
            <CleanSolutionView>
                <div>
                    {renderCodeEditors()}
                </div>
                <Buttons>
                   <AddButton addCodeEditor = {addCodeEditor}/>
                   <SaveButton saveTheCleanSolution={saveTheCleanSolution}/>
                </Buttons>
            </CleanSolutionView>
        );
    }
}

export { CleanSolution };
