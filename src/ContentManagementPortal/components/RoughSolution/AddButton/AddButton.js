import React from 'react';
import { Add, Button } from './AddButtonStyle';
import { Addbutton } from '../../../../CommonModule/i18n/strings';

class AddButton extends React.Component {
    render() {
        const { AddCodeEditor } = this.props;
        return (
            <Add onClick={AddCodeEditor}>
                <Button>{Addbutton.Addbutton}</Button>
            </Add>
        );
    }
}

export { AddButton };
