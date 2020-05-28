import React from 'react';
import { Add, Button } from './AddButtonStyle';
import { Addbutton } from '../../../../i18n/strings';

class AddButton extends React.Component {
    render() {
        const { onAddEditorBox } = this.props;
        return (
            <Add onClick={onAddEditorBox}>
                <Button>{Addbutton.Addbutton}</Button>
            </Add>
        );
    }
}

export { AddButton };
