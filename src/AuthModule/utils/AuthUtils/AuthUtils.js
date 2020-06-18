import { getAccessToken } from '../../../CommonModule/utils/StorageUtils'

export const isLoggedIn = () => {
    return getAccessToken() !== undefined
}


export const networkCallWithApisauce = async(
   api,
   url,
   requestObject,
   type = apiMethods.post
) => {
   let response = null
   api.setHeader('Content-Type', 'application/json; charset=UTF-8')
   try {
      response = await getData(api, url, requestObject, type)
   }
   catch (error) {
      throw error
   }
   return response
}