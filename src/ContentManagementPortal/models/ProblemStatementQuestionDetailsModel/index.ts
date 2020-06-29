import { observable, action } from 'mobx'
import { problemStatement } from '../../stores/types'

class ProblemStatementQuestionDetailsModel {
   @observable question_id: number
   @observable shortTitle: string
   @observable contentType: string
   @observable problemDescription: string

   constructor(data: problemStatement) {
      this.question_id = data.question_id
      this.shortTitle = data.short_title
      this.contentType = data.problem_description.content_type
      this.problemDescription = data.problem_description.content
   }
}

export default ProblemStatementQuestionDetailsModel
