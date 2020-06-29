import AuthAPI from '../services/AuthenticationService/index.fixture'
//import { AuthAPI } from '../services/AuthenticationService/AuthAPI'
import { AuthStore } from './AuthStore'

const authAPI = new AuthAPI()
const authStore = new AuthStore(authAPI)

export default { authStore }
