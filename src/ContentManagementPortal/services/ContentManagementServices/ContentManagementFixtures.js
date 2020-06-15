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

    codingQuestionsListApi = () => {
        return new Promise((resolve, reject) =>
            setTimeout(() => resolve(getCodingQuestionsFixture), 4000)
        );
    }

    getCodingQuestionDetailsApi = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(getCodingQuestionDetailsFixtures), 2000);
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
