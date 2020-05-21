import React from 'react';
import style from './works.module.sass';
import LazyImage from "../../components/LazyImage/LazyImage";

function Works() {
    return (
        <div className={style.block}>
            <h3 className="title-text">Portfolio</h3>
            <div className="row">
                <div className="col s12 m6 l4">
                    <a href="https://nyfurnitureoutlets.com/" rel="noopener noreferrer" target="_blank" className={style.imgWrap}>
                        <LazyImage image={{src: "/assets/img/nyf.png", alt: "img"}} />
                        <div>
                            <i className="fas fa-search"/>
                        </div>
                    </a>
                </div>
                <div className="col s12 m6 l4">
                    <a href="https://www.nfoutlet.com/" rel="noopener noreferrer" target="_blank" className={style.imgWrap}>
                        <LazyImage image={{src: "/assets/img/nfo.png", alt: "img"}} />
                        <div>
                            <i className="fas fa-search"/>
                        </div>
                    </a>
                </div>
                <div className="col s12 m6 l4">
                    <a href="https://www.liberatingresearch.com/" rel="noopener noreferrer" target="_blank" className={style.imgWrap}>
                        <LazyImage image={{src: "/assets/img/lr.png", alt: "img"}} />
                        <div>
                            <i className="fas fa-search"/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Works;
