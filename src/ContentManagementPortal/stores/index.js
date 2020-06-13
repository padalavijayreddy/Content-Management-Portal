import { ContentManagementStores } from './ContentManagementStores';

import { ContentManagementAPI } from '../services/ContentManagementServices'; //API

import ContentManagementFixture from '../services/ContentManagementServices/ContentManagementFixtures'; //Fixture

//API
//const contentManagementAPI = new ContentManagementAPI();
//const contentManagementStore = new ContentManagementStores(contentManagementAPI);

//Fixture
const contentManagementFixture = new ContentManagementFixture();
const contentManagementStore = new ContentManagementStores(contentManagementFixture);

export default { contentManagementStore };
