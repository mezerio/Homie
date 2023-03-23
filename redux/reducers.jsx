import colorScheme from "../components/colors";
import homeImg from "../assets/img/homeImg.png";
import fridgeIcon from "../assets/img/fridgeIcon.png";
import hobIcon from "../assets/img/hobIcon.png";
import hoodIcon from "../assets/img/hoodIcon.png";
import laptopIcon from "../assets/img/laptopIcon.png";
import microwaveIcon from "../assets/img/microwaveIcon.png";
import ovenIcon from "../assets/img/ovenIcon.png";
import phoneIcon from "../assets/img/phoneIcon.png";
import vacuumIcon from "../assets/img/vacuumIcon.png";
import WMIcon from "../assets/img/washingMachineIcon.png";
import womenIcon from "../assets/img/womenIcon.png";
import manIcon from "../assets/img/manIcon.png";
import babyIcon from "../assets/img/babyIcon.png";

import {
  SET_FIELD_MODAL_VISIBLE,
  SET_NEW_ADD_MODAL,
  SET_FIELD_HEADERS,
  SET_FIELD_HEADERS_PERSON,
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
  SET_SEARCH_TOGGLE,
  SET_SEARCH_INPUT,
  SET_VIEW_EVENT_TRIGGER,
  SET_UPDATED_ICON,
} from "./actions";

const initialState = {
  updatedIcon: homeImg,
  viewEventTrigger: false,
  searchInput: "",
  searchToggle: false,
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
  dateSelected: String(
    new Date().getFullYear() +
      "-" +
      (new Date().getMonth() < 10 ? "0" : "") +
      Number(new Date().getMonth() + 1) +
      "-" +
      (new Date().getDate() < 10 ? "0" : "") +
      new Date().getDate()
  ),
  datesWithEvents: {
    "2023-03-03": {
      marked: true,
      selected: false,
      dots: [{ color: colorScheme.primary }, { color: colorScheme.primary }],
      selectedColor: colorScheme.secondary,
      selectedTextColor: colorScheme.primaryFont,
    },
    "2023-03-11": {
      marked: true,
      selected: false,
      dots: [{ color: colorScheme.primary }, { color: colorScheme.primary }],
      selectedColor: colorScheme.secondary,
      selectedTextColor: colorScheme.primaryFont,
    },
    "2023-03-21": {
      marked: true,
      selected: false,
      dots: [{ color: colorScheme.primary }],
      selectedColor: colorScheme.secondary,
      selectedTextColor: colorScheme.primaryFont,
    },
  },
  applianceList: [
    {
      Icon: WMIcon,
      "Vender:": "Samsung",
      "Product Name/Title:": "Washing Machine",
      "Model Number:": "WMC123456M",
      "Serial Number:": "123456789",
    },
    {
      Icon: hoodIcon,
      "Vender:": "Neff",
      "Product Name/Title:": "Extractor Hood",
      "Model Number:": "NEFF8838",
      "Serial Number:": "98765431",
    },
    {
      Icon: fridgeIcon,
      "Vender:": "John Lewis",
      "Product Name/Title:": "Fridge",
      "Model Number:": "FR93937SK",
      "Serial Number:": "SR363930",
    },
    {
      Icon: vacuumIcon,
      "Vender:": "Dyson",
      "Product Name/Title:": "Hoover",
      "Model Number:": "DY293930K",
      "Serial Number:": "SS338300",
    },
    {
      Icon: hobIcon,
      "Vender:": "Argos",
      "Product Name/Title:": "Hob",
      "Model Number:": "HH93937SK",
      "Serial Number:": "67893893",
    },
    {
      Icon: microwaveIcon,
      "Vender:": "Wren",
      "Product Name/Title:": "Microwave",
      "Model Number:": "HDJ88292929",
      "Serial Number:": "89393SJ92",
    },
    {
      Icon: ovenIcon,
      "Vender:": "Currys",
      "Product Name/Title:": "Oven",
      "Model Number:": "CE828292922",
      "Serial Number:": "LPS799S",
    },
  ],
  peopleList: [
    { "Name:": "Maaz", "D.O.B:": "13/08/98", Icon: manIcon },
    { "Name:": "Alina", "D.O.B:": "02/02/22", Icon: babyIcon },
    { "Name:": "Mehdi", "D.O.B:": "02/06/99", Icon: manIcon },
    { "Name:": "Drew", "D.O.B:": "09/07/98", Icon: manIcon },
    { "Name:": "Latif", "D.O.B:": "17/07/98", Icon: manIcon },
    { "Name:": "Aats", "D.O.B:": "06/08/98", Icon: womenIcon },
  ],
  // applianceList: [],
  updatedInputs: [],
  fieldHeaders: [
    { title: "Product Name/Title:", input: "" },
    { title: "Vender:", input: "" },
    { title: "Model Number:", input: "" },
    { title: "Serial Number:", input: "" },
    { title: "Product Type:", input: "" },
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
      { Title: "John Lewis Fridge", Time: "13:00", Desc: "Engineer Visit" },
      {
        Title: "Echo Bubble Washing Machine",
        Time: "19:00",
        Desc: "Appointment for repair",
      },
    ],
    "2023-03-11": [
      {
        Title: "Neff Extractor Hood",
        Time: "12:00",
        Desc: "Service appointment",
      },
      { Title: "Bosch Freezer", Time: "09:00", Desc: "Delivery" },
    ],
    "2023-03-21": [
      { Title: "John Lewis Hob", Time: "10:00", Desc: "Service check up" },
    ],
  },
};

function myReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEW_ADD_MODAL: {
      return { ...state, newAddPageTrigger: action.payload };
    }
    case SET_UPDATED_ICON: {
      return { ...state, updatedIcon: action.payload };
    }
    case SET_VIEW_EVENT_TRIGGER: {
      return { ...state, viewEventTrigger: action.payload };
    }
    case SET_NEW_EVENT_TIME: {
      return { ...state, newEventTime: action.payload };
    }
    case SET_NEW_EVENT_DATE: {
      return { ...state, newEventDate: action.payload };
    }
    case SET_SEARCH_TOGGLE: {
      return { ...state, searchToggle: action.payload };
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
    case SET_SEARCH_INPUT: {
      return { ...state, searchInput: action.payload };
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
        applianceList: action.payload,
      };
    }
    case SET_PEOPLE_LIST: {
      return {
        ...state,
        peopleList: action.payload,
      };
    }
    case SET_FIELD_HEADERS: {
      return {
        ...state,
        fieldHeaders: [...state.fieldHeaders, action.payload],
      };
    }
    case SET_FIELD_HEADERS_PERSON: {
      return {
        ...state,
        fieldHeadersPerson: [...state.fieldHeadersPerson, action.payload],
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
