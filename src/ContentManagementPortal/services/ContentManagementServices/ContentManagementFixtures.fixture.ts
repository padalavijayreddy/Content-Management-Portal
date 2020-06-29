import getProblemStatement from '../../fixtures/getProblemStatementFixtures.json'
import getCodingQuestionsFixture from '../../fixtures/getCodingQuestionsFixture.json'
import getRoughSolutionFixtures from '../../fixtures/getRoughSolutionFixtures.json'
import getPrefilledCodeFixtures from '../../fixtures/getPrefilledCodeFixtures.json'
import getSolutionApproachFixtures from '../../fixtures/getSolutionApproachFixtures.json'
import getCleanSolutionFixtures from '../../fixtures/getCleanSolutionFixtures.json'
import getCodingQuestionDetailsFixtures from '../../fixtures/getCodingQuestionDetailsFixtures.json'
import reactNameFixtures from '../../fixtures/reactNameFixtures.json'
import ContentManagementServices from './index.js'
import { resolveWithTimeout } from '../../utils/TestUtils'
import { CodingQuestionsListRequestObjectProps } from '../../stores/types.js'

class ContentManagementFixture implements ContentManagementServices {
   getProjectNameApi() {
      return resolveWithTimeout(reactNameFixtures)
   }

   postDataApi() {
      return resolveWithTimeout(getProblemStatement)
   }

   codingQuestionsListApi = ({
      offset,
      limit
   }: CodingQuestionsListRequestObjectProps) => {
      const startingDataIndex = offset * limit,
         endingDataIndex = startingDataIndex + limit,
         question_details = getCodingQuestionsFixture.question_details.slice(
            startingDataIndex,
            endingDataIndex
         )
      return resolveWithTimeout({
         total_coding_questions:
            getCodingQuestionsFixture.total_coding_questions,
         question_details
      })
   }

   getCodingQuestionDetailsApi = () => {
      return resolveWithTimeout(getCodingQuestionDetailsFixtures)
   }

   postRoughSolutionApi = () => {
      return resolveWithTimeout(getRoughSolutionFixtures)
   }

   postPrefilledApi = () => {
      return resolveWithTimeout(getPrefilledCodeFixtures)
   }

   postSolutionApproachApi = () => {
      return resolveWithTimeout(getSolutionApproachFixtures)
   }

   postCleanSolutionApi = () => {
      return resolveWithTimeout(getCleanSolutionFixtures)
   }
}

export default ContentManagementFixture
