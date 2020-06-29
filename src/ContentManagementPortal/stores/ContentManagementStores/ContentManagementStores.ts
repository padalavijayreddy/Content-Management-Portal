import { observable, action, computed } from 'mobx'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import CodingQuestionsModel from '../../models/CodingQuestionsModel'
import CodingQuestionDetailsModel from '../../models/CodingQuestionDetailsModel'
import {
   CodingQuestionDetails,
   CodingQuestionObject,
   CodingQuestionsListType
} from '../../stores/types'
import ContentManagementServices from '../../services/ContentManagementServices'

class ContentManagementStores {
   @observable question_id!: number
   @observable selectedTask!: string
   contentManagementAPI: ContentManagementServices
   @observable addButton!: boolean

   @observable codingQuestionDetails!: any | CodingQuestionDetails
   @observable getCodingQuestionDetailsAPIStatus!: APIStatus
   @observable getCodingQuestionDetailsAPIError!: Error | null

   @observable codingQuestionsList!: Map<number, CodingQuestionsModel>
   @observable getCodingQuestionsListAPIStatus!: APIStatus
   @observable getCodingQuestionsListAPIError!: Error | null

   @observable postUserDataAPIStatus!: APIStatus
   @observable postUserDataAPIError!: null

   @observable postSolutionDataAPIStatus!: APIStatus
   @observable postSolutionDataAPIError!: null

   @observable postPrefilledDataAPIStatus!: APIStatus
   @observable postPrefilledDataAPIError!: null

   @observable postSolutionApproachDataAPIStatus!: APIStatus
   @observable postSolutionApproachDataAPIError!: null

   @observable postCleanSolutionDataAPIStatus!: APIStatus
   @observable postCleanSolutionDataAPIError!: null

   @observable searchText!: string
   @observable sortBy!: string

   @observable currentPagePosition!: number
   @observable questionsLimit!: number
   totalQuestions!: number
   totalCountOfPages!: number

   constructor(contentManagementAPI: ContentManagementServices) {
      this.contentManagementAPI = contentManagementAPI
      this.init()
   }

   @action.bound
   init() {
      this.codingQuestionsList = new Map()
      this.codingQuestionDetails = null

      this.getCodingQuestionsListAPIStatus = API_INITIAL
      this.getCodingQuestionsListAPIError = null

      this.getCodingQuestionDetailsAPIStatus = API_INITIAL
      this.getCodingQuestionDetailsAPIError = null

      this.postUserDataAPIStatus = API_INITIAL
      this.postUserDataAPIError = null

      this.getCodingQuestionsListAPIStatus = API_INITIAL
      this.getCodingQuestionsListAPIError = null

      this.postSolutionDataAPIStatus = API_INITIAL
      this.postSolutionDataAPIError = null

      this.postPrefilledDataAPIStatus = API_INITIAL
      this.postPrefilledDataAPIError = null

      this.postSolutionApproachDataAPIStatus = API_INITIAL
      this.postSolutionApproachDataAPIError = null

      this.postCleanSolutionDataAPIStatus = API_INITIAL
      this.postCleanSolutionDataAPIError = null

      this.selectedTask = 'Problem Statement'
      this.searchText = ''
      this.sortBy = 'Status'

      this.totalCountOfPages = 0
      this.totalQuestions = 0
      this.questionsLimit = 9
      this.currentPagePosition = 1
   }

   changeSelectedTask = (selectedTask: string) => {
      this.selectedTask = selectedTask
      console.log(this.selectedTask)
   }

   addCodingQuestion = () => {
      this.addButton = !this.addButton
      console.log('addCodingQuestion', this.addButton)
   }

   @action.bound
   onChangeSearchText = changedText => {
      console.log(changedText)
      this.searchText = changedText
   }

   @action.bound
   onChangeSortBy(changedFormat) {
      console.log(changedFormat)
      this.sortBy = changedFormat
   }

   @action.bound
   filterTitles(title) {
      console.log('1', title)
      return title.toLowerCase().includes(this.searchText.toLowerCase())
   }

   //CodingQuestionsList

   @action.bound
   getCodingQuestionsList() {
      const { questionsLimit: limit } = this
      const offset = this.currentPagePosition - 1
      console.log('offset', 'limit', offset, limit)
      const CodingListPromise = this.contentManagementAPI.codingQuestionsListApi(
         { offset, limit }
      )
      return bindPromiseWithOnSuccess(CodingListPromise)
         .to(
            this.setGetCodingQuestionsListAPIStatus,
            this.setGetCodingQuestionsListAPIResponse
         )
         .catch(this.setGetCodingQuestionsListAPIError)
   }

   @action.bound
   deleteCodingQuestion(question_id) {
      this.codingQuestionsList.delete(question_id)
   }

   @action.bound
   setGetCodingQuestionsListAPIStatus(apiStatus) {
      this.getCodingQuestionsListAPIStatus = apiStatus
   }

   @action.bound
   setGetCodingQuestionsListAPIError(apiError) {
      this.getCodingQuestionsListAPIError = apiError
      alert(apiError)
   }

   @action.bound
   setGetCodingQuestionsListAPIResponse(
      apiResponse: CodingQuestionsListType | null
   ) {
      this.codingQuestionsList.clear()
      const {
         total_coding_questions,
         question_details
      } = apiResponse as CodingQuestionsListType
      if (!(question_details === undefined || question_details.length <= 0))
         question_details.forEach((data, index) =>
            this.codingQuestionsList.set(
               data.question_id,
               new CodingQuestionsModel({ ...data, index })
            )
         )
      else this.codingQuestionsList = new Map()
      console.log('list', this.codingQuestionsList)
      this.totalQuestions = total_coding_questions
      this.totalCountOfPages = Math.ceil(
         total_coding_questions / this.questionsLimit
      )
      console.log('questions', this.totalQuestions)
      console.log('pages', this.totalCountOfPages)
   }

   currentPagePositionUpdater = positionNumber =>
      (this.currentPagePosition = positionNumber)

   @action.bound
   currentPagePositionIncrementor() {
      const { currentPagePosition, totalCountOfPages } = this
      currentPagePosition <= totalCountOfPages &&
         (this.currentPagePosition += 1) &&
         this.getCodingQuestionsList()
   }

   @action.bound
   currentPagePositionDecrementor() {
      const { currentPagePosition } = this
      currentPagePosition > 1 &&
         (this.currentPagePosition -= 1) &&
         this.getCodingQuestionsList()
   }

   @action.bound
   onDeleteAll() {
      const questionsList = [...this.codingQuestionsList.values()]
      questionsList.forEach(
         ({ localChecked, question_id }) =>
            localChecked && this.codingQuestionsList.delete(question_id)
      )
   }

   @computed
   get questions() {
      return this.sortedAndFilteredQuestions
   }

   @computed
   get sortedAndFilteredQuestions() {
      const { codingQuestionsList, filterTitles, searchText } = this
      console.log(this.codingQuestionsList)
      let data = [...codingQuestionsList.values()]
      console.log(data)
      data = data.filter(question => filterTitles(question.short_title))
      return data
   }

   @computed
   get totalNoOfQuestionsDisplayed() {
      return this.questions.length
   }

   //CodingQuestionDetails

   @action.bound
   getCodingQuestionDetails(question_id) {
      console.log('question details', question_id)
      this.question_id = question_id
      const CodingQuestionDetailPromise = this.contentManagementAPI.getCodingQuestionDetailsApi(
         question_id
      )
      return bindPromiseWithOnSuccess(CodingQuestionDetailPromise)
         .to(this.setGetCodingQuestionDetailsAPIStatus, response => {
            this.setGetCodingQuestionDetailsAPIResponse(response)
         })
         .catch(error => {
            this.setGetCodingQuestionDetailsAPIError(error)
         })
   }

   @action.bound
   setGetCodingQuestionDetailsAPIStatus(apiStatus) {
      this.getCodingQuestionDetailsAPIStatus = apiStatus
   }

   @action.bound
   setGetCodingQuestionDetailsAPIError(apiError) {
      this.getCodingQuestionDetailsAPIError = apiError
   }

   @action.bound
   setGetCodingQuestionDetailsAPIResponse(apiResponse) {
      console.log('codingQuestionDetails', apiResponse)
      this.codingQuestionDetails = new CodingQuestionDetailsModel(apiResponse)
   }

   //Problem Statement

   @action.bound
   saveUserData(postData, onSuccess, onFailure) {
      console.log('store 1', postData)
      const userDataPromise = this.contentManagementAPI.postDataApi(postData)
      return bindPromiseWithOnSuccess(userDataPromise)
         .to(this.setPostUserDataAPIStatus, response => {
            this.setPostUserDataAPIResponse(response)
            onSuccess()
         })
         .catch(error => {
            this.setPostUserDataAPIError(error)
            onFailure()
         })
   }

   @action.bound
   setPostUserDataAPIStatus(apiStatus) {
      this.postUserDataAPIStatus = apiStatus
   }

   @action.bound
   setPostUserDataAPIError(apiError) {
      this.postUserDataAPIError = apiError
   }

   @action.bound
   setPostUserDataAPIResponse(savedResponse) {
      console.log('Response', savedResponse)
      console.log('QuestionId', savedResponse.question_id)
      this.question_id = savedResponse.question_id
   }

   //Rough Solution

   @action.bound
   saveRoughSolutionList(postRoughSolutionData, onSuccess, onFailure) {
      const roughSolutionPromise = this.contentManagementAPI.postRoughSolutionApi(
         this.question_id,
         postRoughSolutionData
      )
      return bindPromiseWithOnSuccess(roughSolutionPromise)
         .to(this.setpostSolutionDataAPIStatus, response => {
            this.setPostSolutionDataAPIResponse(response)
            onSuccess()
         })
         .catch(error => {
            this.setpostSolutionDataAPIError(error)
            onFailure()
         })
   }

   @action.bound
   setpostSolutionDataAPIStatus(apiStatus) {
      this.postSolutionDataAPIStatus = apiStatus
   }

   @action.bound
   setpostSolutionDataAPIError(apiError) {
      this.postSolutionDataAPIError = apiError
   }

   @action.bound
   setPostSolutionDataAPIResponse(apiResponse) {
      console.log(apiResponse)
   }

   //Test Cases

   //Prefilled CODE

   @action.bound
   savePreFilledList(postPrefilledData, onSuccess, onFailure) {
      const prefilledPromise = this.contentManagementAPI.postPrefilledApi(
         this.question_id,
         postPrefilledData
      )
      return bindPromiseWithOnSuccess(prefilledPromise)
         .to(this.setPostPrefilledDataAPIStatus, response => {
            this.setPostPrefilledDataAPIResponse(response)
            onSuccess()
         })
         .catch(error => {
            this.setPostPrefilledDataAPIError(error)
            onFailure()
         })
   }

   @action.bound
   setPostPrefilledDataAPIStatus(apiStatus) {
      this.postPrefilledDataAPIStatus = apiStatus
   }

   @action.bound
   setPostPrefilledDataAPIError(apiError) {
      this.postPrefilledDataAPIError = apiError
   }

   @action.bound
   setPostPrefilledDataAPIResponse(apiResponse) {
      console.log(apiResponse)
   }

   //Solution Approach
   @action.bound
   saveUserSolution(postSolutionApproach, onSuccess, onFailure) {
      const solutionApproachPromise = this.contentManagementAPI.postSolutionApproachApi(
         this.question_id,
         postSolutionApproach
      )
      return bindPromiseWithOnSuccess(solutionApproachPromise)
         .to(this.setPostSolutionApproachDataAPIStatus, response => {
            this.setPostSolutionApproachDataAPIResponse(response)
            onSuccess()
         })
         .catch(error => {
            this.setPostSolutionApproachDataAPIError(error)
            onFailure()
         })
   }

   @action.bound
   setPostSolutionApproachDataAPIStatus(apiStatus) {
      this.postSolutionApproachDataAPIStatus = apiStatus
   }

   @action.bound
   setPostSolutionApproachDataAPIError(apiError) {
      this.postSolutionApproachDataAPIError = apiError
   }

   @action.bound
   setPostSolutionApproachDataAPIResponse(apiResponse) {
      console.log('solution approach', apiResponse)
   }

   //Clean Solution

   @action.bound
   saveCleanSolutionList(postCleanSolution, onSuccess, onFailure) {
      const cleanSolutionPromise = this.contentManagementAPI.postCleanSolutionApi(
         this.question_id,
         postCleanSolution
      )
      return bindPromiseWithOnSuccess(cleanSolutionPromise)
         .to(this.setPostCleanSolutionDataAPIStatus, response => {
            this.setPostCleanSolutionDataAPIResponse(response)
            onSuccess()
         })
         .catch(error => {
            this.setPostCleanSolutionDataAPIError(error)
            onFailure()
         })
   }

   @action.bound
   setPostCleanSolutionDataAPIStatus(apiStatus) {
      this.postCleanSolutionDataAPIStatus = apiStatus
   }

   @action.bound
   setPostCleanSolutionDataAPIError(apiError) {
      this.postCleanSolutionDataAPIError = apiError
   }

   @action.bound
   setPostCleanSolutionDataAPIResponse(apiResponse) {
      console.log(apiResponse)
   }

   @action.bound
   clearStore() {
      this.init()
   }
}

export { ContentManagementStores }
