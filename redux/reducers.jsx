import {
  SET_FIELD_MODAL_VISIBLE,
  SET_NEW_ADD_MODAL,
  SET_FEILD_HEADERS,
  SET_HOME_PAGE,
  SET_APPLIANCE_LIST,
} from "./actions";

const initialState = {
  newAddPageTrigger: false,
  homePageTrigger: true,
  fieldModalTrigger: false,
  applianceList: [],
  fieldHeaders: [
    "Product Name/Title",
    "Vender:",
    "Product Type:",
    "Model Number:",
    "Serial Number:",
    "Date Purchased:",
    "Warrenty Length:",
    "Bought By:",
    "Upload Reciept:",
  ],
};

function myReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEW_ADD_MODAL: {
      return { ...state, newAddPageTrigger: action.payload };
    }
    case SET_HOME_PAGE: {
      return { ...state, homePageTrigger: action.payload };
    }
    case SET_FIELD_MODAL_VISIBLE: {
      return { ...state, fieldModalTrigger: action.payload };
    }
    case SET_APPLIANCE_LIST: {
      return {
        ...state,
        applianceList: [...state.applianceList, action.payload],
      };
    }
    case SET_FEILD_HEADERS: {
      return {
        ...state,
        fieldHeaders: [...state.fieldHeaders, action.payload],
      };
    }
    default:
      return state;
  }
}

export default myReducer;
