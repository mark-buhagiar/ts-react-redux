import Course from '../../models/course';
import ActionType from './actionType';

interface CreateCourseAction {
    type: typeof ActionType.CREATE_COURSE;
    course: Course;
}

interface DeleteCourseAtIndex {
    type: typeof ActionType.DELETE_COURSE_AT_INDEX;
    index: number;
}

type CourseActionTypes = CreateCourseAction | DeleteCourseAtIndex;
export default CourseActionTypes;
