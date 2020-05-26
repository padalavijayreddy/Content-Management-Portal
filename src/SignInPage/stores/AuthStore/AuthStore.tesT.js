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
import getUserSignInResponse from "../../fixtures/getUserSignInResponse.json";

describe("AuthStore Tests", () => {
    let authAPI;
    let authStore;

    beforeEach(() => {
        authAPI = new AuthAPI();
        authStore = new AuthStore(authAPI);
    });

    it("Should test initialising auth store", () => {
        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserSignInAPIError).toBe(null);
    });

    it("should test userSignInAPI data fetching state", async() => {
        const onSuccess = jest.fn();
        const onFailure = jest.fn();

        const requestObject = {
            username: "text-user",
            password: "text-password"
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

    it("should test userSignInAPI success state", async() => {
        const onSuccess = jest.fn();
        const onFailure = jest.fn();

        const requestObject = {
            username: "text-user",
            password: "text-password"
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

    it("should test userSignInAPI failure state", async() => {
        const onSuccess = jest.fn();
        const onFailure = jest.fn();

        const requestObject = {
            username: "text-user",
            password: "text-password"
        };

        const mockLoadingPromise = new Promise(function(resolve, reject) {
            reject(new Error("error"));
        });
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
        authAPI.signInAPI = mockSignInAPI;

        await authStore.userSignIn(requestObject, onSuccess, onFailure);
        expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED);
        expect(onSuccess).not.toBeCalled();

    });
});
