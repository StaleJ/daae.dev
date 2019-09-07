import React from 'react';
import Text from './Text';
import './Home.css';

function Home() {
  return (
    <div className="wrapper">
      <h1>&lt;me&gt;</h1>
      <p className="intro">Yo, I'm Petter. I study Computer Technology at the University of Bergen. 
      This semester, my subjects are concurrent programming, software security and machine learning.
      I also work part-time as a junior developer in Sbanken and as a teaching assistant in an algorithms class.</p>
      <Text></Text>
      <h1>&lt;/me&gt;</h1>
    </div>
  );
}

export default Home;
