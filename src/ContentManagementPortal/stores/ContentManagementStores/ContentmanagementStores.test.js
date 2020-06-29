/*
global expect
global jest
*/

import {
   API_SUCCESS,
   API_FAILED,
   API_FETCHING,
   API_INITIAL
} from '@ib/api-constants'

import { ContentManagementAPI } from '../../services/ContentManagementServices/ContentManagementAPI.api'
import getProblemStatementFixtures from '../../fixtures/getProblemStatementFixtures.json'
import getRoughSolutionFixtures from '../../fixtures/getRoughSolutionFixtures.json'
import getCodingQuestionsFixture from '../../fixtures/getCodingQuestionsFixture.json'
import getPrefilledCodeFixtures from '../../fixtures/getPrefilledCodeFixtures.json'
import getCodingQuestionDetailsFixtures from '../../fixtures/getCodingQuestionDetailsFixtures.json'

import { ContentManagementStores } from '.'

describe('ContentManagementStores Tests', () => {
   let contentManagementAPI
   let contentManagementStores

   beforeEach(() => {
      contentManagementAPI = new ContentManagementAPI()
      contentManagementStores = new ContentManagementStores(
         contentManagementAPI
      )
   })

   //CodingQuestionListTestCases//

   it('should test initialising ContentManagement store', () => {
      expect(contentManagementStores.getCodingQuestionsListAPIStatus).toBe(
         API_INITIAL
      )
      expect(contentManagementStores.getCodingQuestionsListAPIError).toBe(null)
   })

   it('should test contentManagementAPI data fetching state', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockAPI = jest.fn()
      mockAPI.mockReturnValue(mockLoadingPromise)
      contentManagementAPI.codingQuestionsListApi = mockAPI

      contentManagementStores.getCodingQuestionsList()
      expect(contentManagementStores.getCodingQuestionsListAPIStatus).toBe(
         API_FETCHING
      )
   })

   it('should test contentManagementAPI success state', async () => {
      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(getCodingQuestionsFixture)
      })
      const mockAPI = jest.fn()
      mockAPI.mockReturnValue(mockSuccessPromise)
      contentManagementAPI.codingQuestionsListApi = mockAPI

      await contentManagementStores.getCodingQuestionsList()
      expect(contentManagementStores.getCodingQuestionsListAPIStatus).toBe(
         API_SUCCESS
      )
   })

   it('should test contentManagementAPI failure state', async () => {
      const mockFailurePromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      })

      const mockAPI = jest.fn()
      mockAPI.mockReturnValue(mockFailurePromise)
      contentManagementAPI.codingQuestionsListApi = mockAPI

      contentManagementStores = new ContentManagementStores(
         contentManagementAPI
      )
      await contentManagementStores.getCodingQuestionsList()

      expect(contentManagementStores.getCodingQuestionsListAPIStatus).toBe(
         API_FAILED
      )
   })

   it('Should test onChangeSearchText Function', () => {
      const searchText = 'cat'
      contentManagementStores.onChangeSearchText(searchText)
      expect(contentManagementStores.searchText).toBe(searchText)
   })

   //CodingQuestionDetails

   it('should test initialising ContentManagement store', () => {
      expect(contentManagementStores.getCodingQuestionDetailsAPIStatus).toBe(
         API_INITIAL
      )
      expect(contentManagementStores.getCodingQuestionDetailsAPIError).toBe(
         null
      )
   })

   it('should test contentManagementAPI data fetching state', () => {
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockAPI = jest.fn()
      mockAPI.mockReturnValue(mockLoadingPromise)
      contentManagementAPI.getCodingQuestionDetailsApi = mockAPI

      contentManagementStores.getCodingQuestionDetails()
      expect(contentManagementStores.getCodingQuestionDetailsAPIStatus).toBe(
         API_FETCHING
      )
   })

   it('should test contentManagementAPI success state', async () => {
      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(getCodingQuestionDetailsFixtures)
      })
      const mockAPI = jest.fn()
      mockAPI.mockReturnValue(mockSuccessPromise)
      contentManagementAPI.getCodingQuestionDetailsApi = mockAPI

      await contentManagementStores.getCodingQuestionDetails()
      expect(contentManagementStores.getCodingQuestionDetailsAPIStatus).toBe(
         API_SUCCESS
      )
   })

   it('should test contentManagementAPI failure state', async () => {
      const mockFailurePromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      })
      const mockAPI = jest.fn()
      mockAPI.mockReturnValue(mockFailurePromise)
      contentManagementAPI.getCodingQuestionDetailsApi = mockAPI
      contentManagementStores = new ContentManagementStores(
         contentManagementAPI
      )
      await contentManagementStores.getCodingQuestionDetails()
      expect(contentManagementStores.getCodingQuestionDetailsAPIStatus).toBe(
         API_FAILED
      )
   })

   //ProblemStatementTextCases//

   it('should test initialising ContentManagement store', () => {
      expect(contentManagementStores.postUserDataAPIStatus).toBe(API_INITIAL)
      expect(contentManagementStores.postUserDataAPIError).toBe(null)
   })

   it('should test contentManagementAPI data fetching state', () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()

      const requestObject = {
         short_title: 'string',
         problem_description: {
            content_type: 'HTML',
            content: 'string'
         }
      }

      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockAPI = jest.fn()
      mockAPI.mockReturnValue(mockLoadingPromise)
      contentManagementAPI.postDataApi = mockAPI

      contentManagementStores.saveUserData(requestObject, onSuccess, onFailure)
      expect(contentManagementStores.postUserDataAPIStatus).toBe(API_FETCHING)
      expect(onSuccess).not.toBeCalled()
      expect(onFailure).not.toBeCalled()
   })

   it('should test contentManagementAPI success state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()

      const requestObject = {
         short_title: 'string',
         problem_description: {
            content_type: 'HTML',
            content: 'string'
         }
      }

      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(getProblemStatementFixtures)
      })
      const mockAPI = jest.fn()
      mockAPI.mockReturnValue(mockSuccessPromise)
      contentManagementAPI.postDataApi = mockAPI

      await contentManagementStores.saveUserData(
         requestObject,
         onSuccess,
         onFailure
      )
      expect(contentManagementStores.postUserDataAPIStatus).toBe(API_SUCCESS)
      expect(onSuccess).toBeCalled()
   })

   it('should test contentManagementAPI failure state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()

      const requestObject = {
         short_title: 'string',
         problem_description: {
            content_type: 'HTML',
            content: 'string'
         }
      }

      const mockFailurePromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      })

      const mockAPI = jest.fn()
      mockAPI.mockReturnValue(mockFailurePromise)
      contentManagementAPI.postDataApi = mockAPI

      contentManagementStores = new ContentManagementStores(
         contentManagementAPI
      )
      await contentManagementStores.saveUserData(
         requestObject,
         onSuccess,
         onFailure
      )

      expect(contentManagementStores.postUserDataAPIStatus).toBe(API_FAILED)
      expect(contentManagementStores.postUserDataAPIError).toBe('error')
      expect(onFailure).toBeCalled()
   })

   //RoughSolutionTestCases//

   it('should test initialising ContentManagement store', () => {
      expect(contentManagementStores.postSolutionDataAPIStatus).toBe(
         API_INITIAL
      )
      expect(contentManagementStores.postSolutionDataAPIError).toBe(null)
   })

   it('should test contentManagementAPI data fetching state', () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()

      const postObject = {
         roughsolution: [
            {
               roughsolution_id: 0,
               code_type: 'C',
               code: 'string',
               filename: 'string'
            }
         ]
      }

      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockAPI = jest.fn()
      mockAPI.mockReturnValue(mockLoadingPromise)
      contentManagementAPI.postRoughSolutionApi = mockAPI

      contentManagementStores.saveRoughSolutionList(
         postObject,
         onSuccess,
         onFailure
      )
      expect(contentManagementStores.postSolutionDataAPIStatus).toBe(
         API_FETCHING
      )
      expect(onSuccess).not.toBeCalled()
      expect(onFailure).not.toBeCalled()
   })

   it('should test contentManagementAPI success state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()

      const postObject = {
         roughsolution: [
            {
               roughsolution_id: 0,
               code_type: 'C',
               code: 'string',
               filename: 'string'
            }
         ]
      }

      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(getRoughSolutionFixtures)
      })
      const mockAPI = jest.fn()
      mockAPI.mockReturnValue(mockSuccessPromise)
      contentManagementAPI.postRoughSolutionApi = mockAPI

      await contentManagementStores.saveRoughSolutionList(
         postObject,
         onSuccess,
         onFailure
      )
      expect(contentManagementStores.postSolutionDataAPIStatus).toBe(
         API_SUCCESS
      )
      expect(onSuccess).toBeCalled()
   })

   it('should test contentManagementAPI failure state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()

      const postObject = {
         roughsolution: [
            {
               roughsolution_id: 0,
               code_type: 'C',
               code: 'string',
               filename: 'string'
            }
         ]
      }

      const mockFailurePromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      })

      const mockAPI = jest.fn()
      mockAPI.mockReturnValue(mockFailurePromise)
      contentManagementAPI.postRoughSolutionApi = mockAPI

      contentManagementStores = new ContentManagementStores(
         contentManagementAPI
      )
      await contentManagementStores.saveRoughSolutionList(
         postObject,
         onSuccess,
         onFailure
      )

      expect(contentManagementStores.postSolutionDataAPIStatus).toBe(API_FAILED)
      expect(contentManagementStores.postSolutionDataAPIError).toBe('error')
      expect(onFailure).toBeCalled()
   })

   //Test cases

   //PrefilledCode

   it('should test initialising ContentManagement store', () => {
      expect(contentManagementStores.postPrefilledDataAPIStatus).toBe(
         API_INITIAL
      )
      expect(contentManagementStores.postPrefilledDataAPIError).toBe(null)
   })

   it('should test contentManagementAPI data fetching state', () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()

      const postObject = {
         prefilledData: [
            {
               prefilledCode_id: 0,
               code_type: 'C',
               code: 'string',
               filename: 'string'
            }
         ]
      }

      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockAPI = jest.fn()
      mockAPI.mockReturnValue(mockLoadingPromise)
      contentManagementAPI.postPrefilledApi = mockAPI

      contentManagementStores.savePreFilledList(
         postObject,
         onSuccess,
         onFailure
      )
      expect(contentManagementStores.postPrefilledDataAPIStatus).toBe(
         API_FETCHING
      )
      expect(onSuccess).not.toBeCalled()
      expect(onFailure).not.toBeCalled()
   })

   it('should test contentManagementAPI success state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()

      const postObject = {
         prefilledCode: [
            {
               prefilledCode_id: 0,
               code_type: 'C',
               code: 'string',
               filename: 'string'
            }
         ]
      }

      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(getPrefilledCodeFixtures)
      })
      const mockAPI = jest.fn()
      mockAPI.mockReturnValue(mockSuccessPromise)
      contentManagementAPI.postPrefilledApi = mockAPI

      await contentManagementStores.savePreFilledList(
         postObject,
         onSuccess,
         onFailure
      )
      expect(contentManagementStores.postPrefilledDataAPIStatus).toBe(
         API_SUCCESS
      )
      expect(onSuccess).toBeCalled()
   })

   it('should test contentManagementAPI failure state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()

      const postObject = {
         roughsolution: [
            {
               roughsolution_id: 0,
               code_type: 'C',
               code: 'string',
               filename: 'string'
            }
         ]
      }

      const mockFailurePromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      })

      const mockAPI = jest.fn()
      mockAPI.mockReturnValue(mockFailurePromise)
      contentManagementAPI.postPrefilledApi = mockAPI

      contentManagementStores = new ContentManagementStores(
         contentManagementAPI
      )
      await contentManagementStores.savePreFilledList(
         postObject,
         onSuccess,
         onFailure
      )

      expect(contentManagementStores.postPrefilledDataAPIStatus).toBe(
         API_FAILED
      )
      expect(contentManagementStores.postPrefilledDataAPIError).toBe('error')
      expect(onFailure).toBeCalled()
   })

   //SolutionApproach

   it('should test initialising ContentManagement store', () => {
      expect(contentManagementStores.postSolutionApproachDataAPIStatus).toBe(
         API_INITIAL
      )
      expect(contentManagementStores.postSolutionApproachDataAPIError).toBe(
         null
      )
   })

   it('should test contentManagementAPI data fetching state', () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()

      const requestObject = {
         short_title: 'string',
         description: {
            content_type: 'HTML',
            content: 'string'
         },
         complexity: {
            content_type: 'HTML',
            content: 'string'
         }
      }

      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockAPI = jest.fn()
      mockAPI.mockReturnValue(mockLoadingPromise)
      contentManagementAPI.postSolutionApproachApi = mockAPI

      contentManagementStores.saveUserSolution(
         requestObject,
         onSuccess,
         onFailure
      )
      expect(contentManagementStores.postSolutionApproachDataAPIStatus).toBe(
         API_FETCHING
      )
      expect(onSuccess).not.toBeCalled()
      expect(onFailure).not.toBeCalled()
   })

   it('should test contentManagementAPI success state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()

      const requestObject = {
         short_title: 'string',
         description: {
            content_type: 'HTML',
            content: 'string'
         },
         complexity: {
            content_type: 'HTML',
            content: 'string'
         }
      }

      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(getProblemStatementFixtures)
      })
      const mockAPI = jest.fn()
      mockAPI.mockReturnValue(mockSuccessPromise)
      contentManagementAPI.postSolutionApproachApi = mockAPI

      await contentManagementStores.saveUserSolution(
         requestObject,
         onSuccess,
         onFailure
      )
      expect(contentManagementStores.postSolutionApproachDataAPIStatus).toBe(
         API_SUCCESS
      )
      expect(onSuccess).toBeCalled()
   })

   it('should test contentManagementAPI failure state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()

      const requestObject = {
         short_title: 'string',
         description: {
            content_type: 'HTML',
            content: 'string'
         },
         complexity: {
            content_type: 'HTML',
            content: 'string'
         }
      }

      const mockFailurePromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      })

      const mockAPI = jest.fn()
      mockAPI.mockReturnValue(mockFailurePromise)
      contentManagementAPI.postSolutionApproachApi = mockAPI

      contentManagementStores = new ContentManagementStores(
         contentManagementAPI
      )
      await contentManagementStores.saveUserSolution(
         requestObject,
         onSuccess,
         onFailure
      )

      expect(contentManagementStores.postSolutionApproachDataAPIStatus).toBe(
         API_FAILED
      )
      expect(contentManagementStores.postSolutionApproachDataAPIError).toBe(
         'error'
      )
      expect(onFailure).toBeCalled()
   })

   //Clean Solution

   it('should test initialising ContentManagement store', () => {
      expect(contentManagementStores.postCleanSolutionDataAPIStatus).toBe(
         API_INITIAL
      )
      expect(contentManagementStores.postCleanSolutionDataAPIError).toBe(null)
   })

   it('should test contentManagementAPI data fetching state', () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()

      const postObject = {
         cleanSolution: [
            {
               cleanSolution_id: 0,
               code_type: 'C',
               code: 'string',
               filename: 'string'
            }
         ]
      }

      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockAPI = jest.fn()
      mockAPI.mockReturnValue(mockLoadingPromise)
      contentManagementAPI.postCleanSolutionApi = mockAPI

      contentManagementStores.saveCleanSolutionList(
         postObject,
         onSuccess,
         onFailure
      )
      expect(contentManagementStores.postCleanSolutionDataAPIStatus).toBe(
         API_FETCHING
      )
      expect(onSuccess).not.toBeCalled()
      expect(onFailure).not.toBeCalled()
   })

   it('should test contentManagementAPI success state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()

      const postObject = {
         cleanSolution: [
            {
               cleanSolution_id: 0,
               code_type: 'C',
               code: 'string',
               filename: 'string'
            }
         ]
      }

      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(getRoughSolutionFixtures)
      })
      const mockAPI = jest.fn()
      mockAPI.mockReturnValue(mockSuccessPromise)
      contentManagementAPI.postCleanSolutionApi = mockAPI

      await contentManagementStores.saveCleanSolutionList(
         postObject,
         onSuccess,
         onFailure
      )
      expect(contentManagementStores.postCleanSolutionDataAPIStatus).toBe(
         API_SUCCESS
      )
      expect(onSuccess).toBeCalled()
   })

   it('should test contentManagementAPI failure state', async () => {
      const onSuccess = jest.fn()
      const onFailure = jest.fn()

      const postObject = {
         cleanSolution: [
            {
               cleanSolution_id: 0,
               code_type: 'C',
               code: 'string',
               filename: 'string'
            }
         ]
      }

      const mockFailurePromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      })

      const mockAPI = jest.fn()
      mockAPI.mockReturnValue(mockFailurePromise)
      contentManagementAPI.postCleanSolutionApi = mockAPI

      contentManagementStores = new ContentManagementStores(
         contentManagementAPI
      )
      await contentManagementStores.saveCleanSolutionList(
         postObject,
         onSuccess,
         onFailure
      )

      expect(contentManagementStores.postCleanSolutionDataAPIStatus).toBe(
         API_FAILED
      )
      expect(contentManagementStores.postCleanSolutionDataAPIError).toBe(
         'error'
      )
      expect(onFailure).toBeCalled()
   })
})
