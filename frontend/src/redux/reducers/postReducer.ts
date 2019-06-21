
import { GET_POSTS } from '../actions/types';

const initialState = [];

export default (state = initialState, { payload = {}, type = '' }) => {
    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
}