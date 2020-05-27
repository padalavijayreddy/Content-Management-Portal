import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

@observer
class ProblemStatement extends React.Component {
    @observable shortText;
    @observable problemDescription;

    @action.bound
    changeShortText(event) {
        console.log(event.target);
        this.shortText = event.target.value;
    }

    @action.bound
    changeTextArea(event) {
        console.log(event.target);
        this.problemDescription = event.target.value;
    }

    render() {
        const { shortText, changeShortText, problemDescription } = this;
        return (
            <form>
                <label>SHORT TEXT</label>
                <input value={shortText} onChange={changeShortText}/>
                <textarea id="noter-text-area" name="textarea" value={problemDescription} onChange={this.changeTextArea} />
                <input type="submit" value="Save" />
            </form>
        );
    }
}

export { ProblemStatement };
