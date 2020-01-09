import React from 'react';
import './Resume.css';
import data from './data.js';
import ImageComponent from 'react-rounded-image';
import Image from './petter.jpg';
import Text from '../home/Text';

function Resume() {
  console.log(data);
  return (
    <div className="wrapper">
      <ImageComponent
        roundedSize="0"
        image={Image}
        imageWidth="300"
        imageHeight="300"
      ></ImageComponent>
      <p>{data.intro}</p>
      <Text></Text>
      <p>{data.contact}</p>
      <Divider></Divider>
      <h1>Work Experience</h1>
      {data.work.map(work =>
        <Block key={work.title} title={work.title} subtitle={work.time} description={work.description} tags={work.tags}></Block>
      )}
      <Divider></Divider>
      <h1>Projects</h1>
      {data.projects.map(proj =>
        <Block key={proj.title} title={proj.title} subtitle={proj.description} tags={proj.tags}></Block>
      )}
      <Divider></Divider>
      <h1>Education</h1>
      {data.education.map(school =>
        <Block key={school.title} title={school.title} subtitle={school.time} tags={school.tags}></Block>
      )}
    </div>
  );
}

function Block({ title, subtitle, description, tags }) {
  return (
    <div className="block">
      <h2>{title}</h2>
      <p className="time">{subtitle}</p>
      {description && <p>{description}</p>}
      {tags && <div>
        {tags.map(tag => <Tag key={tag.text} text={tag.text} color={tag.color}></Tag>)}
      </div>}
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