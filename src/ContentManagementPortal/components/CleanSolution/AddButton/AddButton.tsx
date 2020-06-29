import React from 'react';
import { Add, Button } from './AddButtonStyle';
import { Addbutton } from '../../../../CommonModule/i18n/strings.json';

interface AddButtonProps{
    addCodeEditor : () => void
}

class AddButton extends React.Component<AddButtonProps> {
    render() {
        const { addCodeEditor } = this.props;
        return (
            <Add onClick={addCodeEditor}>
                <Button>{Addbutton.Addbutton}</Button>
            </Add>
        );
    }
}

export { AddButton };
