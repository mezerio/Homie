export const SET_NEW_ADD_MODAL = "SET_NEW_ADD_MODAL";
export const SET_HOME_PAGE = "SET_HOME_PAGE";
export const SET_FIELD_MODAL_VISIBLE = "SET_FIELD_MODAL_VISIBLE";
export const SET_VIEW_APPLIANCE_VISIBLE = "SET_VIEW_APPLIANCE_VISIBLE";
export const SET_FEILD_HEADERS = "SET_FEILD_HEADERS";
export const SET_APPLIANCE_LIST = "SET_APPLIANCE_LIST";
export const SET_UPDATED_INPUTS = "SET_UPDATED_INPUTS";
export const SET_INDEX_OF_VIEWED_APPLIANCE = "SET_INDEX_OF_VIEWED_APPLIANCE";

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

export const setApplianceList = (applianceList) => (dispatch) => {
  dispatch({
    type: SET_APPLIANCE_LIST,
    payload: applianceList,
  });
};

export const setUpdatedInputs = (updatedInputs) => (dispatch) => {
  dispatch({
    type: SET_UPDATED_INPUTS,
    payload: updatedInputs,
  });
};

export const setIndexOfViewedAppliance =
  (indexOfViewedAppliance) => (dispatch) => {
    dispatch({
      type: SET_INDEX_OF_VIEWED_APPLIANCE,
      payload: indexOfViewedAppliance,
    });
  };
