import React, {useEffect, useState} from 'react';
import style from './works.module.sass';
import LazyImage from "../../components/LazyImage/LazyImage";

function Works() {
    const [state, setState] = useState({data: []});

    useEffect(()=>{
        fetch("/db/portfolio.json").then((data) => data.json()).then(data => {
          setState(data);
        });
    }, []);

    return (
        <div className={style.block}>
            <h3 className="title-text">Portfolio</h3>
            <div className="row">
              {state.data.map(data => (
                <div className="col s12 m6 l4" key={data.url}>
                  <a href={data.url} rel="noopener noreferrer" target="_blank" className={style.imgWrap}>
                    <LazyImage image={{src: data.image, alt: "img"}} />
                    <div>
                      <i className="fas fa-search"/>
                      <div className={style.hoverBlock}>
                        <span className={style.hoverBlockTags}>
                          {data.stack.map((tag, idx) => (<span key={idx}>{tag}</span>))}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
        </div>
    );
}

export default Works;
