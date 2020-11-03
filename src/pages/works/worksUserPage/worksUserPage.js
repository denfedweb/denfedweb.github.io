import React, {useEffect, useState} from 'react';
import style from './worksUserPage.module.sass';
import axios from 'axios';
import Loader from "../../../components/Loader/Loader";

function WorksUserPage() {
  const [state, setState] = useState({data: []});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    axios.get('https://denfedweb-github-io.firebaseio.com/works.json').then(({data}) => {
      const worksObj = Object.keys(data)
        .map(key => ({
          ...data[key],
          id: key
        }));
      setState({data: worksObj.reverse()});
      setLoading(false);
    });
  }, []);

  return (
    <div className={style.block}>
      <h3 className="title-text">Portfolio</h3>
      {loading ? <Loader/> :
        <div className="row">
          {state.data.map(data => (
            <div className="col s12 m6 l4" key={data.url}>
              <a href={data.url} rel="noopener noreferrer" target="_blank" className={style.imgWrap}>
                <span dangerouslySetInnerHTML={{__html: data.image}}/>
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
      }
    </div>
  );
}

export default WorksUserPage;
