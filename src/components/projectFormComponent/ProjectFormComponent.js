import React, {useEffect, useState} from 'react';
import ReactQuill from "react-quill";
import axios from "axios";
import {useSelector} from "react-redux";

function ProjectFormComponent(props) {
  const [urlForm, setUrlForm] = useState('');
  const [imgValue, setImgValue] = useState('');
  const [stackValue, setStackValue] = useState('');
  const [projectId, setProjectId] = useState('');
  const auth = useSelector(state => state.auth);
  const {token} = auth;
  const {cancelEditProject, editProjectObject, editFlag} = props;
  const modules = {
    toolbar: [
      ['image']
    ]
  }
  function onChangeUrlForm(e) {
    setUrlForm(e.target.value);
  }
  useEffect(()=> {
    if(editFlag){
      setUrlForm(editProjectObject.url);
      setImgValue(editProjectObject.image);
      setStackValue(editProjectObject.stack.join(' '));
      setProjectId(editProjectObject.id);
    }
  }, [editFlag, editProjectObject?.url])
  function changeStack(e){
    setStackValue(e.target.value);
  }

  function save(){
    const obj = {
      url: urlForm,
      image: imgValue,
      stack: stackValue.split(' ')
    }
    axios.post('https://denfedweb-github-io.firebaseio.com/works.json', obj, {
      headers: {
        auth: token
      }
    }).then(() => {
      window.location.reload();
    });
  }

  function edit() {
    const obj = {
      url: urlForm,
      image: imgValue,
      stack: stackValue.split(' ')
    }
    axios.patch(`https://denfedweb-github-io.firebaseio.com/works/${projectId}.json`, obj, {
      headers: {
        auth: token
      }
    }).then(() => {
      window.location.reload();
    });
  }

  function cancel(){
    setImgValue('');
    setStackValue('');
    setUrlForm('');
    setProjectId('');
    cancelEditProject();
  }

  return (
    <div>
      <div className="row">
        <div className="input-field col s12">
          <input onChange={onChangeUrlForm} value={urlForm} id="url" name="url" type="text"/>
          <label htmlFor="url">Project url</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <span>Project IMAGE</span>
          <ReactQuill modules={modules} theme="snow" value={imgValue} onChange={setImgValue}/>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input onChange={changeStack} id="stack" value={stackValue} name="stack" type="text"/>
          <label htmlFor="stack">Stack</label>
        </div>
      </div>
      {
        editFlag ?
          <div>
            <button className="btn waves-effect waves-light" onClick={edit}>Edit</button>
            <button className="btn waves-effect waves-light" style={{marginLeft: '15px'}} onClick={cancel}>Cancel</button>
          </div>
          :
          <button className="btn waves-effect waves-light" onClick={save}>Add new work project</button>
      }
    </div>
  );
}

export default ProjectFormComponent;
