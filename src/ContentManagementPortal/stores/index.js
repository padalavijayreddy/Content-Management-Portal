import { ContentManagementStores } from './ContentManagementStores';
import { ContentManagementAPI } from '../services/ContentManagementServices';
import ContentManagementFixture from '../services/ContentManagementServices/index.fixture';


const contentManagementAPI = new ContentManagementAPI();
const contentManagementFixture = new ContentManagementFixture();
const contentManagementStore = new ContentManagementStores(contentManagementFixture);

export default { contentManagementStore };
