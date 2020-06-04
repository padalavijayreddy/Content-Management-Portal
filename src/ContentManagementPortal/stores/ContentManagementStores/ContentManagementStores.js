import { observable, action, computed } from 'mobx';
import { API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import CodingQuestionsModel from '../../models/CodingQuestionsModel';
import CodingQuestionDetailsModel from '../../models/CodingQuestionDetailsModel';

class ContentManagementStores {

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

    @observable searchText;
    @observable sortBy;


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

        this.selectedTask = 'Problem Statement';
        this.searchText = '';
        this.sortBy = 'Status';
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

    //CodingQuestionDetails

    @action.bound
    getCodingQuestionDetails() {
        const CodingQuestionDetailPromise = this.contentManagementAPI.getCodingQuestionDetailsApi();
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
        this.codingQuestionDetails = new CodingQuestionDetailsModel(apiResponse);
    }

    //CodingQuestionsList 

    @action.bound
    getCodingQuestionsList() {
        const CodingListPromise = this.contentManagementAPI.codingQuestionsListApi();
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
    }

    @action.bound
    setGetCodingQuestionsListAPIResponse(apiResponse) {
        apiResponse.forEach(codingQuestions => this.codingQuestionsList.set(codingQuestions.id, new CodingQuestionsModel(codingQuestions)));
    }

    @computed
    get questions() {
        return this.sortedAndFilteredQuestions;
    }

    @computed
    get sortedAndFilteredQuestions() {
        const { codingQuestionsList, filterTitles, searchText, } = this;
        let data = [...codingQuestionsList.values()];
        console.log(data);
        data = data.filter(question => filterTitles(question.questions));
        return data;
    }

    @computed
    get totalNoOfQuestionsDisplayed() {
        return this.questions.length;
    }



    //Problem Statement


    @action.bound
    saveUserData(postData, onSuccess, onFailure) {
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
        console.log(savedResponse);
    }

    //Rough Solution

    @action.bound
    saveRoughSolutionList(postRoughSolutionData, onSuccess, onFailure) {
        this.roughSolutionData = postRoughSolutionData;
        const roughSolutionPromise = this.contentManagementAPI.postRoughSolutionApi(this.roughSolutionData);
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
        const prefilledPromise = this.contentManagementAPI.postPrefilledApi(this.prefilledData);
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
        const solutionApproachPromise = this.contentManagementAPI.postSolutionApproachApi(postSolutionApproach);
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
        console.log(apiResponse);
    }


    //Clean Solution

    @action.bound
    saveCleanSolutionList(postCleanSolution, onSuccess, onFailure) {
        const cleanSolutionPromise = this.contentManagementAPI.postCleanSolutionApi(postCleanSolution);
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
