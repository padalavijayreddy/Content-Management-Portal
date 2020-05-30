import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../../CommonModule/utils/APIUtils'
import { apiMethods } from '../../../CommonModule/constants/APIConstants'

class ContentManagementAPI {
    api
    constructor() {
        this.api = create({
            baseURL: 'https://localhost:8080/content-management-portal/question/api'
        });
    }

    postDataApi = () => {
        return networkCallWithApisauce(this.api, 'v1', {}, apiMethods.post);
    }
}

export { ContentManagementAPI };
