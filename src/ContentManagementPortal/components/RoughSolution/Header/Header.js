import React from 'react';
import { observer } from 'mobx-react';
import { HeaderView, LanguageSelect, FileName, FileNameBox, DeleteIcon, SelectFields, EditorIcon } from './HeaderStyle';
import { observable, action } from 'mobx';
import { typos } from '../../../../components/common/styleGuide/Typos';
import { roughSolution } from '../../../../i18n/strings';

@observer
class Header extends React.Component {
    @observable selectedMode = ''

    @action.bound
    handleChangeState(event) {
        console.log(event.target);
        this.selectedMode = event.target.value;
    }

    render() {
        const { onRemoveEditorBox, id } = this.props;
        console.log(this.props);
        return (
            <HeaderView>
                <FileNameBox>
                    <FileName>{roughSolution.fileNameIncludeExtension}</FileName>
                </FileNameBox>
                <SelectFields>
                    <LanguageSelect onChange={this.handleChangeState}>
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
