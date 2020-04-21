import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import Course from '../../models/course';
import * as CourseActions from '../../redux/actions/courseActions';
import CourseActionType from '../../redux/actions/courseActionTypes';
import ApplicationState from '../../redux/states/ApplicationState';

const CoursesPage: React.FC<PropsFromRedux> = (props): JSX.Element => {
    const [course, setCourse] = useState<Course>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setCourse({ ...course, title: event.target.value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        props.createCourse(course);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Courses</h2>
            <h3>Add Course</h3>
            <input type="text" onChange={handleChange} value={course?.title || ''} />
            <input type="submit" value="Save" />
            <h3>Courses</h3>
            {props.courses.map((course) => (
                <div key={course.title}>{course.title}</div>
            ))}
        </form>
    );
};

interface ComponentProps {
    courses: Course[];
}

const mapStateToProps = (state: ApplicationState, ownProps: ComponentProps): ComponentProps => ({
    ...ownProps,
    courses: state.courses,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: Dispatch<CourseActionType>): any => {
    return {
        createCourse: (course: Course): CourseActionType => dispatch(CourseActions.createCourse(course)),
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CoursesPage);
