import {EDITED, GET_TOKEN, LOGGED, LOGOUT, NOT_EDITED} from "./types";

export function getAuthToken() {
  const expDate = new Date(localStorage.getItem('fb-token-exp'));
  if (new Date() > expDate) {
    localStorage.clear();
    return {type: LOGOUT}
  } else {
    return {type: GET_TOKEN, payload: localStorage.getItem('fb-token')}
  }
}

export function logged(){
  return {
    type: LOGGED
  }
}

export function changeEditedStatus(flag){
  if(flag){
    return {
      type: EDITED
    }
  } else {
    return {
      type: NOT_EDITED
    }
  }
}
