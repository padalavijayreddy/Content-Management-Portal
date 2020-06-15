import { observable, action, computed } from 'mobx';
import { API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import CodingQuestionsModel from '../../models/CodingQuestionsModel';
import CodingQuestionDetailsModel from '../../models/CodingQuestionDetailsModel';

class ContentManagementStores {

    @observable question_id;
    @observable selectedTask;
    @observable userData;
    @observable roughSolutionData;
    @observable prefilledData;
    contentManagementAPI;
    @observable addButton;

    @observable codingQuestionDetails;
    @observable getCodingQuestionDetailsAPIStatus;
    @observable getCodingQuestionDetailsAPIError;

    @observable codingQuestionsList;
    @observable getCodingQuestionsListAPIStatus;
    @observable getCodingQuestionsListAPIError;

    @observable postUserDataAPIStatus;
    @observable postUserDataAPIError;

    @observable postSolutionDataAPIStatus;
    @observable postSolutionDataAPIError;

    @observable postPrefilledDataAPIStatus;
    @observable postPrefilledDataAPIError;

    @observable postSolutionApproachDataAPIStatus;
    @observable postSolutionApproachDataAPIError;

    @observable postCleanSolutionDataAPIStatus;
    @observable postCleanSolutionDataAPIError;

    @observable getProjectNameAPIStatus;
    @observable getProjectNameAPIError;
    projectName;

    @observable searchText;
    @observable sortBy;

    @observable currentPagePosition
    @observable questionsLimit
    totalQuestions
    totalCountOfPages


    constructor(ContentManagementAPI) {
        this.contentManagementAPI = ContentManagementAPI;
        this.init();
    }

    @action.bound
    init() {
        this.codingQuestionsList = new Map();
        this.codingQuestionDetails = null;
        this.userData = '';
        this.roughSolutionData = '';
        this.prefilledData = '';

        this.getCodingQuestionsListAPIStatus = API_INITIAL;
        this.getCodingQuestionsListAPIError = null;

        this.postUserDataAPIStatus = API_INITIAL;
        this.postUserDataAPIError = null;

        this.getCodingQuestionsListAPIStatus = API_INITIAL;
        this.getCodingQuestionsListAPIError = null;

        this.postSolutionDataAPIStatus = API_INITIAL;
        this.postSolutionDataAPIError = null;

        this.postPrefilledDataAPIStatus = API_INITIAL;
        this.postPrefilledDataAPIError = null;

        this.postSolutionApproachDataAPIStatus = API_INITIAL;
        this.postSolutionApproachDataAPIError = null;

        this.postCleanSolutionDataAPIStatus = API_INITIAL;
        this.postCleanSolutionDataAPIError = null;

        this.getProjectNameAPIError = null;
        this.getProjectNameAPIStatus = API_INITIAL;

        this.selectedTask = 'Problem Statement';
        this.searchText = '';
        this.sortBy = 'Status';

        this.totalCountOfPages = 0;
        this.totalQuestions = 0;
        this.questionsLimit = 50;
        this.currentPagePosition = 1;
    }

    changeSelectedTask = (selectedTask) => {
        this.selectedTask = selectedTask;
        console.log(this.selectedTask);
    }

    addCodingQuestion = () => {
        this.addButton = !this.addButton;
        console.log("addCodingQuestion", this.addButton);
    }

    @action.bound
    onChangeSearchText = (changedText) => {
        console.log(changedText);
        this.searchText = changedText;
    }

    @action.bound
    onChangeSortBy(changedFormat) {
        console.log(changedFormat);
        this.sortBy = changedFormat;
    }

    @action.bound
    filterTitles(title) {
        console.log("1", title);
        return title.toLowerCase().includes(this.searchText.toLowerCase());
    }

    // @action.bound
    // deleteCodingQuestion(question_id) {
    //     const deleteQuestionPromise = this.contentManagementAPI.
    // }


    //PROJECT NAME

    @action.bound
    getProjectName() {
        const projectNamePromise = this.contentManagementAPI.getProjectNameApi();
        return bindPromiseWithOnSuccess(projectNamePromise)
            .to(this.setGetProjectNameApiStatus, this.setGetProjectNameAPIResponse)
            .catch(this.setGetProjectNameAPIError, this.setGetProjectNameAPIResponse)
    }

    @action.bound
    setGetProjectNameApiStatus(apiStatus) {
        this.getProjectNameAPIStatus = apiStatus
    }

    @action.bound
    setGetProjectNameAPIError(apiError) {
        this.getProjectNameAPIError = apiError;
    }

    @action.bound
    setGetProjectNameAPIResponse(apiResponse) {
        this.projectName = apiResponse.name;
    }

    //CodingQuestionsList 

    @action.bound
    getCodingQuestionsList() {
        const { questionsLimit: limit } = this;
        const offset = this.currentPagePosition - 1;
        console.log("offset", "limit", offset, limit);
        const CodingListPromise = this.contentManagementAPI.codingQuestionsListApi(offset, limit);
        return bindPromiseWithOnSuccess(CodingListPromise)
            .to(this.setGetCodingQuestionsListAPIStatus, response => {
                this.setGetCodingQuestionsListAPIResponse(response);
            })
            .catch(error => {
                this.setGetCodingQuestionsListAPIError(error);
            });
    }

    @action.bound
    setGetCodingQuestionsListAPIStatus(apiStatus) {
        this.getCodingQuestionsListAPIStatus = apiStatus;
    }

    @action.bound
    setGetCodingQuestionsListAPIError(apiError) {
        this.getCodingQuestionsListAPIError = apiError;
        alert(apiError);
    }

    @action.bound
    setGetCodingQuestionsListAPIResponse(apiResponse) {
        console.log("coding list", apiResponse);
        this.codingQuestionsList.clear();
        const { total_coding_questions, question_details } = apiResponse;
        if (!(question_details === undefined || question_details.length <= 0))
            question_details.forEach((data) => this.codingQuestionsList.set(data.question_id, new CodingQuestionsModel(data)));
        else this.codingQuestionsList = new Map();
        console.log("list", this.codingQuestionsList);
        this.totalQuestions = total_coding_questions;
        this.totalCountOfPages = Math.ceil(total_coding_questions / this.questionsLimit);
        console.log("questions", this.totalQuestions);
        console.log("pages", this.totalCountOfPages);
    }

    @action.bound
    currentPagePositionIncrementor() {
        const { currentPagePosition, totalCountOfPages } = this;
        (currentPagePosition <= totalCountOfPages && (this.currentPagePosition += 1) && this.getCodingQuestionsList());

    }

    @action.bound
    currentPagePositionDecrementor() {
        const { currentPagePosition } = this;
        (currentPagePosition > 1 && (this.currentPagePosition -= 1) && this.getCodingQuestionsList());
    }

    @computed
    get questions() {
        return this.sortedAndFilteredQuestions;
    }

    @computed
    get sortedAndFilteredQuestions() {
        const { codingQuestionsList, filterTitles, searchText } = this;
        console.log(this.codingQuestionsList);
        let data = [...codingQuestionsList.values()];
        console.log(data);
        data = data.filter(question => filterTitles(question.short_title));
        return data;
    }

    @computed
    get totalNoOfQuestionsDisplayed() {
        return this.questions.length;
    }



    //CodingQuestionDetails

    @action.bound
    getCodingQuestionDetails(question_id) {
        console.log("question details", question_id);
        this.question_id = question_id;
        const CodingQuestionDetailPromise = this.contentManagementAPI.getCodingQuestionDetailsApi(question_id);
        return bindPromiseWithOnSuccess(CodingQuestionDetailPromise)
            .to(this.setGetCodingQuestionDetailsAPIStatus, response => {
                this.setGetCodingQuestionDetailsAPIResponse(response);
            })
            .catch(error => {
                this.setGetCodingQuestionDetailsAPIError(error);
            });
    }

    @action.bound
    setGetCodingQuestionDetailsAPIStatus(apiStatus) {
        this.getCodingQuestionDetailsAPIStatus = apiStatus;
    }

    @action.bound
    setGetCodingQuestionDetailsAPIError(apiError) {
        this.getCodingQuestionDetailsAPIError = apiError;
    }

    @action.bound
    setGetCodingQuestionDetailsAPIResponse(apiResponse) {
        console.log("codingQuestionDetails", apiResponse);
        this.codingQuestionDetails = new CodingQuestionDetailsModel(apiResponse);
    }


    //Problem Statement


    @action.bound
    saveUserData(postData, onSuccess, onFailure) {
        console.log('store 1', postData);
        this.userData = postData;
        const userDataPromise = this.contentManagementAPI.postDataApi(this.userData);
        return bindPromiseWithOnSuccess(userDataPromise)
            .to(this.setPostUserDataAPIStatus, response => {
                this.setPostUserDataAPIResponse(response);
                onSuccess();
            })
            .catch(error => {
                this.setPostUserDataAPIError(error);
                onFailure();
            });
    }

    @action.bound
    setPostUserDataAPIStatus(apiStatus) {
        this.postUserDataAPIStatus = apiStatus;
    }

    @action.bound
    setPostUserDataAPIError(apiError) {
        this.postUserDataAPIError = apiError;
    }

    @action.bound
    setPostUserDataAPIResponse(savedResponse) {
        console.log("Response", savedResponse);
        console.log("QuestionId", savedResponse.question_id);
        this.question_id = savedResponse.question_id;
    }

    //Rough Solution

    @action.bound
    saveRoughSolutionList(postRoughSolutionData, onSuccess, onFailure) {
        this.roughSolutionData = postRoughSolutionData;
        console.log("QuestionId", this.question_id);
        const roughSolutionPromise = this.contentManagementAPI.postRoughSolutionApi(this.question_id, this.roughSolutionData);
        return bindPromiseWithOnSuccess(roughSolutionPromise)
            .to(this.setpostSolutionDataAPIStatus, response => {
                this.setPostSolutionDataAPIResponse(response);
                onSuccess();
            })
            .catch(error => {
                this.setpostSolutionDataAPIError(error);
                onFailure();
            });
    }

    @action.bound
    setpostSolutionDataAPIStatus(apiStatus) {
        this.postSolutionDataAPIStatus = apiStatus;
    }

    @action.bound
    setpostSolutionDataAPIError(apiError) {
        this.postSolutionDataAPIError = apiError;
    }

    @action.bound
    setPostSolutionDataAPIResponse(apiResponse) {
        console.log(apiResponse);
    }

    //Test Cases

    //Prefilled CODE

    @action.bound
    savePreFilledList(postPrefilledData, onSuccess, onFailure) {
        this.prefilledData = postPrefilledData;
        const prefilledPromise = this.contentManagementAPI.postPrefilledApi(this.question_id, this.prefilledData);
        return bindPromiseWithOnSuccess(prefilledPromise)
            .to(this.setPostPrefilledDataAPIStatus, response => {
                this.setPostPrefilledDataAPIResponse(response);
                onSuccess();
            })
            .catch(error => {
                this.setPostPrefilledDataAPIError(error);
                onFailure();
            });
    }

    @action.bound
    setPostPrefilledDataAPIStatus(apiStatus) {
        this.postPrefilledDataAPIStatus = apiStatus;
    }

    @action.bound
    setPostPrefilledDataAPIError(apiError) {
        this.postPrefilledDataAPIError = apiError;
    }

    @action.bound
    setPostPrefilledDataAPIResponse(apiResponse) {
        console.log(apiResponse);
    }

    //Solution Approach

    saveUserSolution
    @action.bound
    saveUserSolution(postSolutionApproach, onSuccess, onFailure) {
        const solutionApproachPromise = this.contentManagementAPI.postSolutionApproachApi(this.question_id, postSolutionApproach);
        return bindPromiseWithOnSuccess(solutionApproachPromise)
            .to(this.setPostSolutionApproachDataAPIStatus, response => {
                this.setPostSolutionApproachDataAPIResponse(response);
                onSuccess();
            })
            .catch(error => {
                this.setPostSolutionApproachDataAPIError(error);
                onFailure();
            });
    }

    @action.bound
    setPostSolutionApproachDataAPIStatus(apiStatus) {
        this.postSolutionApproachDataAPIStatus = apiStatus;
    }

    @action.bound
    setPostSolutionApproachDataAPIError(apiError) {
        this.postSolutionApproachDataAPIError = apiError;
    }

    @action.bound
    setPostSolutionApproachDataAPIResponse(apiResponse) {
        console.log("solution approach", apiResponse);
    }

    //Clean Solution

    @action.bound
    saveCleanSolutionList(postCleanSolution, onSuccess, onFailure) {
        const cleanSolutionPromise = this.contentManagementAPI.postCleanSolutionApi(this.question_id, postCleanSolution);
        return bindPromiseWithOnSuccess(cleanSolutionPromise)
            .to(this.setPostCleanSolutionDataAPIStatus, response => {
                this.setPostCleanSolutionDataAPIResponse(response);
                onSuccess();
            })
            .catch(error => {
                this.setPostCleanSolutionDataAPIError(error);
                onFailure();
            });
    }

    @action.bound
    setPostCleanSolutionDataAPIStatus(apiStatus) {
        this.postCleanSolutionDataAPIStatus = apiStatus;
    }

    @action.bound
    setPostCleanSolutionDataAPIError(apiError) {
        this.postCleanSolutionDataAPIError = apiError;
    }

    @action.bound
    setPostCleanSolutionDataAPIResponse(apiResponse) {
        console.log(apiResponse);
    }


    @action.bound
    clearStore() {
        this.init();
    }
}

export { ContentManagementStores };
