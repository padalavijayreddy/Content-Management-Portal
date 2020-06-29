import { ContentManagementStores } from './ContentManagementStores';

//import { ContentManagementAPI } from '../services/ContentManagementServices'; //API

import ContentManagementAPI from '../services/ContentManagementServices/ContentManagementFixtures.fixture'; //Fixture

//API
//const contentManagementAPI = new ContentManagementAPI();
//const contentManagementStore = new ContentManagementStores(contentManagementAPI);

//Fixture
const contentManagementAPI = new ContentManagementAPI();
const contentManagementStore = new ContentManagementStores(contentManagementAPI);

export default { contentManagementStore };
