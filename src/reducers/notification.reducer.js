import { NOTIFICATION, CLOSENOTIFICATION } from "./../Constants";

const initialState = {
  isOpen: false,
  msg: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NOTIFICATION:
      return { ...state, isOpen: true, msg: payload };
    case CLOSENOTIFICATION:
      return { ...state, isOpen: false, msg: null };
    default:
      return state;
  }
};
