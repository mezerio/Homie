export const SET_NEW_ADD_MODAL = "SET_NEW_ADD_MODAL";
export const SET_HOME_PAGE = "SET_HOME_PAGE";
export const SET_FIELD_MODAL_VISIBLE = "SET_FIELD_MODAL_VISIBLE";
export const SET_FEILD_HEADERS = "SET_FEILD_HEADERS";
export const SET_APPLIANCE_LIST = "SET_APPLIANCE_LIST";

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
