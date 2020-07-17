import React from 'react'
import { observer } from 'mobx-react'
import { observable, reaction, autorun } from 'mobx'
import {
   QuestionsView,
   Card,
   CircleTick,
   CircleField,
   QuestionsField,
   QuestionStyle,
   DeleteEditField,
   Field,
   AllFields
} from './QuestionStyle'
import { codingQuestions } from '../../../../CommonModule/i18n/strings'
import { withRouter } from 'react-router-dom'
import { AiTwotoneEdit } from 'react-icons/ai'
import { AiTwotoneDelete, AiFillCaretRight } from 'react-icons/ai'

@observer
class Question extends React.Component {
   @observable isRemoved = false
   @observable isShowCheckBox = false

   disposeCheckedAutorun = autorun(() => {
      const {
         questionItem: { onToggleCheckedValue },
         isChecked
      } = this.props
      onToggleCheckedValue(isChecked)
      this.isShowCheckBox = isChecked ? true : false
   })

   navigateToQuestionDetailsPage = e => {
      this.props.history.push(
         `/Content-Management-Portal/coding-question/${this.props.questionItem.question_id}`
      )
   }

   circleTick = () => {
      const { localChecked, onToggleCheckedValue } = this.props.questionItem
      onToggleCheckedValue(!localChecked)
   }

   deleteQuestion = () => {
      const { questionItem, deleteCodingQuestion } = this.props
      const { question_id } = questionItem
      deleteCodingQuestion(question_id)
   }

   render() {
      const {
         props: { questionItem },
         circleTick
      } = this
      const { localChecked } = this.props.questionItem
      return (
         <QuestionsView
            onMouseEnter={() => (this.isShowCheckBox = true)}
            onMouseLeave={() => !localChecked && (this.isShowCheckBox = false)}
            onAnimationEnd={this.deleteQuestion}
            isRemoved={this.isRemoved}
            odd={questionItem.isAlternate}
            onClick={this.navigateToQuestionDetailsPage}
         >
            <div className='flex w-1/3 justify-center'>
               {this.isShowCheckBox ? (
                  <CircleField onClick={e => e.stopPropagation()}>
                     <CircleTick
                        onClick={circleTick}
                        checked={localChecked}
                        type='checkbox'
                     ></CircleTick>
                  </CircleField>
               ) : (
                  <CircleField>
                     <AiFillCaretRight />
                  </CircleField>
               )}

               <QuestionsField>
                  <QuestionStyle>{questionItem.short_title}</QuestionStyle>
               </QuestionsField>
            </div>
            <AllFields>
               <Field>
                  {questionItem.roughsolution ? (
                     <img
                        src={codingQuestions.questionTrueImageURL}
                        alt={codingQuestions.questionTrueImageLogo}
                     />
                  ) : (
                     <img
                        src={codingQuestions.questionFalseImageURL}
                        alt={codingQuestions.questionFalseImageLogo}
                     />
                  )}
               </Field>
               <Field>
                  {questionItem.testcase ? (
                     <img
                        src={codingQuestions.questionTrueImageURL}
                        alt={codingQuestions.questionTrueImageLogo}
                     />
                  ) : (
                     <img
                        src={codingQuestions.questionFalseImageURL}
                        alt={codingQuestions.questionFalseImageLogo}
                     />
                  )}
               </Field>
               <Field>
                  {questionItem.prefilledcode ? (
                     <img
                        src={codingQuestions.questionTrueImageURL}
                        alt={codingQuestions.questionTrueImageLogo}
                     />
                  ) : (
                     <img
                        src={codingQuestions.questionFalseImageURL}
                        alt={codingQuestions.questionFalseImageLogo}
                     />
                  )}
               </Field>
               <Field>
                  {questionItem.solutionapproach ? (
                     <img
                        src={codingQuestions.questionTrueImageURL}
                        alt={codingQuestions.questionTrueImageLogo}
                     />
                  ) : (
                     <img
                        src={codingQuestions.questionFalseImageURL}
                        alt={codingQuestions.questionFalseImageLogo}
                     />
                  )}
               </Field>
               <Field>
                  {questionItem.cleansolution ? (
                     <img
                        src={codingQuestions.questionTrueImageURL}
                        alt={codingQuestions.questionTrueImageLogo}
                     />
                  ) : (
                     <img
                        src={codingQuestions.questionFalseImageURL}
                        alt={codingQuestions.questionFalseImageLogo}
                     />
                  )}
               </Field>
               <DeleteEditField onClick={e => e.stopPropagation()}>
                  <button
                     onClick={this.navigateToQuestionDetailsPage}
                     className='cursor-pointer hover:text-white'
                  >
                     <AiTwotoneEdit />
                  </button>
                  <button
                     id='removeBTN'
                     onClick={() => (this.isRemoved = true)}
                     className='cursor-pointer hover:text-white'
                  >
                     <AiTwotoneDelete />{' '}
                  </button>
               </DeleteEditField>
            </AllFields>
         </QuestionsView>
      )
   }
}

export default withRouter(Question)
