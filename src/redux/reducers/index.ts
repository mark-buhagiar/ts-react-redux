import { combineReducers } from 'redux';
import courses from './courseReducer';
import ApplicationState from '../states/ApplicationState';

const rootReducer = combineReducers<ApplicationState>({
    courses,
});

export default rootReducer;
