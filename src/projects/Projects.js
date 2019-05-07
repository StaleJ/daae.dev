import React from 'react';
import './Projects.css';
import { ReactComponent as GithubLogo } from './github.svg';

const myProjects = [
  {
    name: "Canvas CLI",
    description: "CLI for the Canvas LMS",
    githubUrl: "https://github.com/jalgroy/canvascli",
    tags: [
      "Python",
      "CLI",
    ],
  },
  {
    name: "UCI Chess AI in Haskell",
    description: "Chess bot in haskell",
    githubUrl: "https://github.com/jalgroy/canvascli",
    tags: [
      "Haskell",
      "Chess",
      "Functional programming",
    ],
  },
  {
    name: "Minesweeper in ELM",
    description: "My first project in ELM",
    githubUrl: "https://github.com/jalgroy/canvascli",
    tags: [
      "ELM",
      "CSS",
      "Functional Programming",
    ],
  },
  {
    name: "petterdaae.com",
    description: "This website",
    githubUrl: "https://github.com/jalgroy/canvascli",
    tags: [
      "React",
      "Javascript",
      "CSS",
      "HTML",
    ],
  },
];

function Project({ name, description, githubUrl, tags }) {
  return (
    <div className="project">
      <GithubLogo className="github-logo"/>
      <div className="project-props">
        <div className="project-name">{name}</div>
        <div className="project-description">{description}</div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <div className="projects-wrapper">
      <div className="projects">
        {myProjects.map(project => <Project {...project}></Project>)}
      </div>
    </div>
  );
}

export default Projects;
