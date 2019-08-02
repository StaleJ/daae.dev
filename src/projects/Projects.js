import React from 'react';

import './Projects.css';
import '../App.css';

function Projects() {
  return (
    <div className="projects">
      <Project
        title="Curryfish"
        subtitle="UCI chess engine in Haskell"
        image="./chess.jpeg"
        githubPath="/petterdaae/curryfish">
      </Project>
      <Project
        title="Rubikscube"
        subtitle="Rubiks cube in Three.js"
        image="./rubik.jpg"
        githubPath="/petterdaae/rubikscube">
      </Project>
      <Project
        title="Canvas CLI"
        subtitle="CLI for the Canvas LMS"
        image="./canvas.jpg"
        githubPath="/jalgroy/canvascli">
      </Project>
      <Project
        title="petterdaae.com"
        subtitle="My personal website"
        image="./web.jpg"
        githubPath="/petterdaae/petterdaae.com">
      </Project>
    </div>
  );
}

class Project extends React.Component {

  constructor(props) {
    super(props);
    this.state = { ...props, stars: 0 };
    fetch(`https://api.github.com/repos${props.githubPath}/stargazers?page=$i&per_page=100`)
      .then(response => response.json())
      .then(data => {
        this.setState({ stars: data.length });
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

export default Projects;
