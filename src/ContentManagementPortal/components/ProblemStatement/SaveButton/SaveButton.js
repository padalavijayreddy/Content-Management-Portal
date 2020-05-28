import React from 'react';
import { Save, Button } from './SaveButtonStyle';
import { save } from '../../../../i18n/strings';

class SaveButton extends React.Component {
    render() {
        //const { saveTheFields } = this.props;
        return (
            <Save>
                <Button>{save.saveButton}</Button>
            </Save>
        );
    }
}

export { SaveButton };
