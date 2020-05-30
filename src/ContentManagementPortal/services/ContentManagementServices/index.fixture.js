import getProblemStatement from '../../fixtures/getProblemStatementFixtures.json';
import getCodingQuestionsFixture from '../../fixtures/getCodingQuestionsFixture.json';

class contentManagementFixtureService {

    postDataApi() {
        return new Promise((resolve, reject) => {
            resolve(getProblemStatement);
        });
    }

    codingQuestionsListApi = () => {
        return new Promise((resolve, reject) => {
            resolve(getCodingQuestionsFixture);
        });
    }
}

export default contentManagementFixtureService;
