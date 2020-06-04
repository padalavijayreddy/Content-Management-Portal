import { observable, action } from 'mobx';
import { API_INITIAL } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import {
   setAccessToken,
   clearUserSession,
   getAccessToken,
   ACCESS_TOKEN
}
from '../../utils/StorageUtils';
import { getUserDisplayableErrorMessage } from '../../../CommonModule/utils/APIUtils';

class AuthStore {
   @observable getUserSignInAPIStatus
   @observable getUserSignInAPIError
   authAPI

   constructor(AuthAPI) {
      this.authAPI = AuthAPI;
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
      const signInPromise = this.authAPI.signInAPI(this.userData);
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
   setGetUserSignInAPIStatus(apiStatus) {
      this.getUserSignInAPIStatus = apiStatus;
   }

   @action.bound
   setGetUserSignInAPIError(apiError) {
      this.getUserSignInAPIError = getUserDisplayableErrorMessage(apiError);
   }

   @action.bound
   setUserSignInAPIResponse(signInResponse) {
      console.log(signInResponse);
      setAccessToken(signInResponse.access_token);
   }

   @action.bound
   userSignOut(SignInResponse) {
      clearUserSession();
   }
}

export { AuthStore };
