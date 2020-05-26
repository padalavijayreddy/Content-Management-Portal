import CounterStore from './CounterStore'
import AuthStores from '../SignInPage/stores';

const counterStore = new CounterStore();

export default {
    ...AuthStores,
    counterStore,
};
