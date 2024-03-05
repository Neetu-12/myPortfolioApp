import './HeroImgStyles.css';
import React from 'react';
import IntroImg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className="mask">
        <img className='into-img' src={IntroImg} alt='IntroImg' />
      </div>
      <div className="content">
        <p>HI I'M MERN STACK DEVELOPER !</p>
        <h1>MERN DEVELOPER</h1>
        <div>
          <Link to='/project' className='btn'>PROJECT</Link>
          <Link to='/contact' className='btn btn-light'>CONTACT</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg;