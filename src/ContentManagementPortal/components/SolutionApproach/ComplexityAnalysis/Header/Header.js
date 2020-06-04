import React from 'react';
import { observer } from 'mobx-react';
import { HeaderView, LanguageSelect, FileName, FileNameBox, DeleteIcon, SelectFields, EditorIcon } from './HeaderStyle';
import { observable, action } from 'mobx';
import { typos } from '../../../../../CommonModule/components/styleGuide/Typos';
import { roughSolution } from '../../../../../CommonModule/i18n/strings';

@observer
class Header extends React.Component {
    render() {
        const { handleChangeAnalysisState, complexitySelectedMode } = this.props;
        return (
            <HeaderView>
                <SelectFields>
                    <LanguageSelect data-testid='select-language' value={complexitySelectedMode} onChange={handleChangeAnalysisState}>
                        <option>Text</option>
                        <option>HTML</option>
                        <option>MarkDown</option>
                    </LanguageSelect>
                    <DeleteIcon src={roughSolution.deleteIconURL} alt={roughSolution.deleteIconAlt}></DeleteIcon>
                    <EditorIcon src={roughSolution.editorIconURL} alt={roughSolution.editorIconAlt}></EditorIcon>
                </SelectFields>
            </HeaderView>
        );
    }
}

export { Header };
