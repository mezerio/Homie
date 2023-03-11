import { SET_NEW_ADD_MODAL } from "./actions";

const initialState = {
  newAddPageTrigger: false,
};

function myReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEW_ADD_MODAL: {
      return { ...state, newAddPageTrigger: action.payload };
    }
    default:
      return state;
  }
}

export default myReducer;
