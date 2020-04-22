import Course from '../../models/course';
import Author from '../../models/author';

export default interface ApplicationState {
    courses: Course[];
    authors: Author[];
}
