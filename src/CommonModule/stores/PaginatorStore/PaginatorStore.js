import { observable, action, computed } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

export class PaginatorStore {
   @observable limit
   getDataApi
   entityModel

   @observable getApiStatus
   @observable getApiError

   @observable offset
   @observable mapDataObject
   @observable totalCount
   @observable totalCountOfPages

   constructor(props) {
      const { limit, getDataApi, entityModel } = props
      this.limit = limit
      this.getDataApi = getDataApi
      this.entityModel = entityModel
      this.init()
   }

   @action.bound
   init() {
      this.totalCountOfPages = this.totalCount = 0
      this.offset = 0
      this.getApiStatus = API_INITIAL
      this.getApiError = null
      this.mapDataObject = new Map()
   }

   @action.bound
   getData() {
      const { limit, offset, getDataApi } = this
      const paginatedPromise = getDataApi({ offset, limit })
      if (this.mapDataObject.has(offset)) return
      else {
         return bindPromiseWithOnSuccess(paginatedPromise)
            .to(this.setGetApiStatus, response => {
               this.setGetApiResponse(response)
            })
            .catch(error => {
               this.setGetApiError(error)
            })
      }
   }

   @action.bound
   setGetApiResponse(apiResponse) {
      const { offset: key, entityModel } = this
      const { total_coding_questions, question_details } = apiResponse
      const valueData = new Map()

      question_details.forEach((data, index) =>
         valueData.set(data.question_id, new entityModel({ ...data, index }))
      )

      this.totalCount = total_coding_questions
      this.totalCountOfPages = Math.ceil(
         total_coding_questions / this.questionsLimit
      )

      const value = question_details.map(eachData => new entityModel(eachData))
      this.mapDataObject.set(key, value)
   }

   @action.bound
   setGetApiStatus(apiStatus) {
      this.getApiStatus = apiStatus
   }

   @action.bound
   setGetApiError(apiError) {
      console.log('Error', apiError)
      this.getApiError = apiError
   }

   @action.bound
   onChangePage(NumberValue) {
      this.offset = NumberValue
   }

   @computed
   get paginatedData() {
      const { offset } = this
      const data = this.mapDataObject.get(offset)
      return data ? data : new Map()
   }

   @action.bound
   clearStore() {
      this.init()
   }
}
