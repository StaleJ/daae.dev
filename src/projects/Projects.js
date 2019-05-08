import React from 'react';

import { ReactComponent as GithubLogo } from '../res/github.svg';
import myProjects from '../res/myProjects';

import './Projects.css';
import '../App.css';

function Project({ name, description, githubUrl, tags }) {
  return (
    <>
      <div className="project">
        <GithubLogo className="github github-small" />
        <div className="project-props">
          <div className="project-name">{name}</div>
          <div className="project-description">{description}</div>
        </div>
      </div>
      <div className="tags">
        {tags.map(tag => <div className="tag">{tag}</div>)}
      </div>
    </>
  );
}

function Projects() {
  return (
    <div className="wrapper">
      <div className="content">
        {myProjects.map(project => <Project {...project}></Project>)}
      </div>
    </div>
  );
}

export default Projects;
