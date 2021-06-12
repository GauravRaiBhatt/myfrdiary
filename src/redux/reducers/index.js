import {combineReducers} from 'redux';
import userReducer from './userReducer';
import dataReducer from './dataReducer';

const allReducers = combineReducers({
    user:userReducer,
    data:dataReducer,
});

export default allReducers;