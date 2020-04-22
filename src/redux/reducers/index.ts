import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorsReducer';
import ApplicationState from '../states/ApplicationState';

const rootReducer = combineReducers<ApplicationState>({
    courses,
    authors,
});

export default rootReducer;
