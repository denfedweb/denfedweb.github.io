import React from 'react';
import style from "./home.module.sass"
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className={style.tale}>
            <div>
                <Link to="/blog">
                    <img src="/assets/img/blog.jpg" alt="img"/>
                    <span>Blog</span>
                </Link>
            </div>
            <div>
                <Link to="/works">
                    <img src="/assets/img/works.jpg" alt="img"/>
                    <span>Portfolio</span>
                </Link>
            </div>
            <div>
                <Link to="/skills">
                    <img src="/assets/img/skillstale.png" alt="img"/>
                    <span>Skills</span>
                </Link>
            </div>
            <div>
                <Link to="/about">
                    <img src="/assets/img/about.jpg" alt="img"/>
                    <span>About me</span>
                </Link>
            </div>
            <div>
                <Link to="/contact">
                    <img src="/assets/img/contact.jpg" alt="img"/>
                    <span>Contact</span>
                </Link>
            </div>
            <div>
                <a href="/">
                    <img src="/assets/img/website.jpg" alt="img"/>
                    <span>This website</span>
                </a>
            </div>
        </div>
    );
}

export default Home;
