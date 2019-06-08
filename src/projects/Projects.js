import React from 'react';

import { ReactComponent as GithubLogo } from '../res/github.svg';
import myProjects from '../res/myProjects';

import { ReactComponent as HaskellLogo } from '../res/haskell.svg';

import './Projects.css';
import '../App.css';


function Projects() {
  return (
    <div className="projects">
      <Project title="Curryfish" subtitle="UCI chess engine in Haskell" image="./chess.jpeg" githubPath="/petterdaae/curryfish"></Project>
      <Project title="Rubikscube" subtitle="Rubiks cube in Three.js" image="./rubik.jpg" githubPath="/petterdaae/rubikscube"></Project>
    </div>
  );
}

class Project extends React.Component {

  constructor(props) {
    super(props);
    this.state = { ...props, stars: 0 };
    this.props = props;
    fetch(`https://api.github.com/repos${props.githubPath}/stargazers?page=$i&per_page=100`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({stars: data.length});
      });
  }

  render() {
    return (
      <div className="project" onClick={() => redirectToGithub(this.state.githubPath)}>
        <img src={this.state.image}></img>
        <h2>{this.state.title}</h2>
        <p>{this.state.subtitle}</p>
        <p className="stars">&#9733; {this.state.stars}</p>
      </div>
    );
  }
}

function redirectToGithub(githubPath) {
  window.location.href = "https://www.github.com" + githubPath;
}




/*
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
*/
export default Projects;
