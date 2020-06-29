import { observable, action } from 'mobx'

class HintsModel {
   @observable title
   @observable description
   @observable isActive

   constructor(data) {
      this.id = data.hint_id
      this.title = data.title
      this.selectedMode = data.content_type
      this.description = data.content
      this.order = data.order_id
      this.isActive = data.isActive
   }
}

export default HintsModel
