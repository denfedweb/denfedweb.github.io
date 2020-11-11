import React, {useState} from 'react';
import style from "../contact/contact.module.sass";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux";
import {getAuthToken, logged} from "../../redux/actions";

function Admin() {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  function onChangeForm(e) {
    setForm({...form, returnSecureToken: true,  [e.target.name]: e.target.value});
  }

  function sendForm() {
    setLoading(true);
    const adminFrom = {
      ...form,
      returnSecureToken: true
    }
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAUkPoluxh14m21DEHDSCVxDmgMf5Dahcc', adminFrom).then(({data}) => {
      setLoading(false);
      const expData = new Date(new Date().getTime() + +data.expiresIn * 1000);
      localStorage.setItem('fb-token-exp', expData.toString());
      localStorage.setItem('fb-token', data.idToken);
      dispatch(logged());
      dispatch(getAuthToken());
      history.push('/');
    }).catch(err => {
      console.error(err);
      setLoading(false);
    });
  }

  function handleKeyPress(event) {
    if(event.key === 'Enter'){
      sendForm();
    }
  }

  return (
    <div>
      <h3 className="title-text">Admin</h3>
      <div className={style.form}>
        <div className="row">
          <div className="input-field col s12">
            <input onChange={onChangeForm} id="email" name="email" type="email" onKeyPress={handleKeyPress}/>
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input onChange={onChangeForm} id="password" name="password" type="password" onKeyPress={handleKeyPress}/>
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <button disabled={loading} onClick={sendForm} className="btn waves-effect waves-light" name="action">
          Login <i className="fas fa-paper-plane"/>
        </button>
      </div>
    </div>
  );
}

export default Admin;
