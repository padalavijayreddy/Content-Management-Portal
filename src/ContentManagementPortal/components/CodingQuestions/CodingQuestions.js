import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { MCQCodingQuestionListButtons } from './MCQCodingQuestionListButtons'
import { CodingQuestionsView } from './CodingQuestionsStyle'

@observer
class CodingQuestions extends React.Component {
   render() {
      const {
         getProjectNameAPIStatus,
         addCodingQuestion,
         currentPagePositionIncrementor,
         currentPagePositionDecrementor,
         currentPagePosition,
         totalCountOfPages,
         doNetworkCalls,
         getCodingQuestionsListAPIStatus,
         getCodingQuestionsListAPIError,
         onChangeSortBy,
         onChangeSearchText,
         codingQuestionsList,
         deleteCodingQuestion,
         onPageChange,
         onDeleteAll
      } = this.props
      return (
         <CodingQuestionsView>
            <MCQCodingQuestionListButtons
               onDeleteAll={onDeleteAll}
               onPageChange={onPageChange}
               deleteCodingQuestion={deleteCodingQuestion}
               getProjectNameAPIStatus={getProjectNameAPIStatus}
               doNetworkCalls={doNetworkCalls}
               getCodingQuestionsListAPIStatus={getCodingQuestionsListAPIStatus}
               getCodingQuestionsListAPIError={getCodingQuestionsListAPIError}
               onChangeSortBy={onChangeSortBy}
               onChangeSearchText={onChangeSearchText}
               addCodingQuestion={addCodingQuestion}
               codingQuestions={codingQuestionsList}
               currentPagePositionIncrementor={currentPagePositionIncrementor}
               currentPagePositionDecrementor={currentPagePositionDecrementor}
               currentPagePosition={currentPagePosition}
               totalCountOfPages={totalCountOfPages}
            />
         </CodingQuestionsView>
      )
   }
}

export { CodingQuestions }
