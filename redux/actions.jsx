// Trigger States
export const SET_EVENT_MODAL_TRIGGER = "SET_EVENT_MODAL_TRIGGER";
export const SET_VIEW_EVENT_TRIGGER = "SET_VIEW_EVENT_TRIGGER";
export const SET_FIELD_MODAL_TRIGGER = "SET_FIELD_MODAL_TRIGGER";
export const SET_VIEW_APPLIANCE_TRIGGER = "SET_VIEW_APPLIANCE_TRIGGER";
export const SET_SOUND_TRIGGER = "SET_SOUND_TRIGGER";
export const SET_NOTIF_TRIGGER = "SET_NOTIF_TRIGGER";
export const SET_DATE_PICKER_TRIGGER = "SET_DATE_PICKER_TRIGGER";
export const SET_TIME_PICKER_TRIGGER = "SET_TIME_PICKER_TRIGGER";
export const SET_SEARCH_TRIGGER = "SET_SEARCH_TRIGGER";
// Other States
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_APPLIANCE_LIST = "SET_APPLIANCE_LIST";
export const SET_PEOPLE_LIST = "SET_PEOPLE_LIST";
export const SET_EVENT_LIST = "SET_EVENT_LIST";
export const SET_INDEX_OF_VIEWED_APPLIANCE = "SET_INDEX_OF_VIEWED_APPLIANCE";
export const SET_FIELD_HEADERS = "SET_FIELD_HEADERS";
export const SET_FIELD_HEADERS_PERSON = "SET_FIELD_HEADERS_PERSON";
export const SET_UPDATED_INPUTS = "SET_UPDATED_INPUTS";
export const SET_SEARCH_INPUT = "SET_SEARCH_INPUT";
export const SET_APP_TAB_CHOSEN = "SET_APP_TAB_CHOSEN";
export const SET_DATES_WITH_EVENTS = "SET_DATES_WITH_EVENTS";
export const SET_DATE_SELECTED = "SET_DATE_SELECTED";
export const SET_IMG_SOURCE = "SET_IMG_SOURCE";
export const SET_UPDATED_ICON = "SET_UPDATED_ICON";
export const SET_NEW_EVENT_DATE = "SET_NEW_EVENT_DATE";
export const SET_NEW_EVENT_TIME = "SET_NEW_EVENT_TIME";
export const SET_NEW_EVENT_ITEM = "SET_NEW_EVENT_ITEM";
export const SET_NEW_EVENT_DESC = "SET_NEW_EVENT_DESC";

export const setViewEventTrigger = (viewEventTrigger) => (dispatch) => {
  dispatch({
    type: SET_VIEW_EVENT_TRIGGER,
    payload: viewEventTrigger,
  });
};
export const setSearchTrigger = (searchTrigger) => (dispatch) => {
  dispatch({
    type: SET_SEARCH_TRIGGER,
    payload: searchTrigger,
  });
};
export const setEventModalTrigger = (eventModalTrigger) => (dispatch) => {
  dispatch({
    type: SET_EVENT_MODAL_TRIGGER,
    payload: eventModalTrigger,
  });
};
export const setFieldModalTrigger = (fieldModalTrigger) => (dispatch) => {
  dispatch({
    type: SET_FIELD_MODAL_TRIGGER,
    payload: fieldModalTrigger,
  });
};

export const setViewApplianceTrigger = (viewApplianceTrigger) => (dispatch) => {
  dispatch({
    type: SET_VIEW_APPLIANCE_TRIGGER,
    payload: viewApplianceTrigger,
  });
};
export const setSoundTrigger = (soundTrigger) => (dispatch) => {
  dispatch({
    type: SET_SOUND_TRIGGER,
    payload: soundTrigger,
  });
};
export const setNotifTrigger = (notifTrigger) => (dispatch) => {
  dispatch({
    type: SET_NOTIF_TRIGGER,
    payload: notifTrigger,
  });
};

export const setTimePickerTrigger = (timePickerTrigger) => (dispatch) => {
  dispatch({
    type: SET_TIME_PICKER_TRIGGER,
    payload: timePickerTrigger,
  });
};
export const setDatePickerTrigger = (datePickerTrigger) => (dispatch) => {
  dispatch({
    type: SET_DATE_PICKER_TRIGGER,
    payload: datePickerTrigger,
  });
};
export const setCurrentPage = (currentPage) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_PAGE,
    payload: currentPage,
  });
};
export const setUpdatedIcon = (updatedIcon) => (dispatch) => {
  dispatch({
    type: SET_UPDATED_ICON,
    payload: updatedIcon,
  });
};
export const setSearchInput = (searchInput) => (dispatch) => {
  dispatch({
    type: SET_SEARCH_INPUT,
    payload: searchInput,
  });
};

export const setNewEventDate = (eventDate) => (dispatch) => {
  dispatch({
    type: SET_NEW_EVENT_DATE,
    payload: eventDate,
  });
};
export const setNewEventTime = (newEventTime) => (dispatch) => {
  dispatch({
    type: SET_NEW_EVENT_TIME,
    payload: newEventTime,
  });
};
export const setNewEventItem = (newEventItem) => (dispatch) => {
  dispatch({
    type: SET_NEW_EVENT_ITEM,
    payload: newEventItem,
  });
};
export const setNewEventDesc = (newEventDesc) => (dispatch) => {
  dispatch({
    type: SET_NEW_EVENT_DESC,
    payload: newEventDesc,
  });
};

export const setImgSource = (imgSource) => (dispatch) => {
  dispatch({
    type: SET_IMG_SOURCE,
    payload: imgSource,
  });
};

export const setDateSelected = (dateSelected) => (dispatch) => {
  dispatch({
    type: SET_DATE_SELECTED,
    payload: dateSelected,
  });
};

export const setFieldHeaders = (fieldHeaders) => (dispatch) => {
  dispatch({
    type: SET_FIELD_HEADERS,
    payload: fieldHeaders,
  });
};

export const setDatesWithEvents = (datesWithEvents) => (dispatch) => {
  dispatch({
    type: SET_DATES_WITH_EVENTS,
    payload: datesWithEvents,
  });
};

export const setFieldHeadersPerson = (fieldHeadersPerson) => (dispatch) => {
  dispatch({
    type: SET_FIELD_HEADERS_PERSON,
    payload: fieldHeadersPerson,
  });
};

export const setApplianceList = (applianceList) => (dispatch) => {
  dispatch({
    type: SET_APPLIANCE_LIST,
    payload: applianceList,
  });
};
export const setPeopleList = (peopleList) => (dispatch) => {
  dispatch({
    type: SET_PEOPLE_LIST,
    payload: peopleList,
  });
};

export const setEventList = (eventList) => (dispatch) => {
  dispatch({
    type: SET_EVENT_LIST,
    payload: eventList,
  });
};

export const setUpdatedInputs = (updatedInputs) => (dispatch) => {
  dispatch({
    type: SET_UPDATED_INPUTS,
    payload: updatedInputs,
  });
};
export const setAppTabChosen = (appTabChosen) => (dispatch) => {
  dispatch({
    type: SET_APP_TAB_CHOSEN,
    payload: appTabChosen,
  });
};

export const setIndexOfViewedAppliance =
  (indexOfViewedAppliance) => (dispatch) => {
    dispatch({
      type: SET_INDEX_OF_VIEWED_APPLIANCE,
      payload: indexOfViewedAppliance,
    });
  };
