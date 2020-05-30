import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { problemStatement } from '../../../../CommonModule/i18n/strings';
import { ShortTextView, ShortTextLabel, ShortTextInput } from './ShortTextStyle';

@observer
class ShortText extends React.Component {
    render() {
        const { shortText, onChangeShortText } = this.props;
        return (
            <ShortTextView>
                <ShortTextLabel>{problemStatement.shortText}</ShortTextLabel>
                <ShortTextInput data-testid='Short-text-input' onChange={onChangeShortText} value={shortText} placeholder={problemStatement.shortTextPlaceholder}/>
            </ShortTextView>
        );
    }
}

export { ShortText };
