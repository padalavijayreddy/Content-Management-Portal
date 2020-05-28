import CounterStore from './CounterStore';
import AuthStores from '../SignInPage/stores';
import ContentManagementStores from '../ContentManagementPortal/stores';

const counterStore = new CounterStore();
console.log(AuthStores);
console.log(ContentManagementStores);

export default {
   ...ContentManagementStores,
   ...AuthStores,
   counterStore
};
