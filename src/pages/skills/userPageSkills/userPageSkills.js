import React, {Fragment, useEffect, useState} from 'react';
import style from "./userPageSkills.module.sass";
import axios from 'axios';
import Loader from "../../../components/Loader/Loader";


function UserPageSkills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    axios.get('https://denfedweb-github-io.firebaseio.com/skills.json').then(({data})=>{
      const skillsObj = Object.keys(data)
        .map(key => ({
          ...data[key],
          id: key
        }));
      setSkills(skillsObj);
      setLoading(false);
    });
  }, [])


  return (
    <Fragment>
      <div className={style.header}>
        <img src="/assets/img/skills.png" alt="img" />
      </div>
      {
        loading
          ?
            <Loader/>
          :
            <div className={style.cardBlock}>
              {
                skills.map(skill => (
                  <div className="row skill-block" key={skill.id}>
                    <div className="col l5 m12 s12 card horizontal transparent">
                      <span className="lang">{skill.leftSkill.title}</span>
                      <div className="card-image" dangerouslySetInnerHTML={{__html: skill.leftSkill.image}}/>
                      <div className="card-stacked">
                        <div className={`card-content ${style.cardContent}`}>
                          <ul>
                            {skill.leftSkill.libs.map(lib => (<li key={lib}>{lib}</li>))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col l2 m12 spin"><i className="fas fa-atom fa-spin"/></div>
                    <div className="col l5 m12 s12 card horizontal transparent">
                      <span className="lang">{skill.rightSkill.title}</span>
                      <div className="card-image" dangerouslySetInnerHTML={{__html: skill.rightSkill.image}}/>
                      <div className="card-stacked">
                        <div className={`card-content ${style.cardContent}`}>
                          <ul>
                            {skill.rightSkill.libs.map(lib => (<li key={lib}>{lib}</li>))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
          </div>
      }
    </Fragment>
  );
}

export default UserPageSkills;
