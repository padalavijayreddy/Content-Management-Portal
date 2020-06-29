import {
   CodingQuestionObject,
   CodingQuestionDetails,
   problemStatement,
   CodingQuestionDetailsResponse,
   prefilled_codes,
   solution_approaches,
   clean_solutions,
   CodingQuestionsListType,
   CodingQuestionsListRequestObjectProps,
   QuestionIdTypes,
   rough_solutions
} from '../../stores/types'

interface ContentManagementServices {
   codingQuestionsListApi: (
      requestObject: CodingQuestionsListRequestObjectProps
   ) => Promise<CodingQuestionsListType>

   getCodingQuestionDetailsApi: (
      requestObject: CodingQuestionDetailsResponse
   ) => Promise<CodingQuestionDetails>

   postDataApi: (requestObject: problemStatement) => Promise<{}>

   postRoughSolutionApi: (
      questionId: number,
      roughSolution: rough_solutions
   ) => Promise<{}>

   postPrefilledApi: (
      questionId: number,
      prefilledCode: prefilled_codes
   ) => Promise<{}>

   postSolutionApproachApi: (
      questionId: number,
      solutionApproaches: solution_approaches
   ) => Promise<{}>

   postCleanSolutionApi: (
      questionId: number,
      cleanSolutions: clean_solutions
   ) => Promise<{}>
}

export default ContentManagementServices
