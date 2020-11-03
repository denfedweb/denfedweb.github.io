import React from 'react';
import {useSelector} from "react-redux";
import WorksUserPage from "./worksUserPage/worksUserPage";
import WorksAdminPage from "./worksAdminPage/worksAdminPage";

function Works() {
  const editedState = useSelector(state => state.editState);
  const {edited} = editedState;
  if(edited){
    return <WorksAdminPage/>
  } else {
    return <WorksUserPage/>
  }
}

export default Works;
