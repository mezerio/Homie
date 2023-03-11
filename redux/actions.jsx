export const SET_NEW_ADD_MODAL = "SET_NEW_ADD_MODAL";

export const setNewAddPage = (newAddPageTrigger) => (dispatch) => {
  dispatch({
    type: SET_NEW_ADD_MODAL,
    payload: newAddPageTrigger,
  });
};
