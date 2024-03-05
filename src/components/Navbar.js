import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbarStyles.css';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [click, setclick] = useState(false);
    const handleClick = () => setclick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        }
        else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    return (
        <dv className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/" onClick={handleClick}>Home</Link>
                </li>
                <li>
                    <Link to="/Project" onClick={handleClick}>Project</Link>
                </li>
                <li>
                    <Link to="/About" onClick={handleClick}>About</Link>
                </li>
                <li>
                    <Link to="/Contact" onClick={handleClick}>Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>

                {click ? (
                    <FaTimes size={20} style={{ color: "#fff" }} />
                ) : (
                    <FaBars size={20} style={{ color: "#fff" }} />
                )}

            </div>
        </dv>
    )
}

export default Navbar;