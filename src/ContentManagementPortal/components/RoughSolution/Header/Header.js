import React from 'react';
import { observer } from 'mobx-react';
import { HeaderView, LanguageSelect, FileName, FileNameBox, DeleteIcon, SelectFields, EditorIcon } from './HeaderStyle';
import { observable, action } from 'mobx';
import { typos } from '../../../../CommonModule/components/styleGuide/Typos';
import { roughSolution } from '../../../../CommonModule/i18n/strings';

@observer
class Header extends React.Component {

    @observable fileName;
    @observable selectLanguage;

    componentDidMount() {
        const { editorBox } = this.props;
        console.log("editorboxInHeader", editorBox);
        if (editorBox) {
            this.fileName = editorBox.fileName;
            this.selectLanguage = editorBox.languageType;
        }
        else {
            this.fileName = '';
            this.selectLanguage = '';
        }
    }

    onChangeValue = (event) => {
        const { onChangeFileName, id } = this.props;
        this.fileName = event.target.value;
        onChangeFileName(this.fileName, id);
    }

    onChangeLanguageValue = (event) => {
        const { onChangeLanguageType, id } = this.props;
        this.selectLanguage = event.target.value;
        onChangeLanguageType(this.selectLanguage, id);
    }

    render() {
        const { onRemoveEditorBox, id, onChangeLanguageType } = this.props;
        return (
            <HeaderView>
                <FileNameBox>
                    <FileName id={id} value={this.fileName} onChange={this.onChangeValue} placeholder={roughSolution.fileNameIncludeExtension}/>
                </FileNameBox>
                <SelectFields>
                    <LanguageSelect data-testid={roughSolution.Headertestid} id={id} value={this.selectLanguage} onChange={this.onChangeLanguageValue}>
                        <option>{roughSolution.Language}</option>
                        <option>{roughSolution.C}</option>
                        <option>{roughSolution.Python}</option>
                    </LanguageSelect>
                    <DeleteIcon onClick={onRemoveEditorBox} id={id} src={roughSolution.deleteIconURL} alt={roughSolution.deleteIconAlt}></DeleteIcon>
                    <EditorIcon src={roughSolution.editorIconURL} alt={roughSolution.editorIconAlt}></EditorIcon>
                </SelectFields>
            </HeaderView>
        );
    }
}

export { Header };
