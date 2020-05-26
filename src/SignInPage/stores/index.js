import { AuthAPI } from '../services/AuthenticationService';
import { AuthStore } from './AuthStore';

const authAPI = new AuthAPI();
const authStore = new AuthStore(authAPI);

export default { authStore };
