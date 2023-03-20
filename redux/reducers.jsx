import {
  SET_FIELD_MODAL_VISIBLE,
  SET_NEW_ADD_MODAL,
  SET_FEILD_HEADERS,
  SET_FEILD_HEADERS_PERSON,
  SET_HOME_PAGE,
  SET_PEOPLE,
  SET_CURRENT_PAGE,
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
  SET_EVENT_LIST,
  SET_DATE_SELECTED,
  SET_IMG_SOURCE,
  SET_DATE_PICKER_TOGGLE,
  SET_TIME_PICKER_TOGGLE,
  SET_EVENT_MODAL_TRIGGER,
  SET_NEW_EVENT_DATE,
  SET_NEW_EVENT_TIME,
  SET_NEW_EVENT_ITEM,
  SET_NEW_EVENT_DESC,
} from "./actions";

const initialState = {
  currentPage: "Home",
  newEventItem: "",
  newEventDesc: "bleb",
  newEventDate: String(
    new Date().getFullYear() +
      "-" +
      (new Date().getMonth() < 10 ? "0" : "") +
      Number(new Date().getMonth() + 1) +
      "-" +
      (new Date().getDate() < 10 ? "0" : "") +
      new Date().getDate()
  ),
  newEventTime: String(
    new Date().getHours() +
      ":" +
      (new Date().getMinutes() < 10 ? "0" : "") +
      new Date().getMinutes()
  ),
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
  timePickerToggle: false,
  datePickerToggle: false,
  eventModalTrigger: false,
  imgSource: "",
  dateSelected: "2023-03-03",
  datesWithEvents: {
    "2023-03-03": {
      marked: true,
      selected: false,
      dotColor: "orange",
      selectedColor: "orange",
      selectedTextColor: "black",
    },
    "2023-03-11": {
      marked: true,
      selected: false,
      dotColor: "orange",
      selectedColor: "orange",
      selectedTextColor: "black",
    },
    "2023-03-21": {
      marked: true,
      selected: false,
      dotColor: "orange",
      selectedColor: "orange",
      selectedTextColor: "black",
    },
  },
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
  eventList: {
    "2023-03-03": [
      { Title: "Samsung Fridge", Time: "00:00", Desc: "blah blah blah" },
      {
        Title: "Echo Bubble Washing Machine",
        Time: "01:00",
        Desc: "blah blah ",
      },
    ],
    "2023-03-11": [
      { Title: "Neff Extractor Hood", Time: "02:00", Desc: "blah  blah" },
      { Title: "Bosch Freezer", Time: "20:00", Desc: "blah blah blah" },
    ],
    "2023-03-21": [{ Title: "John Lewis Hob", Time: "10:00", Desc: "blah" }],
  },
};

function myReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEW_ADD_MODAL: {
      return { ...state, newAddPageTrigger: action.payload };
    }
    case SET_NEW_EVENT_TIME: {
      return { ...state, newEventTime: action.payload };
    }
    case SET_NEW_EVENT_DATE: {
      return { ...state, newEventDate: action.payload };
    }
    case SET_NEW_EVENT_ITEM: {
      return { ...state, newEventItem: action.payload };
    }
    case SET_NEW_EVENT_DESC: {
      return { ...state, newEventDesc: action.payload };
    }
    case SET_EVENT_MODAL_TRIGGER: {
      return { ...state, eventModalTrigger: action.payload };
    }
    case SET_IMG_SOURCE: {
      return { ...state, imgSource: action.payload };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.payload };
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
    case SET_DATE_SELECTED: {
      return { ...state, dateSelected: action.payload };
    }
    case SET_TIME_PICKER_TOGGLE: {
      return { ...state, timePickerToggle: action.payload };
    }
    case SET_DATE_PICKER_TOGGLE: {
      return { ...state, datePickerToggle: action.payload };
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
    case SET_EVENT_LIST: {
      return {
        ...state,
        eventList: action.payload,
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
