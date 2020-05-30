import { observable, action } from 'mobx';
import { API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import CodingQuestionsModel from '../../models/CodingQuestionsModel';

class ContentManagementStores {

    @observable userData;
    contentManagementAPI;
    @observable postUserDataAPIStatus;
    @observable postUserDataAPIError;
    @observable codingQuestionsList;
    @observable getCodingQuestionsListAPIStatus
    @observable getCodingQuestionsListAPIError

    constructor(ContentManagementAPI) {
        this.contentManagementAPI = ContentManagementAPI;
        this.init();
    }

    @action.bound
    init() {
        this.codingQuestionsList = new Map();
        this.userData = '';
        this.postUserDataAPIStatus = API_INITIAL;
        this.postUserDataAPIError = null;
        this.getCodingQuestionsListAPIStatus = API_INITIAL;
    }

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


    @action.bound
    clearStore() {
        this.init();
    }
}

export { ContentManagementStores };



































// @action.bound
//     userSignIn(requestObject, onSuccess, onFailure) {
//         this.userData = requestObject;
//         const signInPromise = this.AuthAPI.signInAPI();
//         return bindPromiseWithOnSuccess(signInPromise)
//             .to(this.setGetUserSignInAPIStatus, response => {
//                 this.setUserSignInAPIResponse(response);
//                 onSuccess();
//             })
//             .catch(error => {
//                 this.setGetUserSignInAPIError(error);
//                 onFailure();
//             });
//     }
