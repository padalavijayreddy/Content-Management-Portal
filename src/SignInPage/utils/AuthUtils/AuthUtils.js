import { getAccessToken } from '../../../utils/StorageUtils';

export const isLoggedIn = () => {
    return getAccessToken() !== undefined;
};
