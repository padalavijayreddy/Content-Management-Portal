import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { QuestionsView, CircleTick, CircleField, QuestionsField, QuestionStyle, Field, AllFields } from './QuestionStyle';
import { codingQuestions } from '../../../../CommonModule/i18n/strings';
import { withRouter } from 'react-router-dom';


@observer
class Question extends React.Component {

    navigateToQuestionDetailsPage = () => {
        this.props.history.push(`/Content-Management-Portal/coding-question/${this.props.questionItem.id}`);
    }

    render() {
        const { questionItem } = this.props;
        return (
            <QuestionsView onClick={this.navigateToQuestionDetailsPage}>
                <CircleField>
                    <CircleTick src={codingQuestions.questionsTickURL}></CircleTick>
                </CircleField>
                <QuestionsField>
                    <QuestionStyle>{questionItem.questions}</QuestionStyle>
                </QuestionsField>
                <AllFields>
                <Field>
                    {(questionItem.roughSolution)?
                        <img src={codingQuestions.questionTrueImageURL} alt={codingQuestions.questionTrueImageLogo}/>:
                        <img src={codingQuestions.questionFalseImageURL} alt={codingQuestions.questionFalseImageLogo}/>
                    }
                </Field>
                <Field>
                    {(questionItem.testCases)?
                        <img src={codingQuestions.questionTrueImageURL} alt={codingQuestions.questionTrueImageLogo}/>:
                        <img src={codingQuestions.questionFalseImageURL} alt={codingQuestions.questionFalseImageLogo}/>
                    }
                </Field>
                <Field>
                    {(questionItem.prefilledCode)?
                        <img src={codingQuestions.questionTrueImageURL} alt={codingQuestions.questionTrueImageLogo}/>:
                        <img src={codingQuestions.questionFalseImageURL} alt={codingQuestions.questionFalseImageLogo}/>
                    }
                </Field>
                <Field>
                    {(questionItem.cleanSolution)?
                        <img src={codingQuestions.questionTrueImageURL} alt={codingQuestions.questionTrueImageLogo}/>:
                        <img src={codingQuestions.questionFalseImageURL} alt={codingQuestions.questionFalseImageLogo}/>
                    }
                </Field>
                <Field>
                    {(questionItem.solutionApproach)?
                        <img src={codingQuestions.questionTrueImageURL} alt={codingQuestions.questionTrueImageLogo}/>:
                        <img src={codingQuestions.questionFalseImageURL} alt={codingQuestions.questionFalseImageLogo}/>
                    }
                </Field> 
                </AllFields>
            </QuestionsView>
        );
    }
}

export default withRouter(Question);
