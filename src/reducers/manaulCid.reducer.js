import {
  CHECK_FETCHING,
  CHECK_SUCCESS,
  CHECK_NOTFOUND,
  ADD_NUMBER,
  CLEAR_NUMBER,
} from "./../Constants";

const initialState = {
  result: null,
  isFetching: false,
  error: false,
  display: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHECK_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: false,
        result: payload,
        display: [],
      };
    case CHECK_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
        result: payload,
        display: [],
      };
    case CHECK_NOTFOUND:
      return {
        ...state,
        isFetching: false,
        error: true,
        result: null,
        display: [],
      };
    case ADD_NUMBER:
      return {
        ...state,
        isFetching: false,
        error: false,
        result: null,
        display: [...state.display, payload],
      };
    case CLEAR_NUMBER:
      return {
        ...state,
        isFetching: false,
        error: false,
        result: null,
        display: [],
      };
    default:
      return state;
  }
};
