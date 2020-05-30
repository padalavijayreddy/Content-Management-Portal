import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { Question } from '../Question';


@observer
class RenderCodingQuestionsList extends React.Component {

    renderCodingQuestionsList = () => {
        const { codingQuestions } = this.props;
        const codingQuestionsList = [...codingQuestions.values()];
        return codingQuestionsList.map((eachQuestion) => <Question key={eachQuestion.id} questionItem={eachQuestion} />);
    }

    render() {
        const { AddCodingQuestions, codingQuestionsList } = this.props;
        return (
            <div>
                {this.renderCodingQuestionsList()}
            </div>
        );
    }
}

export { RenderCodingQuestionsList };
