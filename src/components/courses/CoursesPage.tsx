import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Course from '../../models/course';
import * as AuthorActions from '../../redux/actions/authorActions';
import { AuthorThunkAction } from '../../redux/actions/authorActions';
import * as CourseActions from '../../redux/actions/courseActions';
import { CourseThunkAction } from '../../redux/actions/courseActions';
import CourseActionType from '../../redux/actions/courseActionTypes';
import ApplicationState from '../../redux/states/ApplicationState';
import CourseList from './CourseList';
import Author from '../../models/author';

const CoursesPage: React.FC<PropsFromRedux> = (props): JSX.Element => {
    useEffect(() => {
        if (props.courses.length === 0) props.loadCourses().catch((error) => console.log(error));
        if (props.authors.length === 0) props.loadAuthors().catch((error) => console.log(error));
    }, []);

    return (
        <>
            <h2>Courses</h2>
            <CourseList courses={props.courses} />
        </>
    );
};

interface ComponentProps {
    courses: Course[];
    authors: Author[];
}

// Own props is unused, but remains here for educational purposes
const mapStateToProps = (state: ApplicationState, ownProps: ComponentProps): ComponentProps => ({
    ...ownProps,
    courses: state.courses.map((x: Course) => {
        return {
            ...x,
            authorName: state.authors?.find((y: Author) => y.id === 1)?.name ?? '',
        };
    }),
    authors: state.authors,
});

const mapDispatchToProps = {
    createCourse: (course: Course): CourseActionType => CourseActions.createCourse(course),
    loadCourses: (): CourseThunkAction<Promise<void>> => CourseActions.loadCourses(),
    loadAuthors: (): AuthorThunkAction<Promise<void>> => AuthorActions.loadAuthors(),
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CoursesPage);
