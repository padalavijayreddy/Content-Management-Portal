import CounterStore from './CounterStore';
import AuthStores from '../../AuthModule/stores';
import ContentManagementStores from '../../ContentManagementPortal/stores';

const counterStore = new CounterStore();

export default {
   ...ContentManagementStores,
   ...AuthStores,
   counterStore
};
