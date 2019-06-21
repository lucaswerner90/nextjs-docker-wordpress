import { combineReducers } from 'redux';
import siteInfoReducer from './siteInfoReducer';
import postReducer from './postReducer';

export default combineReducers({
    siteInfo: siteInfoReducer,
    posts: postReducer
});
