const initialState = {
  loading: false,
  list: [],
  detail: [],
  showDetail: false
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MENU_SUCCESS":
      return {
        ...state,
        list: action.list,
        loading: false
      };
    case "FETCH_MENU_START":
      return {
        ...state,
        loading: true
      };
    case "FETCH_MENU_FAIL":
      return {
        ...state,
        loading: false
      };
    case "FETCH_DETAIL_START":
      return {
        ...state,
        loading: true
      };
    case "FETCH_DETAIL_SUCCESS":
      return {
        ...state,
        loading: false,
        detail: action.detail,
        showDetail: true
      };
    case "FETCH_DETAIL_FAIL":
      return {
        ...state,
        loading: false,
        detail: [],
        showDetail: false
      };
    default:
      return state;
  }
};

export default reducers;
