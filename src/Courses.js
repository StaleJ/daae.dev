import React from 'react';
import './App.css';

const myCourses = [
    {
        code: "INF100",
        name: "Introduction to Programming",
        description: "I learned the basics of java.",
        tags: [
            "Java",
        ],
    },
    {
        code: "INF101",
        name: "Object-oriented programming",
        description: "I learned about object-oriented principles using java.",
        tags: [
            "Java",
            "Object-orientation",
        ],
    },
    {
        code: "INF102",
        name: "Algorithms, Data Structures and Programming",
        description: "I learned how to implement different data structures and algorithms (sorting, graphs, stacks, queues, etc ...). There was also a lot of focus on runtime analysis.",
        tags: [
            "Java",
            "Algorithms",
            "Data structures",
            "Runtime analysis",
        ],
    },
    {
        code: "INF122",
        name: "Functional Programming",
        description: "I learned the basics of functional programming in Haskell. There was a lot of focus on writing parsers for simple languages.",
        tags: [
            "Haskell",
            "Functional programming",
            "Programming languages",
        ],
    },
    {
        code: "INF115",
        name: "Databases and Modelling",
        description: "I learned about SQL, database design, ER diagrams, normalisation and a bunch of other database related stuff.",
        tags: [
            "SQL",
            "ER diagram",
            "HTML",
            "PHP",
            "XML",
            "mariadb",
        ],
    },
    {
        code: "MNF130",
        name: "Discrete Structures",
        description: "Basic logic, set theory, graphs, etc ...",
        tags: [
            "Logic",
            "Sets",
            "Graphs",
        ],
    },
    {
        code: "DAT103",
        name: "Computers and Operating Systems",
        description: "A brief introduction about how different paradigms in OS work.",
        tags: [
            "Bash",
            "Assembly",
            "Synchronization",
            "Linux",
        ],
    },
    {
        code: "MAT111",
        name: "Calculus 1",
        description: "Functions, derivation, integration, etc ...",
        tags: [
            "Functions",
            "Derivation",
            "Integration",
        ],
    },
];

function Course({ code, name, description, tags }) {
    return (
        <div className="course">
            <div className="course-code">{code}</div>
            <div className="course-name">{name}</div>
            <div className="course-description">{description}</div>
            {tags.map(tag => <div className="tag">{tag}</div>)}
        </div>
    );
}

function Courses() {
    return (
        <div class="courses-wrapper">
            <div className="courses">
                {myCourses.map(course => <Course {...course}></Course>)}
            </div>
        </div>
    );
}

export default Courses;