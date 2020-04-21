import Course from '../../models/course';
import CourseActionTypes from '../actions/courseActionTypes';
import ActionType from '../actions/actionType';

const initialState: Course[] = [];

export default function courseReducer(state = initialState, action: CourseActionTypes): Course[] {
    switch (action.type) {
        case ActionType.CREATE_COURSE:
            return [...state, { ...action.course }];
        default:
            return state;
    }
}
