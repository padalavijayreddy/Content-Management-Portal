import { observable, action } from 'mobx'
import { CodingQuestionObject } from '../../stores/types'

class CodingQuestionsModel {
   @observable question_id: number = 0
   @observable short_title: string = ''
   @observable roughSolution: boolean = false
   @observable testCases: boolean = false
   @observable prefilledCode: boolean = false
   @observable solutionApproach: boolean = false
   @observable cleanSolution: boolean = false
   @observable hint: boolean = false
   @observable localChecked: boolean = false
   @observable isAlternate: boolean = false

   constructor(data: CodingQuestionObject) {
      this.question_id = data.question_id
      this.short_title = data.short_title
      this.roughSolution = data.roughsolution
      this.testCases = data.testcase
      this.prefilledCode = data.prefilledcode
      this.solutionApproach = data.solutionapproach
      this.cleanSolution = data.cleansolution
      this.hint = data.hint
      this.isAlternate = (data.index as number) % 2 !== 0
      this.localChecked = false
   }

   onToggleCheckedValue = bool => (this.localChecked = bool)
}

export default CodingQuestionsModel
