import React from 'react';
import Text from './Text';
import './Home.css';

function Home() {
  return (
    <div className="wrapper">
      <h1 className="commits">Hello 👋</h1>
      <p className="intro">
        I study computer technology in Bergen 🎓<br />
        If you want to get in touch, you can send me an email: <br />
        <a href="mailto: petter.daae@gmail.com" className="email-link">petter.daae@gmail.com</a>
      </p>
      <Text></Text>
    </div>
  );
}

export default Home;
