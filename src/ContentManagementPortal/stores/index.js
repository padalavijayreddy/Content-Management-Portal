import { AuthAPI } from '../services/AuthenticationService';
import { AuthStore } from './AuthStore';
import { ContentManagementStores } from './ContentManagementStores';

const authAPI = new AuthAPI();
const authStore = new AuthStore(authAPI);
const contentManagementStore = new ContentManagementStores();

export default { authStore, contentManagementStore };
