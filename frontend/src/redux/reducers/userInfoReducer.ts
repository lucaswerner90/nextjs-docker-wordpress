
import { UPDATE_USER_INFO } from '../actions/types';

const initialState = {};

export default (state = initialState, { payload = {}, type = '' }) => {
    switch (type) {
        case UPDATE_USER_INFO:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
}