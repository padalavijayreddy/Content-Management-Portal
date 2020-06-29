import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'
import Config from '../../../CommonModule/constants/EnvironmentConstants'

class AuthAPI {
   api
   constructor() {
      this.api = create({
         baseURL: 'https://75183e2f2111.ngrok.io/api/content_management_portal/'
      })
      console.log(Config)
   }

   signInAPI = requestObject => {
      return networkCallWithApisauce(
         this.api,
         'login/v1/',
         requestObject,
         apiMethods.post
      )
   }
}

export { AuthAPI }
