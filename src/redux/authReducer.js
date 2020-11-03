import {LOGGED, LOGOUT, GET_TOKEN} from "./types";

const initialState = {
    authenticated: !!localStorage.getItem('fb-token') || false,
    token: ''
};


export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED:
      return {...state, authenticated: true}
    case LOGOUT:
      return {...state, authenticated: false}
    case GET_TOKEN:
      return {...state, token: action.payload}
    default: return state
  }
};
