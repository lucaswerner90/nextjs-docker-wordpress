
import { UPDATE_SITE_INFO, UPDATE_SITE_LOGO, UPDATE_SITE_MENUS } from '../actions/types';

const initialState = {
    name: '',
    description: '',
    logo: '',
    menus: {
        header: []
    },
};

export default (state = initialState, { payload = {}, type = '' }) => {
    switch (type) {
        case UPDATE_SITE_INFO:
            return {
                ...state,
                ...payload,
            };
        case UPDATE_SITE_LOGO:
            return {
                ...state,
                ...payload,
            };
        case UPDATE_SITE_MENUS:
            return {
                ...state,
                menus: {
                    ...payload
                },
            };
        default:
            return state;
    }
}