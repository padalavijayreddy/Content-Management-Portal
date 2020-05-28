import { observable, action } from 'mobx';
import { API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';

class ContentManagementStores {
    @observable problemDescription;
    @observable shortText;

    constructor() {
        this.init();
    }

    init() {
        this.problemDescription = "";
        this.shortText = "";
    }


    onChangeTextArea = (event) => {
        console.log(event.target);
        this.problemDescription = event.target.value;
    }

    onChangeShortText = (event) => {
        console.log(event.target);
        this.shortText = event.target.value;
    }

    @action.bound
    saveTheProblem(requestObject) {

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
