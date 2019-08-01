import { UPDATE_USER_INFO } from './types';

export const updateUserInfo = (payload) => async dispatch => {
    try {
        return dispatch({
            payload,
            type: UPDATE_USER_INFO,
        });
    } catch (error) {
    }
}