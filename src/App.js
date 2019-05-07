import React from 'react';
import Courses from './Courses';
import './App.css';

const HeaderLink = props => <div className="header-link">{props.name}</div>

const Header = props =>
  <div className="header">
    <HeaderLink name="Home"></HeaderLink>
    <HeaderLink name="Projects"></HeaderLink>
    <HeaderLink name="Courses"></HeaderLink>
    <HeaderLink name="Blog"></HeaderLink>
  </div>

function App() {
  return (
    <div>
      <Header></Header>
      <Courses></Courses>
    </div>
  );
}

export default App;
