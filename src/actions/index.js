import axios from "axios";

const getMenuSuccess = response => {
  return {
    type: "FETCH_MENU_SUCCESS",
    list: response.data
  };
};

const getMenuStart = () => {
  return {
    type: "FETCH_MENU_START"
  };
};

const getMenuFail = err => {
  return {
    type: "FETCH_MENU_FAIL",
    err
  };
};

const getDetailStart = () => {
  return {
    type: "FETCH_DETAIL_START"
  };
};

const getDetailSuccess = response => {
  return {
    type: "FETCH_DETAIL_SUCCESS",
    detail: response.data
  };
};

const getDetailFail = err => {
  return {
    type: "FETCH_DETAIL_FAIL",
    err
  };
};

export const loadMenu = () => {
  return dispatch => {
    dispatch(getMenuStart());
    axios
      .get("https://stream-restaurant-menu-svc.herokuapp.com/category")
      .then(res => {
        dispatch(getMenuSuccess(res));
      })
      .catch(err => {
        dispatch(getMenuFail(err));
      });
  };
};

export const loadDetail = shortName => {
  return (dispatch, getState) => {
    dispatch(getDetailStart());
    axios
      .get(
        `https://stream-restaurant-menu-svc.herokuapp.com/item?category=${shortName}`
      )
      .then(res => {
        dispatch(getDetailSuccess(res));
      })
      .catch(err => {
        dispatch(getDetailFail(err));
      });
  };
};
