import Course from '../../models/course';
import ActionTypes from './actionTypes';

interface CreateCourseAction {
    type: typeof ActionTypes.CREATE_COURSE;
    course: Course;
}

interface DeleteCourseAtIndex {
    type: typeof ActionTypes.DELETE_COURSE_AT_INDEX;
    index: number;
}

interface LoadCoursesSuccess {
    type: typeof ActionTypes.LOAD_COURSES_SUCCESS;
    courses: Course[];
}

type CourseActionTypes = CreateCourseAction | DeleteCourseAtIndex | LoadCoursesSuccess;
export default CourseActionTypes;
