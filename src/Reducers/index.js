import {combineReducers} from 'redux';
import { userStoredAnswer } from './UserAnswer';
import { isLoggesUser } from './isLogged';
import{answredIndex} from './isIndex'
export const allReducers = combineReducers({
    storeAnswer:userStoredAnswer,
    isLogged:isLoggesUser,
    index:answredIndex
})