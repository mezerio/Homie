import {
  SET_FIELD_MODAL_VISIBLE,
  SET_NEW_ADD_MODAL,
  SET_FEILD_HEADERS,
  SET_HOME_PAGE,
  SET_APPLIANCE_LIST,
  SET_UPDATED_INPUTS,
  SET_VIEW_APPLIANCE_VISIBLE,
  SET_INDEX_OF_VIEWED_APPLIANCE,
} from "./actions";

const initialState = {
  newAddPageTrigger: false,
  homePageTrigger: true,
  fieldModalTrigger: false,
  viewApplianceTrigger: false,
  indexOfViewedAppliance: 0,
  applianceList: [
    { "Vender:": "Samsung" },
    { "Vender:": "Echo" },
    { "Vender:": "John Lewis" },
  ],
  // applianceList: [],
  updatedInputs: [],
  fieldHeaders: [
    { title: "Product Name/Title:", input: "" },
    { title: "Vender:", input: "" },
    { title: "Product Type:", input: "" },
    { title: "Model Number:", input: "" },
    { title: "Serial Number:", input: "" },
    { title: "Date Purchased:", input: "" },
    { title: "Warrenty Length:", input: "" },
    { title: "Bought By:", input: "" },
    { title: "Upload Reciept:", input: "" },
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
    case SET_INDEX_OF_VIEWED_APPLIANCE: {
      return { ...state, indexOfViewedAppliance: action.payload };
    }
    case SET_VIEW_APPLIANCE_VISIBLE: {
      return { ...state, viewApplianceTrigger: action.payload };
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
    case SET_UPDATED_INPUTS: {
      return {
        ...state,
        updatedInputs: action.payload,
      };
    }
    default:
      return state;
  }
}

export default myReducer;
