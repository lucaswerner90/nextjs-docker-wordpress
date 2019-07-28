import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const initialState = {
    siteInfo: {
        name: '',
        description: '',
        logo: '',
        menus: {
            header: []
        },
    },
    posts: []
};

const enhancers = compose(
    applyMiddleware(thunk)
);

export const makeStore = (state = initialState) => {
    return createStore(rootReducer, state, enhancers);
};