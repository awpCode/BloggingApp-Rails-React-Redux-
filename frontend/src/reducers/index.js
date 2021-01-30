import sessionsReducer from './sessions';
import userReducer from './users';
import articleReducer from './articles';
import categoryReducer from './categories';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    session: sessionsReducer,
    users: userReducer,
    articles: articleReducer,
    categories: categoryReducer
});
export default rootReducer;