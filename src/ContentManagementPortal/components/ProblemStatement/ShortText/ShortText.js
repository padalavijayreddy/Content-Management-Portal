import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { problemStatement } from '../../../../i18n/strings';
import { ShortTextView, ShortTextLabel, ShortTextInput } from './ShortTextStyle';

@observer
class ShortText extends React.Component {
    render() {
        const { shortText, onChangeShortText } = this;
        return (
            <ShortTextView>
                <ShortTextLabel>{problemStatement.shortText}</ShortTextLabel>
                <ShortTextInput onChange={onChangeShortText} value={shortText} placeholder={problemStatement.shortTextPlaceholder}/>
            </ShortTextView>
        );
    }
}

export { ShortText };
