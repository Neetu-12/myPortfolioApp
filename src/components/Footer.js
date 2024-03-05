import React from 'react';
import './FooterStyles.css';
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">

                <div className="left">
                    <div className="location">
                        <div>
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            <a href="https://www.google.com/maps?q=28.6670872,77.0647369&z=17&hl=en" target="_blank" className='address' >
                                G-83/21 ,laxmi park nangloi, Delhi-110041, INDIA
                            {/* <p>India</p>  */}
                            </a>
                        </div>
                    </div>

                    <div className="phone">
                        <h4> <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            <a href="tel:PHONE"> 9310513448 </a>
                        </h4>
                    </div>
                    <div className="email">
                        <h4> <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            <a href="mailto:neetus21@navgurukul.org">neetus21@navgurukul.org</a>
                        </h4>
                    </div>
                </div>

                <div className="right">
                    <h4>About me</h4>
                    <p>
                        Hi, I am Neetu Sah, a skilled MERN stack developer with a strong foundation in MongoDB, Express, React, and Node.js. Powerful technologies that form the backbone of modern web development.
                    </p>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/neetu-sah-b9b1aa233/" target="_blank" rel="noopener noreferrer"> <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                        <a href="https://github.com/Neetu-12?tab=repositories" target="_blank" rel="noopener noreferrer"> <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                        <a href="https://wa.me/9310513448" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                        <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer