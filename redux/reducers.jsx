import {
  SET_FIELD_MODAL_VISIBLE,
  SET_NEW_ADD_MODAL,
  SET_FEILD_HEADERS,
  SET_FEILD_HEADERS_PERSON,
  SET_HOME_PAGE,
  SET_PEOPLE,
  SET_APPLIANCE_LIST,
  SET_UPDATED_INPUTS,
  SET_VIEW_APPLIANCE_VISIBLE,
  SET_INDEX_OF_VIEWED_APPLIANCE,
  SET_APP_TAB_CHOSEN,
  SET_PEOPLE_LIST,
  SET_CALENDER,
  SET_SETTINGS,
  SET_NOTIF_TOGGLE,
  SET_SOUND_TOGGLE,
  SET_DATES_WITH_EVENTS,
} from "./actions";

const initialState = {
  newAddPageTrigger: false,
  homePageTrigger: true,
  calenderTrigger: false,
  settingsTrigger: false,
  peopleTrigger: false,
  appTabChosen: true,
  fieldModalTrigger: false,
  viewApplianceTrigger: false,
  indexOfViewedAppliance: 0,
  soundToggle: true,
  notifToggle: false,
  datesWithEvents: {},
  applianceList: [
    { "Vender:": "Samsung" },
    { "Vender:": "Echo" },
    { "Vender:": "John Lewis" },
  ],
  peopleList: [
    { "Name:": "mehdi", "D.O.B:": "01/01/01" },
    { "Name:": "drew", "D.O.B:": "02/02/02" },
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
  fieldHeadersPerson: [
    { title: "Name:", input: "" },
    { title: "D.O.B:", input: "" },
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
    case SET_PEOPLE: {
      return { ...state, peopleTrigger: action.payload };
    }
    case SET_CALENDER: {
      return { ...state, calenderTrigger: action.payload };
    }
    case SET_SETTINGS: {
      return { ...state, settingsTrigger: action.payload };
    }
    case SET_FIELD_MODAL_VISIBLE: {
      return { ...state, fieldModalTrigger: action.payload };
    }
    case SET_APP_TAB_CHOSEN: {
      return { ...state, appTabChosen: action.payload };
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
    case SET_PEOPLE_LIST: {
      return {
        ...state,
        peopleList: [...state.peopleList, action.payload],
      };
    }
    case SET_FEILD_HEADERS: {
      return {
        ...state,
        fieldHeaders: [...state.fieldHeaders, action.payload],
      };
    }
    case SET_FEILD_HEADERS_PERSON: {
      return {
        ...state,
        fieldHeaders: [...state.fieldHeadersPerson, action.payload],
      };
    }
    case SET_DATES_WITH_EVENTS: {
      return {
        ...state,
        datesWithEvents: action.payload,
      };
    }
    case SET_UPDATED_INPUTS: {
      return {
        ...state,
        updatedInputs: action.payload,
      };
    }
    case SET_SOUND_TOGGLE: {
      return {
        ...state,
        soundToggle: action.payload,
      };
    }
    case SET_NOTIF_TOGGLE: {
      return {
        ...state,
        notifToggle: action.payload,
      };
    }
    default:
      return state;
  }
}

export default myReducer;
