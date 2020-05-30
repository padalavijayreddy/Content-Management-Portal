import React from 'react';
import { Save, Button } from './SaveButtonStyle';
import { save } from '../../../../CommonModule/i18n/strings';

class SaveButton extends React.Component {
    render() {
        const { saveTheRoughSolution } = this.props;
        return (
            <Save onClick={ saveTheRoughSolution }>
                <Button>{save.saveButton}</Button>
            </Save>
        );
    }
}

export { SaveButton };
