import React from 'react';

import myCourses from '../res/myCourses';

import '../App.css';
import './Courses.css';

function Course({ code, name, description, tags }) {
    return (
        <>
            <div className="course">
                <div className="course-code">{name}</div>
                <div className="course-name">{code}</div>
                <div className="course-description">{description}</div>
            </div>
            <div className="tags">{tags.map(tag => <div className="tag">{tag}</div>)}</div>
        </>
    );
}

function Courses() {
    return (
        <div class="wrapper">
            <div className="content">
                {myCourses.map(course => <Course {...course}></Course>)}
            </div>
        </div>
    );
}

export default Courses;