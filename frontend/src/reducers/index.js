import sessionsReducer from './sessions';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    session: sessionsReducer
});
export default rootReducer;