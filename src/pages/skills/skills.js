import React, {Fragment} from 'react';
import UserPageSkills from "./userPageSkills/userPageSkills";
import AdminPageSkills from "./adminPageSkills/adminPageSkills";
import {useSelector} from "react-redux";

function Skills() {
  const editedState = useSelector(state => state.editState);
  const {edited} = editedState;


  if(edited){
    return <AdminPageSkills/>
  } else {
    return <UserPageSkills/>
  }

}

export default Skills;
