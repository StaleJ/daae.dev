import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { ReactComponent as GithubSvg } from './res/github.svg';
import { ReactComponent as LinkedInSvg } from './res/linkedin.svg';

import Projects from './projects/Projects';
import Home from './home/Home';

import './App.css';

function App() {
  return (
    <Router>
      <div class="top">
        <div className="name">Petter Daae</div>
        <div className="header">
          <Link className="header-link" to="/">Home</Link>
          <Link className="header-link" to="/projects">Projects</Link>
          <Link className="header-link"
            onClick={() => window.location.href = "https://github.com/petterdaae"}>
            <GithubSvg className="svg-link"></GithubSvg>
          </Link>
          <Link className="header-link"
            onClick={() => window.location.href = "https://www.linkedin.com/in/petter-daae-6b7995159/"}>
            <LinkedInSvg className="svg-link"></LinkedInSvg>
          </Link>
        </div>
      </div>
      <Route path="/" exact component={Home}></Route>
      <Route path="/projects" component={Projects}></Route>
    </Router>
  );
}

export default App;
