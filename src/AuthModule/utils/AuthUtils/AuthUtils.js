import { getAccessToken } from '../../../CommonModule/utils/StorageUtils'

export const isLoggedIn = () => {
    return getAccessToken() !== undefined
}
