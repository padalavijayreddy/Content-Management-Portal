/*
global expect
global jest
*/
import {
   API_INITIAL,
   API_FETCHING,
   API_SUCCESS,
   API_FAILED
}
from '@ib/api-constants';
import { AuthStore } from '.';
import { AuthAPI } from '../../services/AuthenticationService';
import getUserSignInResponse from '../../fixtures/getUserSignInResponse.json';

describe('AuthStore Tests', () => {
   let authAPI;
   let authStore;

   beforeEach(() => {
      authAPI = new AuthAPI();
      authStore = new AuthStore(authAPI);
   });

   it('Should test initialising auth store', () => {
      expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
      expect(authStore.getUserSignInAPIError).toBe(null);
   });

   it('should test userSignInAPI data fetching state', async() => {
      const onSuccess = jest.fn();
      const onFailure = jest.fn();

      const requestObject = {
         username: 'text-user',
         password: 'text-password'
      };

      const mockLoadingPromise = new Promise(function(resolve, reject) {});
      const mockSignInAPI = jest.fn();
      mockSignInAPI.mockReturnValue(mockLoadingPromise);
      authAPI.signInAPI = mockSignInAPI;

      authStore.userSignIn(requestObject, onSuccess, onFailure);
      expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING);
      expect(onSuccess).not.toBeCalled();
      expect(onFailure).not.toBeCalled();
   });

   it('should test userSignInAPI success state', async() => {
      const onSuccess = jest.fn();
      const onFailure = jest.fn();

      const requestObject = {
         username: 'text-user',
         password: 'text-password'
      };

      const mockLoadingPromise = new Promise(function(resolve, reject) {
         resolve(getUserSignInResponse);
      });
      const mockSignInAPI = jest.fn();
      mockSignInAPI.mockReturnValue(mockLoadingPromise);
      authAPI.signInAPI = mockSignInAPI;

      await authStore.userSignIn(requestObject, onSuccess, onFailure);
      expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS);
      expect(onSuccess).toBeCalled();
      expect(onFailure).not.toBeCalled();
   });

   it('should test userSignInAPI failure state', async() => {
      const onSuccess = jest.fn();
      const onFailure = jest.fn();

      const requestObject = {
         username: 'text-user',
         password: 'text-password'
      };

      const mockLoadingPromise = new Promise(function(resolve, reject) {
         reject(new Error('error'));
      });
      const mockSignInAPI = jest.fn();
      mockSignInAPI.mockReturnValue(mockLoadingPromise);
      authAPI.signInAPI = mockSignInAPI;

      await authStore.userSignIn(requestObject, onSuccess, onFailure);
      expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED);
      expect(onSuccess).not.toBeCalled();
   });
});














// /*global jest, expect*/
// import Cookie from 'js-cookie';

// import {
//     API_INITIAL,
//     API_FETCHING,
//     API_SUCCESS,
//     API_FAILED
// }
// from '@ib/api-constants';

// import { AuthAPI } from '../../services/AuthServices/AuthAPI';
// import getUserLoginResponse from '../../fixtures/getUserLoginResponse';

// import { LoginStore } from '.';

// const mockSetCookie = jest.fn(),
//     mockRemoveCookie = jest.fn();

// Cookie.set = mockSetCookie;
// Cookie.remove = mockRemoveCookie;


// describe("loginStore Tests", () => {
//     let apiService, loginStore;

//     beforeEach(() => {
//        apiService = new AuthAPI();
//        loginStore = new LoginStore(apiService);
//     });

//     it("should test initialising the store", () => {
//        expect(loginStore.getServiceApiStatus).toBe(API_INITIAL);
//        expect(loginStore.getServiceApiError).toBe(null);
//     });

//     it('should test userLogin() data fetching state', () => {
//        const requestObject = {
//                 username: 'test-user',
//                 password: 'test-password'
//             },
//             mockLoadingPromise = new Promise((resolve, reject) => {});

//        apiService.loginAPI = jest
//             .fn()
//             .mockReturnValue(mockLoadingPromise);

//        loginStore.userLogin(requestObject);
//        expect(loginStore.getServiceApiStatus).toBe(API_FETCHING);
//     });

//     it('should test userLogin() data success state', async() => {
//        const requestObject = {
//                 username: 'test-user',
//                 password: 'test-password'
//             },
//             mockSuccessPromise = Promise.resolve(getUserLoginResponse);

//        apiService.loginAPI = jest
//             .fn()
//             .mockReturnValue(mockSuccessPromise);

//        await loginStore.userLogin(requestObject);
//        expect(loginStore.getServiceApiStatus).toBe(API_SUCCESS);
//        expect(mockSetCookie).toBeCalled();
//     });

//     it("should test userLogin() failure state", async() => {
//        const requestObject = {
//                 username: 'test-user',
//                 password: 'test-password'
//             },
//             errorMessage = "INVALID_USERNAME",
//             mockFailurePromise = Promise.reject(new Error(errorMessage));

//        apiService.loginAPI = jest
//             .fn()
//             .mockReturnValue(mockFailurePromise);

//        await loginStore.userLogin(requestObject);
//        expect(loginStore.getServiceApiStatus).toBe(API_FAILED);
//        expect(loginStore.getServiceApiError).toBe(errorMessage);
//     });

// });
