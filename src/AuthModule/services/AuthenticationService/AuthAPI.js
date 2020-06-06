import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'

class AuthAPI {
   api
   constructor() {
      this.api = create({
         baseURL: 'https://34b482475a80.ngrok.io/api/content_management_portal/'
      });
   }

   signInAPI = (requestObject) => {
      return networkCallWithApisauce(this.api, 'login/v1/', requestObject, apiMethods.post);
   }
}

export { AuthAPI }
