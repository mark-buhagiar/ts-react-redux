import Course from '../../models/course';
import CourseActionTypes from '../actions/courseActionTypes';
import ActionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action: CourseActionTypes): Course[] {
    switch (action.type) {
        case ActionTypes.CREATE_COURSE:
            return [...state, { ...action.course }];
        case ActionTypes.LOAD_COURSES_SUCCESS:
            return [...action.courses];
        default:
            return state;
    }
}
