import React from "react";
//import { ReactDOM } from 'react-dom';
import Profile from "../../Images/ProfilePic.jpg";
import "../UserCard/UserCard.css";

export default function UserCard() {
  const name = "TANVI AGARWAL";
  const designation = "Associate II, India";
  const skill = [
    "React.js",
    "React Native",
    "Javascript",
    "Typescript",
    "HTML",
    "CSS",
    "Git",
    "Jira",
    "Jenkins",
    "GraphQL",
    "Python",
    "Sonarqube",
    "JFrog",
  ];
  return (
    <div className="container">
      <img className="pic" src={Profile} alt="profile" />
      <div className="name">{name}</div>
      <div className="designation">{designation}</div>
      <div className='heading'>SKILLS</div>
      <ul className='list'>
        {skill.map((item) => <li className='item'>{item}</li>)}
      </ul>
    </div>
  );
}
