/*
global expect
global jest
*/

import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL,
}
from "@ib/api-constants";

import { ContentManagementAPI } from "../../services/ContentManagementServices/ContentManagementAPI";
import getProblemStatementFixtures from "../../fixtures/getProblemStatementFixtures.json";

import { ContentManagementStores } from ".";

describe("ContentManagementStores Tests", () => {
    let contentManagementAPI;
    let contentManagementStores;
    
    beforeEach(() => {
        contentManagementAPI = new ContentManagementAPI();
        contentManagementStores = new ContentManagementStores(contentManagementAPI);
    });

    it("should test initialising ContentManagement store", () => {
        expect(contentManagementStores.postUserDataAPIStatus).toBe(API_INITIAL);
        expect(contentManagementStores.postUserDataAPIError).toBe(null);
    });

    it("should test contentManagementAPI data fetching state", () => {
        const onSuccess = jest.fn();
        const onFailure = jest.fn();

        const requestObject = {
            "short_title": "string",
            "problem_description": {
                "content_type": "HTML",
                "content": "string"
            }
        };

        const mockLoadingPromise = new Promise(function(resolve, reject) {});
        const mockAPI = jest.fn();
        mockAPI.mockReturnValue(mockLoadingPromise);
        contentManagementAPI.postDataApi = mockAPI;

        contentManagementStores.saveUserData(requestObject, onSuccess, onFailure);
        expect(contentManagementStores.postUserDataAPIStatus).toBe(API_FETCHING);
        expect(onSuccess).not.toBeCalled();
        expect(onFailure).not.toBeCalled();
    });

    it("should test contentManagementAPI success state", async() => {
        const onSuccess = jest.fn();
        const onFailure = jest.fn();

        const requestObject = {
            "short_title": "string",
            "problem_description": {
                "content_type": "HTML",
                "content": "string"
            }
        };

        const mockSuccessPromise = new Promise(function(resolve, reject) {
            resolve(getProblemStatementFixtures);
        });
        const mockAPI = jest.fn();
        mockAPI.mockReturnValue(mockSuccessPromise);
        contentManagementAPI.postDataApi = mockAPI;

        await contentManagementStores.saveUserData(requestObject, onSuccess, onFailure);
        expect(contentManagementStores.postUserDataAPIStatus).toBe(API_SUCCESS);
        expect(onSuccess).toBeCalled();
    });

    it("should test contentManagementAPI failure state", async() => {
        const onSuccess = jest.fn();
        const onFailure = jest.fn();

        const requestObject = {
            "short_title": "string",
            "problem_description": {
                "content_type": "HTML",
                "content": "string"
            }
        };

        const mockFailurePromise = new Promise(function(resolve, reject) {
            reject(new Error("error"));
        });

        const mockAPI = jest.fn();
        mockAPI.mockReturnValue(mockFailurePromise);
        contentManagementAPI.postDataApi = mockAPI;

        contentManagementStores = new ContentManagementStores(contentManagementAPI);
        await contentManagementStores.saveUserData(requestObject, onSuccess, onFailure);

        expect(contentManagementStores.postUserDataAPIStatus).toBe(API_FAILED);
        expect(contentManagementStores.postUserDataAPIError).toBe("error");
        expect(onFailure).toBeCalled();
    });

});
