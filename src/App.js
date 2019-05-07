import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Courses from './courses/Courses';
import Projects from './projects/Projects';
import Home from './home/Home';
import './App.css';

const HeaderLink = props => <Link className="header-link" to={props.path}>{props.name}</Link>

const Header = props =>
  <div className="header">
    <HeaderLink name="Home" path="/"></HeaderLink>
    <HeaderLink name="Projects" path="/projects"></HeaderLink>
    <HeaderLink name="Courses" path="courses"></HeaderLink>
    <HeaderLink name="Blog" path="/blog"></HeaderLink>
  </div>

function App() {
  return (
      <Router>
        <Header></Header>
        <Route path="/" exact component={Home}></Route>
        <Route path="/courses" component={Courses}></Route>
        <Route path="/projects" component={Projects}></Route>
      </Router>
  );
}

export default App;
