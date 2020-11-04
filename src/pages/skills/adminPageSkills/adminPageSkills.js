import React, {Fragment, useEffect, useState} from 'react';
import ReactQuill from "react-quill";
import axios from "axios";

function AdminPageSkills() {
  const [leftForm, setLeftForm] = useState({
    leftTitle: '',
    leftLibs: ''
  });
  const [rightForm, setRightForm] = useState({
    rightTitle: '',
    rightLibs: ''
  });
  const [leftImage, setLeftImage] = useState('');
  const [rightImage, setRightImage] = useState('');
  const [skills, setSkills] = useState([]);
  const [editedState, setEditedState] = useState(false);
  const [editedId, setEditedId] = useState('');
  const imgModules = {
    toolbar: [
      ['image']
    ]
  }
  useEffect(()=> {
    axios.get('https://denfedweb-github-io.firebaseio.com/skills.json').then(({data})=>{
      const skillsObj = Object.keys(data)
        .map(key => ({
          ...data[key],
          id: key
        }));
      setSkills(skillsObj);
    });
  }, [])

  function onChangeLeftForm(e) {
    setLeftForm({...leftForm,  [e.target.name]: e.target.value});
  }

  function onChangeRightForm(e) {
    setRightForm({...rightForm,  [e.target.name]: e.target.value});
  }

  function addSkills(){
    const newSkill = {
      leftSkill: {
        title: leftForm.leftTitle,
        image: leftImage,
        libs: leftForm.leftLibs.split(' ')
      },
      rightSkill: {
        title: rightForm.rightTitle,
        image: rightImage,
        libs: rightForm.rightLibs.split(' ')
      },
    };

    axios.post('https://denfedweb-github-io.firebaseio.com/skills.json', newSkill).then(()=>{
      setLeftForm({
        leftTitle: '',
        leftLibs: ''
      });
      setRightForm({
        rightTitle: '',
        rightLibs: ''
      });
      setLeftImage('');
      setRightImage('');
      alert('Added block');
    });
  }

  function removeBlock(id){
    axios.delete(`https://denfedweb-github-io.firebaseio.com/skills/${id}.json`).then(()=>{
      const newSkills = skills.filter(skill => skill.id !== id);
      setSkills(newSkills);
      alert('deleted');
    });
  }

  function editBlock(block) {
    setEditedId(block.id);
    setEditedState(true);
    setLeftForm({
      leftTitle: block.leftSkill.title,
      leftLibs: block.leftSkill.libs.join(' ')
    });
    setRightForm({
      rightTitle: block.rightSkill.title,
      rightLibs: block.rightSkill.libs.join(' ')
    });
    setLeftImage(block.leftSkill.image);
    setRightImage(block.rightSkill.image);
    window.scrollTo(0, 0)
  }

  function updateBlock() {
    const newSkill = {
      leftSkill: {
        title: leftForm.leftTitle,
        image: leftImage,
        libs: leftForm.leftLibs.split(' ')
      },
      rightSkill: {
        title: rightForm.rightTitle,
        image: rightImage,
        libs: rightForm.rightLibs.split(' ')
      },
    };
    axios.patch(`https://denfedweb-github-io.firebaseio.com/skills/${editedId}.json`, newSkill).then(()=> {
      alert('Updated');
      cancelEdit();
    })
  }

  function cancelEdit() {
    setLeftForm({
      leftTitle: '',
      leftLibs: ''
    });
    setRightForm({
      rightTitle: '',
      rightLibs: ''
    });
    setLeftImage('');
    setRightImage('');
    setEditedId('');
    setEditedState(false);
  }

  return (
    <div>
      <ul>
        <li style={{marginBottom: '20px'}}>
          <div className='row'>
            <div className='col s6'>
              <div className="row">
                <div className="input-field col s12">
                  <input onChange={onChangeLeftForm} value={leftForm.leftTitle} id="leftTitle" name="leftTitle" type="text"/>
                  <label htmlFor="leftTitle">Title</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <span>Skill IMAGE</span>
                  <ReactQuill modules={imgModules} theme="snow" value={leftImage} onChange={setLeftImage}/>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input onChange={onChangeLeftForm} value={leftForm.leftLibs} id="leftLibs" name="leftLibs" type="text"/>
                  <label htmlFor="leftLibs">Libs</label>
                </div>
              </div>
            </div>
            <div className='col s6'>
              <div className="row">
                <div className="input-field col s12">
                  <input onChange={onChangeRightForm} value={rightForm.rightTitle} id="rightTitle" name="rightTitle" type="text"/>
                  <label htmlFor="rightTitle">Title</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <span>Skill IMAGE</span>
                  <ReactQuill modules={imgModules} theme="snow" value={rightImage} onChange={setRightImage}/>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input onChange={onChangeRightForm} value={rightForm.rightLibs} id="rightLibs" name="rightLibs" type="text"/>
                  <label htmlFor="rightLibs">Libs</label>
                </div>
              </div>
            </div>
          </div>
          {
            editedState
            ?
              <Fragment>
                <button style={{marginRight: '15px'}} className="btn waves-effect waves-light" onClick={updateBlock}>Update</button>
                <button className="btn waves-effect waves-light" onClick={cancelEdit}>Cancel</button>
              </Fragment>
            :
              <button className="btn waves-effect waves-light" onClick={addSkills}>Add skills block</button>
          }
          <div className="divider" style={{marginBottom: '20px', marginTop: '20px'}}/>
        </li>
        {
          skills.map(skill => {
            return (
              <li key={skill.id}>
                <div className='row'>
                  <div className='col s6'>
                    <div className='card'>
                      <span>LeftBlock</span> <br/>
                      <span>Title: {skill.leftSkill.title}</span>
                      <div className="card-image" dangerouslySetInnerHTML={{__html: skill.leftSkill.image}}/>
                      <span>{skill.leftSkill.libs.toString()}</span>
                    </div>
                  </div>
                  <div className='col s6'>
                    <div className='card'>
                      <span>RightBlock</span><br/>
                      <span>Title: {skill.rightSkill.title}</span>
                      <div className="card-image" dangerouslySetInnerHTML={{__html: skill.rightSkill.image}}/>
                      <span>{skill.rightSkill.libs.toString()}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn waves-effect waves-light" style={{marginRight: '15px'}} onClick={() => editBlock(skill)}>Edit</button>
                  <button className="btn waves-effect waves-light" onClick={()=> removeBlock(skill.id)}>Remove</button>
                </div>
                <div className="divider" style={{marginBottom: '20px', marginTop: '20px'}}/>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default AdminPageSkills;
