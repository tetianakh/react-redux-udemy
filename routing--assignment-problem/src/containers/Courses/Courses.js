import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Courses.css';
import Course from '../Course/Course';


class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],

    }

    courseSelectedHandle = (selectedCourse) => {
      this.props.history.push({
        pathname: "/courses/" + selectedCourse.id
      })

    }

    render () {

        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                              <article
                                className="Course"
                                key={course.id}
                                onClick={() => this.courseSelectedHandle(course)}>{course.title}</article>)
                        } )
                    }
                </section>
                <Route path={"/courses/:postId"} exact render={(props) => <Course courses={this.state.courses} {...props} />} />
            </div>
        );
    }
}

export default Courses;
