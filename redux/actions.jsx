export const SET_NEW_ADD_MODAL = "SET_NEW_ADD_MODAL";
export const SET_HOME_PAGE = "SET_HOME_PAGE";
export const SET_PEOPLE = "SET_PEOPLE";
export const SET_CALENDER = "SET_CALENDER";
export const SET_SETTINGS = "SET_SETTINGS";
export const SET_FIELD_MODAL_VISIBLE = "SET_FIELD_MODAL_VISIBLE";
export const SET_VIEW_APPLIANCE_VISIBLE = "SET_VIEW_APPLIANCE_VISIBLE";
export const SET_FEILD_HEADERS = "SET_FEILD_HEADERS";
export const SET_FEILD_HEADERS_PERSON = "SET_FEILD_HEADERS_PERSON";
export const SET_APPLIANCE_LIST = "SET_APPLIANCE_LIST";
export const SET_PEOPLE_LIST = "SET_PEOPLE_LIST";
export const SET_UPDATED_INPUTS = "SET_UPDATED_INPUTS";
export const SET_INDEX_OF_VIEWED_APPLIANCE = "SET_INDEX_OF_VIEWED_APPLIANCE";
export const SET_APP_TAB_CHOSEN = "SET_APP_TAB_CHOSEN";
export const SET_SOUND_TOGGLE = "SET_SOUND_TOGGLE";
export const SET_NOTIF_TOGGLE = "SET_NOTIF_TOGGLE";

export const setNewAddPage = (newAddPageTrigger) => (dispatch) => {
  dispatch({
    type: SET_NEW_ADD_MODAL,
    payload: newAddPageTrigger,
  });
};
export const setHomePage = (homePageTrigger) => (dispatch) => {
  dispatch({
    type: SET_HOME_PAGE,
    payload: homePageTrigger,
  });
};

export const setPeople = (peopleTrigger) => (dispatch) => {
  dispatch({
    type: SET_PEOPLE,
    payload: peopleTrigger,
  });
};

export const setCalender = (calenderTrigger) => (dispatch) => {
  dispatch({
    type: SET_CALENDER,
    payload: calenderTrigger,
  });
};

export const setSettings = (settingsTrigger) => (dispatch) => {
  dispatch({
    type: SET_SETTINGS,
    payload: settingsTrigger,
  });
};

export const setFieldModalVisible = (fieldModalTrigger) => (dispatch) => {
  dispatch({
    type: SET_FIELD_MODAL_VISIBLE,
    payload: fieldModalTrigger,
  });
};

export const setViewApplianceVisible = (viewApplianceTrigger) => (dispatch) => {
  dispatch({
    type: SET_VIEW_APPLIANCE_VISIBLE,
    payload: viewApplianceTrigger,
  });
};

export const setFieldHeaders = (fieldHeaders) => (dispatch) => {
  dispatch({
    type: SET_FEILD_HEADERS,
    payload: fieldHeaders,
  });
};

export const setFieldHeadersPerson = (fieldHeadersPerson) => (dispatch) => {
  dispatch({
    type: SET_FEILD_HEADERS,
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

export const setSoundToggle = (soundToggle) => (dispatch) => {
  dispatch({
    type: SET_SOUND_TOGGLE,
    payload: soundToggle,
  });
};
export const setNotifToggle = (notifToggle) => (dispatch) => {
  dispatch({
    type: SET_NOTIF_TOGGLE,
    payload: notifToggle,
  });
};
