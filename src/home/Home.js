import React from 'react';
import './Home.css';
import { ReactComponent as GithubLogo } from '../res/github.svg';

function Home() {
  return (
    <div className="wrapper">
      <div className="content">
        <GithubLogo className="github github-big spinning"></GithubLogo>
        <div className="welcome">Hi, I'm Petter. I'm studying computer tehcnology at <b>UiB</b> and working part-time as a junior developer in <b>Sbanken</b>.</div>
        <img src="https://www.hackthebox.eu/badge/image/71349" alt="Hack The Box" class="htb"></img>
      </div>
    </div>
  );
}

export default Home;