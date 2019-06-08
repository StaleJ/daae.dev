import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Courses from './courses/Courses';
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
          <Link className="header-link" to="/courses">About</Link>
        </div>
      </div>
      <Route path="/" exact component={Home}></Route>
      <Route path="/courses" component={Courses}></Route>
      <Route path="/projects" component={Projects}></Route>
    </Router>
  );
}

export default App;
