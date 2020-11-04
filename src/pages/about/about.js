import React, {useEffect, useState, Fragment} from 'react';
import style from "./about.module.sass";
import {useSelector} from "react-redux";
import AdminSocialLinks from "./adminComponents/adminSocialLinks";
import UserSocialLinks from "./userComponents/userSocialLinks";
import ReactQuill from "react-quill";
import axios from 'axios';
import Loader from "../../components/Loader/Loader";

function About() {
  const editedState = useSelector(state => state.editState);
  const [imgValue, setImgValue] = useState('');
  const [content, setContent] = useState('');
  const [contentLoading, setContentLoading] = useState(true);
  const [imgLoading, setImgLoading] = useState(true);
  const auth = useSelector(state => state.auth);
  const {token} = auth;

  const {edited} = editedState;
  const imgModules = {
    toolbar: [
      ['image']
    ]
  }
  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'},
        {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }

  useEffect(()=> {
    axios.get('https://denfedweb-github-io.firebaseio.com/about/adminImg.json').then(({data})=> {
      setImgValue(data.img);
      setImgLoading(false);
    });
    axios.get('https://denfedweb-github-io.firebaseio.com/about/htmlContent.json').then(({data})=>{
      setContent(data.content);
      setContentLoading(false);
    });
  }, []);

  function updatePhoto() {
    axios.patch(`https://denfedweb-github-io.firebaseio.com/about/adminImg.json?auth=${token}`, {img: imgValue}).then(()=> {
      alert("Updated");
    });
  }

  function updateContent(){
    axios.patch(`https://denfedweb-github-io.firebaseio.com/about/htmlContent.json?auth=${token}`, {content}).then(()=> {
      alert("Updated");
    });
  }

    return (
        <div className={`row ${style.row}`}>
            <div className={`col l4 ${style.leftBlock}`}>
                <h3 className="title-text">About me</h3>
                {
                  imgLoading
                    ?
                      <div className={style.imgWrap} style={{backgroundColor: '#424343', height: '250px', width: '250px'}} />
                    :
                      <Fragment>
                        {
                          edited
                            ?
                            <div>
                              <ReactQuill modules={imgModules} theme="snow" value={imgValue} onChange={setImgValue}/>
                              <button className="btn waves-effect waves-light" onClick={updatePhoto}>Update photo</button>
                            </div>
                            :
                            <div className={style.imgWrap} dangerouslySetInnerHTML={{__html: imgValue}}/>
                        }
                      </Fragment>
                }
                {
                  edited
                    ?
                    <AdminSocialLinks/>
                    :
                    <UserSocialLinks/>
                }
            </div>
            <div className={`col l8 ${style.rightBlock}`}>
              {
                contentLoading
                  ?
                  <Loader/>
                  :
                  <Fragment>
                    {
                      edited
                        ?
                        <div>
                          <ReactQuill modules={modules} theme="snow" value={content} onChange={setContent}/>
                          <button className="btn waves-effect waves-light" onClick={updateContent}>Update content</button>
                        </div>
                        :
                        <div dangerouslySetInnerHTML={{__html: content}}/>
                    }
                  </Fragment>
              }
            </div>
        </div>
    );
}

export default About;
