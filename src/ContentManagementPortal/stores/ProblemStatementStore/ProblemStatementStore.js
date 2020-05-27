import { observable, action } from 'mobx';
import { API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';

class ProblemStatementStore {

    @observable shortText;
    @observable problemDescription;

    constructor(AuthAPI) {
        this.init();
    }

    @action.bound
    init() {
        this.shortText = '';
        this.problemDescription = '';
    }

    @action.bound
    changeShortText(event) {
        console.log(event.target);
        this.shortText = event.target.value;
    }

    @action.bound
    userSignIn(requestObject, onSuccess, onFailure) {
        this.userData = requestObject;
        const signInPromise = this.AuthAPI.signInAPI();
        return bindPromiseWithOnSuccess(signInPromise)
            .to(this.setGetUserSignInAPIStatus, response => {
                this.setUserSignInAPIResponse(response);
                onSuccess();
            })
            .catch(error => {
                this.setGetUserSignInAPIError(error);
                onFailure();
            });
    }

    @action.bound
    clearStore() {
        this.init();
    }
}

export { ProblemStatementStore };
