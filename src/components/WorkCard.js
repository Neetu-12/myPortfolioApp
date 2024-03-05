import React from 'react';
import './workCardStyles.css';
// import pro1 from '../assets/project1.png';
import { NavLink } from 'react-router-dom';

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt='image' />
      <h2 className="project-tittle">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink target="_blank" to={props.view} className="btn">View</NavLink>
          <NavLink target="_blank" to={props.source} className="btn">Source</NavLink>
        </div>
      </div>
    </div>
  )
}

export default WorkCard;