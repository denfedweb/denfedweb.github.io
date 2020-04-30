import React from 'react';
import style from "./about.module.sass";

function About() {
    return (
        <div className={`row ${style.row}`}>
            <div className={`col l4 ${style.leftBlock}`}>
                <h3 className="title-text">About me</h3>
                <div className={style.imgWrap}>
                    <img src="/assets/img/me.jpeg" alt="img" />
                </div>
                <ul>
                    <li><i className="fas fa-envelope"/> <a href="mailto:denfedweb@mail.ru">denfedweb@mail.ru</a></li>
                    <li><i className="fas fa-phone"/> <a href="tel: +37360368152">+373 60368152</a></li>
                    <li><i className="fab fa-vk"/> <a href="https://vk.com/denfedweb" rel="noopener noreferrer" target="_blank">vk.com/denfedweb</a></li>
                    <li><i className="fab fa-github"/> <a href="https://github.com/denfedweb" rel="noopener noreferrer" target="_blank">github.com/denfedweb</a></li>
                    <li><i className="fab fa-telegram"/> <a href="http://t.me/denfedweb" rel="noopener noreferrer" target="_blank">t.me/denfedweb</a></li>
                    <li><i className="fab fa-linkedin"/> <a href="https://www.linkedin.com/in/denfedweb/" rel="noopener noreferrer" target="_blank">linkedin.com/in/denfedweb</a></li>
                    <li><i className="fab fa-facebook"/> <a href="https://www.facebook.com/denfedweb" rel="noopener noreferrer" target="_blank">facebook.com/denfedweb</a></li>
                </ul>
            </div>
            <div className={`col l8 ${style.rightBlock}`}>
                <h5>Hi, my name is Denis</h5>
                <p>I have been developing since 2018, I love everything related to javascript, this is my favorite programming language, and I tried a lot of them.</p>
                <h5>My work experience:</h5>
                <ul>
                    <li>Sonero Com: 01/07/2019 - NOW</li>
                    <li>Freelance: 2018 - 2019</li>
                </ul>

                <h5>My education:</h5>
                <ul>
                    <li>Educational Ins.: Slavonic University</li>
                    <li>Specialization: Information Technology</li>
                    <li>Period of study: 2015-2019</li>
                </ul>
                <a href="/assets/files/Denis's Resume.pdf" download>Download my CV</a>
            </div>
        </div>
    );
}

export default About;
