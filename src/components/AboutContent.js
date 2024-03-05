import React from 'react';
import { Link } from 'react-router-dom';
import './aboutContentStyles.css';
import react1 from '../assets/react1.jpg';
import react2 from '../assets/react2.webp';


const AboutContent = () => {
    return (
        <div className='about'>
            <div className="left">
                <h1>Who Am I ?</h1>
                <p>I am MERN Stack developer. I created a responsive
                    secure Website in my project.
                </p>
                <div>
                    <Link to='https://drive.google.com/file/d/1T2BjfvH4mRF1ZwEXPjcMrPOPgzi5Sh61/view?usp=sharing' className='btn' target="_blank" >
                      SEE MY  Resume
                    </Link>
                    <Link to="/contact" >
                        <button className='btn'>Contact</button>
                    </Link>
                </div>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={react1} className='img' alt='true' />
                    </div>
                    <div className="img-stack buttom">
                        <img src={react2} className='img' alt='true' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;