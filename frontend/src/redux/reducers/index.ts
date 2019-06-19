import { combineReducers } from 'redux';
import siteInfoReducer from './siteInfoReducer';

export default combineReducers({
    siteInfo: siteInfoReducer,
});
