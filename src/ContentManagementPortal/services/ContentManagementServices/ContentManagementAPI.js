import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../../AuthModule/utils/APIUtils'
import { apiMethods } from '../../../CommonModule/constants/APIConstants'

class ContentManagementAPI {
    api
    constructor() {
        this.api = create({
            baseURL: 'https://34b482475a80.ngrok.io/api/content_management_portal/'
        });
    }

    codingQuestionsListApi = (offset, limit) => {
        return networkCallWithApisauce(this.api, `homepage/codingquestions/v1/?offset=${offset}&limit=${limit}`, {}, apiMethods.get);
    }

    getCodingQuestionDetailsApi = (question_id) => {
        return networkCallWithApisauce(this.api, `/get/question/${question_id}/v1/`, {}, apiMethods.get);
    }

    postDataApi = (requestdata) => {
        return networkCallWithApisauce(this.api, '/question/v1/', requestdata, apiMethods.post);
    }

    postRoughSolutionApi = (question_id, requestdata) => {
        return networkCallWithApisauce(this.api, `/question/${question_id}/roughsolution/v1/`, requestdata, apiMethods.post);
    }

    postPrefilledApi = (question_id, requestdata) => {
        return networkCallWithApisauce(this.api, `/question/${question_id}/prefilledcode/v1/`, requestdata, apiMethods.post);
    }

    postSolutionApproachApi = (question_id, requestdata) => {
        return networkCallWithApisauce(this.api, `/question/${question_id}/solution_approach/v1/`, requestdata, apiMethods.post);
    }

    postCleanSolutionApi = (question_id, requestdata) => {
        return networkCallWithApisauce(this.api, `/question/${question_id}/cleansolution/v1/`, requestdata, apiMethods.post);
    }

}

export { ContentManagementAPI };
