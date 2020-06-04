import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'

class AuthAPI {
   api
   constructor() {
      this.api = create({
         baseURL: 'https://d96f8da1772c.ngrok.io/api/content_management_portal/'
      });
   }

   signInAPI = (requestObject) => {
      return networkCallWithApisauce(this.api, 'login/v1/', requestObject, apiMethods.post);
   }
}

export { AuthAPI }
