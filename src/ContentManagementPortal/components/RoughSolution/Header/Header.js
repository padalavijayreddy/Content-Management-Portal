import React from 'react';
import { observer } from 'mobx-react';
import { HeaderView, LanguageSelect, FileName, FileNameBox, DeleteIcon, SelectFields, EditorIcon } from './HeaderStyle';
import { observable, action } from 'mobx';
import { typos } from '../../../../CommonModule/components/common/styleGuide/Typos';
import { roughSolution } from '../../../../CommonModule/i18n/strings';

@observer
class Header extends React.Component {

    @observable fileName = '';
    @observable selectLanguage = '';

    onChangeValue = (event) => {
        const { onChangeFileName } = this.props;
        const id = event.target.id;
        this.fileName = event.target.value;
        onChangeFileName(this.fileName, id);
    }

    onChangeLanguageValue = (event) => {
        const { onChangeLanguageType } = this.props;
        const id = event.target.id;
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
                    <LanguageSelect data-testid='select-language' id={id} value={this.selectLanguage} onChange={this.onChangeLanguageValue}>
                        <option>Language</option>
                        <option>HTML</option>
                        <option>MarkDown</option>
                    </LanguageSelect>
                    <DeleteIcon onClick={onRemoveEditorBox} id={id} src={roughSolution.deleteIconURL} alt={roughSolution.deleteIconAlt}></DeleteIcon>
                    <EditorIcon src={roughSolution.editorIconURL} alt={roughSolution.editorIconAlt}></EditorIcon>
                </SelectFields>
            </HeaderView>
        );
    }
}

export { Header };
