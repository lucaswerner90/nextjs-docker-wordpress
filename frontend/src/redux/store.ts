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
    }
};

const enhancers = compose(
    applyMiddleware(thunk)
);
// const store = createStore(
//     rootReducer,
//     initialState,
//     compose(
//         applyMiddleware(...middleware)
//     )
// );

// export default store;
export const makeStore = (state = initialState) => {
    return createStore(rootReducer, state, enhancers);
};