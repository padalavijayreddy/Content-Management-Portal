import { observable, action } from 'mobx'

class PrefilledCodeModel {
   @observable id
   @observable fileName
   @observable languageType
   @observable content

   constructor(data) {
      this.prefilledcode_id = data.prefilledcode_id
      this.languageType = data.code_type
      this.content = data.code
      this.fileName = data.filename
      this.id = data.delete_id
   }
}

export default PrefilledCodeModel
