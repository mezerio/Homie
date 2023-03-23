import colorScheme from "../assets/functions/colors";
import homeImg from "../assets/img/homeImg.png";
import fridgeIcon from "../assets/img/fridgeIcon.png";
import hobIcon from "../assets/img/hobIcon.png";
import hoodIcon from "../assets/img/hoodIcon.png";
import microwaveIcon from "../assets/img/microwaveIcon.png";
import ovenIcon from "../assets/img/ovenIcon.png";
import vacuumIcon from "../assets/img/vacuumIcon.png";
import WMIcon from "../assets/img/washingMachineIcon.png";
import womenIcon from "../assets/img/womenIcon.png";
import manIcon from "../assets/img/manIcon.png";
import babyIcon from "../assets/img/babyIcon.png";

import {
  // Triggers
  SET_SEARCH_TRIGGER,
  SET_NOTIF_TRIGGER,
  SET_SOUND_TRIGGER,
  SET_VIEW_APPLIANCE_TRIGGER,
  SET_FIELD_MODAL_TRIGGER,
  SET_DATE_PICKER_TRIGGER,
  SET_TIME_PICKER_TRIGGER,
  SET_EVENT_MODAL_TRIGGER,
  SET_VIEW_EVENT_TRIGGER,
  // Other
  SET_FIELD_HEADERS,
  SET_FIELD_HEADERS_PERSON,
  SET_CURRENT_PAGE,
  SET_APPLIANCE_LIST,
  SET_UPDATED_INPUTS,
  SET_INDEX_OF_VIEWED_APPLIANCE,
  SET_APP_TAB_CHOSEN,
  SET_PEOPLE_LIST,
  SET_DATES_WITH_EVENTS,
  SET_EVENT_LIST,
  SET_DATE_SELECTED,
  SET_IMG_SOURCE,
  SET_NEW_EVENT_DATE,
  SET_NEW_EVENT_TIME,
  SET_NEW_EVENT_ITEM,
  SET_NEW_EVENT_DESC,
  SET_SEARCH_INPUT,
  SET_UPDATED_ICON,
} from "./actions";

const initialState = {
  // Triggers
  appTabChosen: true,
  soundTrigger: true,
  notifTrigger: false,
  timePickerTrigger: false,
  datePickerTrigger: false,
  eventModalTrigger: false,
  fieldModalTrigger: false,
  viewApplianceTrigger: false,
  viewEventTrigger: false,
  searchTrigger: false,
  // Other
  imgSource: "",
  searchInput: "",
  newEventItem: "",
  newEventDesc: "Appointment",
  currentPage: "Home",
  updatedIcon: homeImg,
  updatedInputs: [],
  indexOfViewedAppliance: 0,
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
      "Vender:": "Bosch",
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
      "Vender:": "John Lewis",
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
      {
        Title: "Dyson Vacuum",
        Time: "13:00",
        Desc: "Engineer Visit",
        Item: {
          Icon: vacuumIcon,
          "Vender:": "Dyson",
          "Product Name/Title:": "Vacuum",
          "Model Number:": "DY293930K",
          "Serial Number:": "SS338300",
        },
      },
      {
        Title: "Samsung Washing Machine",
        Time: "19:00",
        Desc: "Appointment for repair",
        Item: {
          Icon: WMIcon,
          "Vender:": "Samsung",
          "Product Name/Title:": "Washing Machine",
          "Model Number:": "WMC123456M",
          "Serial Number:": "123456789",
        },
      },
    ],
    "2023-03-11": [
      {
        Title: "Neff Extractor Hood",
        Time: "12:00",
        Desc: "Service appointment",
        Item: {
          Icon: hoodIcon,
          "Vender:": "Neff",
          "Product Name/Title:": "Extractor Hood",
          "Model Number:": "NEFF8838",
          "Serial Number:": "98765431",
        },
      },
      {
        Title: "Bosch Fridge",
        Time: "09:00",
        Desc: "Delivery",
        Item: {
          Icon: fridgeIcon,
          "Vender:": "Bosch",
          "Product Name/Title:": "Fridge",
          "Model Number:": "FR93937SK",
          "Serial Number:": "SR363930",
        },
      },
    ],
    "2023-03-21": [
      {
        Title: "John Lewis Hob",
        Time: "10:00",
        Desc: "Service check up",
        Item: {
          Icon: hobIcon,
          "Vender:": "Argos",
          "Product Name/Title:": "Hob",
          "Model Number:": "HH93937SK",
          "Serial Number:": "67893893",
        },
      },
    ],
  },
};

function myReducer(state = initialState, action) {
  switch (action.type) {
    // Trigger
    case SET_VIEW_EVENT_TRIGGER: {
      return { ...state, viewEventTrigger: action.payload };
    }
    case SET_SEARCH_TRIGGER: {
      return { ...state, searchTrigger: action.payload };
    }
    case SET_EVENT_MODAL_TRIGGER: {
      return { ...state, eventModalTrigger: action.payload };
    }
    case SET_FIELD_MODAL_TRIGGER: {
      return { ...state, fieldModalTrigger: action.payload };
    }
    case SET_VIEW_APPLIANCE_TRIGGER: {
      return { ...state, viewApplianceTrigger: action.payload };
    }
    case SET_TIME_PICKER_TRIGGER: {
      return { ...state, timePickerTrigger: action.payload };
    }
    case SET_DATE_PICKER_TRIGGER: {
      return { ...state, datePickerTrigger: action.payload };
    }
    case SET_SOUND_TRIGGER: {
      return { ...state, soundTrigger: action.payload };
    }
    case SET_NOTIF_TRIGGER: {
      return { ...state, notifTrigger: action.payload };
    }
    // Other
    case SET_UPDATED_ICON: {
      return { ...state, updatedIcon: action.payload };
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
    case SET_IMG_SOURCE: {
      return { ...state, imgSource: action.payload };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.payload };
    }

    case SET_SEARCH_INPUT: {
      return { ...state, searchInput: action.payload };
    }

    case SET_APP_TAB_CHOSEN: {
      return { ...state, appTabChosen: action.payload };
    }
    case SET_INDEX_OF_VIEWED_APPLIANCE: {
      return { ...state, indexOfViewedAppliance: action.payload };
    }
    case SET_DATE_SELECTED: {
      return { ...state, dateSelected: action.payload };
    }
    case SET_APPLIANCE_LIST: {
      return { ...state, applianceList: action.payload };
    }
    case SET_PEOPLE_LIST: {
      return { ...state, peopleList: action.payload };
    }
    case SET_DATES_WITH_EVENTS: {
      return { ...state, datesWithEvents: action.payload };
    }
    case SET_UPDATED_INPUTS: {
      return { ...state, updatedInputs: action.payload };
    }
    case SET_EVENT_LIST: {
      return { ...state, eventList: action.payload };
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
    default:
      return state;
  }
}

export default myReducer;
