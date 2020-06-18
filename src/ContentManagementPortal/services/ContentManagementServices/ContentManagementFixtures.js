import getProblemStatement from '../../fixtures/getProblemStatementFixtures.json';
import getCodingQuestionsFixture from '../../fixtures/getCodingQuestionsFixture.json';
import getRoughSolutionFixtures from '../../fixtures/getRoughSolutionFixtures.json';
import getPrefilledCodeFixtures from '../../fixtures/getPrefilledCodeFixtures.json';
import getSolutionApproachFixtures from '../../fixtures/getSolutionApproachFixtures.json';
import getCleanSolutionFixtures from '../../fixtures/getCleanSolutionFixtures.json';
import getCodingQuestionDetailsFixtures from '../../fixtures/getCodingQuestionDetailsFixtures.json';
import reactNameFixtures from '../../fixtures/reactNameFixtures.json';

class contentManagementFixtureService {

    getProjectNameApi() {
        return new Promise((resolve, reject) =>
            setTimeout(() => resolve(reactNameFixtures), 1000)
        );
    }

    postDataApi() {
        return new Promise((resolve, reject) => {
            resolve(getProblemStatement);
        });
    }

    codingQuestionsListApi = ({ offset, limit }) => {
        const startingDataIndex = offset * limit,
            endingDataIndex = startingDataIndex + limit,
            question_details = getCodingQuestionsFixture.question_details.slice(startingDataIndex, endingDataIndex);
        console.log(offset, limit)
        return new Promise((resolve, reject) =>
            setTimeout(() => resolve({ total_coding_questions: getCodingQuestionsFixture.total_coding_questions, question_details }), 1000)
        );
    }

    getCodingQuestionDetailsApi = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(getCodingQuestionDetailsFixtures), 1000);
        });
    }

    postRoughSolutionApi = () => {
        return new Promise((resolve, reject) => {
            resolve(getRoughSolutionFixtures);
        });
    }

    postPrefilledApi = () => {
        return new Promise((resolve, reject) => {
            resolve(getPrefilledCodeFixtures);
        });
    }

    postSolutionApproachApi = () => {
        return new Promise((resolve, reject) => {
            resolve(getSolutionApproachFixtures);
        });
    }

    postCleanSolutionApi = () => {
        return new Promise((resolve, reject) => {
            resolve(getCleanSolutionFixtures);
        });
    }
}

export default contentManagementFixtureService;
