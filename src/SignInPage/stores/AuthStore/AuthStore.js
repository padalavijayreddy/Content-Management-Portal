import { observable, action } from 'mobx';
import { API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import { setAccessToken, clearUserSession, getAccessToken, ACCESS_TOKEN } from '../../utils/StorageUtils';

class AuthStore {

    @observable getUserSignInAPIStatus
    @observable getUserSignInAPIError
    AuthAPI

    constructor(AuthAPI) {
        this.AuthAPI = AuthAPI;
        this.init();
    }


    @action.bound
    init() {
        this.getUserSignInAPIError = null;
        this.getUserSignInAPIStatus = API_INITIAL;
    }


    @action.bound
    clearStore() {
        this.init();
    }


    @action.bound
    userSignIn(requestObject, onSuccess, onFailure) {
        this.userData = requestObject;
        const signInPromise = this.AuthAPI.signInAPI();
        return bindPromiseWithOnSuccess(signInPromise)
            .to(this.setGetUserSignInAPIStatus, (response) => {
                this.setUserSignInAPIResponse(response);
                onSuccess();
            })
            .catch(error => {
                this.setGetUserSignInAPIError(error);
                onFailure();
            });
    }


    @action.bound
    setGetUserSignInAPIStatus(apiStatus) {
        this.getUserSignInAPIStatus = apiStatus;
    }


    @action.bound
    setGetUserSignInAPIError(apiError) {
        this.getUserSignInAPIError = apiError;
        console.log('errorrrrrrrrrrrrrr');
    }


    @action.bound
    setUserSignInAPIResponse(signInResponse) {
        const { username, password } = this.userData;
        signInResponse.forEach(token => setAccessToken(token.access_token));
        console.log(getAccessToken(ACCESS_TOKEN));
    }

    @action.bound
    userSignOut(SignInResponse) {
        clearUserSession();
    }
}

export { AuthStore };
