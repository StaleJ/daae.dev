import React from 'react';
import './Home.css';

function Home() {
  return (
    <>
      <h1 className="commits">Hello! I'm Petter</h1>
      <p className="intro">
        I study computer technology @UiB <br />
        If you want to get in touch, you can send me an email <br />
        <a href="mailto: petter.daae@gmail.com" className="email-link">petter.daae@gmail.com</a>
      </p>
    </>
  );
}

export default Home;
