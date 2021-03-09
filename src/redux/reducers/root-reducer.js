import { combineReducers } from 'redux';
import movieReducer from './movie-reducer';
import userReducer from './user-reducer';

const rootReducer = combineReducers({
    movieReducer,
    userReducer
});

export default rootReducer;
