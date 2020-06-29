import { observable, action } from 'mobx'
import { rough_solutions } from '../../stores/types'

class RoughSolutionModel {
   @observable fileName: string
   @observable languageType: string
   @observable content: string
   @observable roughsolution_id: number
   @observable id: number

   constructor(data: rough_solutions) {
      this.roughsolution_id = data.roughsolution_id
      this.languageType = data.code_type
      this.content = data.code
      this.fileName = data.filename
      this.id = data.delete_Id
   }
}

export default RoughSolutionModel
