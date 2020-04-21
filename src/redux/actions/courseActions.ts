import Course from '../../models/course';
import ActionType from './actionType';
import CourseActionType from './courseActionTypes';

export function createCourse(course: Course): CourseActionType {
    return { type: ActionType.CREATE_COURSE, course: course };
}
