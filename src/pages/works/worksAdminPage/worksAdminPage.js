import React, {Fragment, useEffect, useState} from 'react';
import ProjectFormComponent from "../../../components/projectFormComponent/ProjectFormComponent";
import style from './worksAdminPanel.module.sass';
import axios from 'axios';

function WorksAdminPage() {
  const [worksList, setWorksList] = useState([]);
  const [editedProject, setEditedProject] = useState({});
  const [editedFlag, setEditedFlag] = useState(false);

  useEffect(()=> {
    axios.get('https://denfedweb-github-io.firebaseio.com/works.json').then(({data}) => {
      const worksObj = Object.keys(data)
        .map(key => ({
          ...data[key],
          id: key
        }));
      setWorksList(worksObj.reverse());
    })
  }, [])

  function removeWorkProject(id){
    axios.delete(`https://denfedweb-github-io.firebaseio.com/works/${id}.json`).then(()=>{
      const newWorksObj = worksList.filter(item => item.id !== id);
      setWorksList(newWorksObj);
    });
  }

  function edit(obj){
    setEditedProject(obj);
    setEditedFlag(true);
  }

  function cancelEditProject(){
    setEditedFlag(false);
    setEditedProject({});
  }

  return (
    <Fragment>
      <h3 className="title-text">Portfolio Admin</h3>
      <div className='row'>
        <div className='col s6'>
          <ul className="collection">
            {worksList.map((item) =>(
              <li className={`collection-item ${style.workItem}`} key={item.id}>
                <div>
                  <a href={item.url}>
                  <div dangerouslySetInnerHTML={{__html: item.image}}/>
                  {item.url}
                  </a>
                </div>
                <div style={{marginLeft: "auto"}}>
                  <button className="btn waves-effect waves-light" onClick={() => edit(item)}>Edit</button>
                  <button className="btn waves-effect waves-light" onClick={() => removeWorkProject(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='col s6'>
          <ProjectFormComponent cancelEditProject={cancelEditProject} editProjectObject={editedProject} editFlag={editedFlag} />
        </div>
      </div>
    </Fragment>
  );
}

export default WorksAdminPage;
