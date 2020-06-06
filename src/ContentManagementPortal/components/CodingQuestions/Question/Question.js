import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { QuestionsView, Card, CircleTick, CircleField, QuestionsField, QuestionStyle, Field, AllFields } from './QuestionStyle';
import { codingQuestions } from '../../../../CommonModule/i18n/strings';
import { withRouter } from 'react-router-dom';

@observer
class Question extends React.Component {

    navigateToQuestionDetailsPage = () => {
        this.props.history.push(`/Content-Management-Portal/coding-question/${this.props.questionItem.question_id}`);
    }

    render() {
        const { questionItem } = this.props;
        return (
            <div className="flex">
            <QuestionsView onClick={this.navigateToQuestionDetailsPage}>
                <CircleField>
                    <CircleTick src={codingQuestions.questionsTickURL}></CircleTick>
                </CircleField>
                <QuestionsField>
                    <QuestionStyle>{questionItem.short_title}</QuestionStyle>
                </QuestionsField>
                <AllFields>
                <Field>
                    {(questionItem.roughsolution)?
                        <img src={codingQuestions.questionTrueImageURL} alt={codingQuestions.questionTrueImageLogo}/>:
                        <img src={codingQuestions.questionFalseImageURL} alt={codingQuestions.questionFalseImageLogo}/>
                    }
                </Field>
                <Field>
                    {(questionItem.testcase)?
                        <img src={codingQuestions.questionTrueImageURL} alt={codingQuestions.questionTrueImageLogo}/>:
                        <img src={codingQuestions.questionFalseImageURL} alt={codingQuestions.questionFalseImageLogo}/>
                    }
                </Field>
                <Field>
                    {(questionItem.prefilledcode)?
                        <img src={codingQuestions.questionTrueImageURL} alt={codingQuestions.questionTrueImageLogo}/>:
                        <img src={codingQuestions.questionFalseImageURL} alt={codingQuestions.questionFalseImageLogo}/>
                    }
                </Field>
                <Field>
                    {(questionItem.solutionapproach)?
                        <img src={codingQuestions.questionTrueImageURL} alt={codingQuestions.questionTrueImageLogo}/>:
                        <img src={codingQuestions.questionFalseImageURL} alt={codingQuestions.questionFalseImageLogo}/>
                    }
                </Field> 
                <Field>
                    {(questionItem.cleansolution)?
                        <img src={codingQuestions.questionTrueImageURL} alt={codingQuestions.questionTrueImageLogo}/>:
                        <img src={codingQuestions.questionFalseImageURL} alt={codingQuestions.questionFalseImageLogo}/>
                    }
                </Field>
                </AllFields>
            </QuestionsView>
            <img className="m-2" src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/4f6eaf64-210a-46de-90de-acaf9e7f8102.svg"/>
            </div>
        );
    }
}

export default withRouter(Question);
