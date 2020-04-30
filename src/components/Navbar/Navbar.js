import React, {Fragment} from 'react';
import {Link, NavLink} from "react-router-dom";
import style from "./Navbar.module.sass";


function Navbar() {
    return (
        <Fragment>
            <nav className={`grey darken-4 ${style.Navbar}`}>
                <div className="nav-wrapper container">
                    <Link to="/" className={`hide-on-med-and-down brand-logo ${style.Logo}`}>
                        <img src="/assets/img/favicon.svg" alt="img" />
                        <h5>Denis Fedorovici</h5>
                    </Link>
                    <ul id="nav-mobile" className="right">
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        <li><NavLink to="/works">Portfolio</NavLink></li>
                        <li><NavLink to="/skills">Skills</NavLink></li>
                        <li><NavLink to="/about">About me</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
}

export default Navbar;
