import React from 'react';
import './Resume.css';
import data from './data.js';
import Text from './Text';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

function Resume() {
  const today = new Date();
  const isBirthday = today.getMonth() === 4 && today.getDate() === 28;
  const [width, height] = useWindowSize();
  
  return (
    <div className="wrapper">
      {isBirthday && <Confetti style={{position: "fixed"}} width={width} height={height} />}
      <p>{data.intro}</p>
      <div className="animated-text">
        <Text></Text>
      </div>
      <p className="animated-text-replacement">{data.freeTime}</p>
      <p>{data.contact}</p>
      <Divider></Divider>
      <h1>Work Experience</h1>
      {data.work.map(work =>
        <Block key={work.title} title={work.title} subtitle={work.time} description={work.description} tags={work.tags}></Block>
      )}
      <Divider></Divider>
      <h1>Education</h1>
      {data.education.map(school =>
        <Block key={school.title} title={school.title} subtitle={school.time} tags={school.tags}></Block>
      )}
    </div>
  );
}

function Block({ title, subtitle, description, tags, github }) {
  return (
    <div className="block">
      <h2>{title}</h2>
      <p className="time">{subtitle}</p>
      {description && <p>{description}</p>}
      {tags && <div>
        {tags.map(tag => <Tag key={tag.text} text={tag.text} color={tag.color}></Tag>)}
      </div>}
      {github && <a className="github" href={github}>Git Repository</a>}
    </div>
  );
}

function Tag({ text, color }) {
  return (
    <div className="tag" style={{ "border": "solid 1px " + data.colors[color], color: data.colors[color] }}>{text}</div>
  );
}

function Divider() {
  return <div class="divider"></div>;
}

export default Resume;
