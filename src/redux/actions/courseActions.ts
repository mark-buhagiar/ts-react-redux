import Course from '../../models/course';
import ActionTypes from './actionTypes';
import CourseActionType from './courseActionTypes';
import * as courseApi from '../../api/courseApi';
import { ThunkAction } from 'redux-thunk';
import ApplicationState from '../states/ApplicationState';
import CourseActionTypes from './courseActionTypes';

export type CourseThunkAction<R> = ThunkAction<R, ApplicationState, unknown, CourseActionTypes>;

export function createCourse(course: Course): CourseActionType {
    return { type: ActionTypes.CREATE_COURSE, course: course };
}

export function loadCoursesSuccess(courses: Course[]): CourseActionType {
    return { type: ActionTypes.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses(): CourseThunkAction<Promise<void>> {
    return async (dispatch): Promise<void> => {
        courseApi
            .getCourses()
            .then((courses) => {
                dispatch(loadCoursesSuccess(courses));
            })
            .catch((error) => {
                throw error;
            });
    };
}
