import {EDITED, NOT_EDITED} from "./types";

const initialState = {
  edited: false
};


export const editStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOT_EDITED:
      return {...state, edited: false}
    case EDITED:
      return {...state, edited: true}
    default: return state
  }
};
