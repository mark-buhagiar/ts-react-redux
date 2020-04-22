import React from 'react';
import { Link } from 'react-router-dom';
import Course from '../../models/course';

interface Props {
    courses: Course[];
}

const CourseList = (props: Props): JSX.Element => {
    const courses = props.courses;

    return (
        <table className="table">
            <thead>
                <tr>
                    <th />
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {courses.map((course: Course) => {
                    return (
                        <tr key={course.id}>
                            <td>
                                <a className="btn btn-light" href={'http://pluralsight.com/courses/' + course.slug}>
                                    Watch
                                </a>
                            </td>
                            <td>
                                <Link to={'/course/' + course.slug}>{course.title}</Link>
                            </td>
                            <td>{course.authorName}</td>
                            <td>{course.category}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default CourseList;
