import React from 'react';
import style from "./Footer.module.sass";

function Footer() {
    return (
        <div className={`footer ${style.footer}`}>
            <ul>
                <li><a href="https://vk.com/denfedweb" rel="noopener noreferrer" target="_blank"
                ><i className="fab fa-vk"/></a></li>
                <li><a href="https://github.com/denfedweb" rel="noopener noreferrer" target="_blank"
                ><i className="fab fa-github"/></a></li>
                <li><a href="http://t.me/denfedweb" rel="noopener noreferrer" target="_blank"
                ><i className="fab fa-telegram"/></a></li>
                <li><a href="https://www.linkedin.com/in/denfedweb/" rel="noopener noreferrer" target="_blank"
                ><i className="fab fa-linkedin"/></a></li>
                <li> <a href="https://www.facebook.com/profile.php?id=100001728476381" rel="noopener noreferrer" target="_blank"
                ><i className="fab fa-facebook"/></a></li>
            </ul>
        </div>
    );
}

export default Footer;
