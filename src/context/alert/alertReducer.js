import { SHOW_ALERT, HIDE_ALERT } from "./types";

const alertReducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...action.payload,
        isVisible: true,
      };

    case HIDE_ALERT:
      return {
        ...state,
        isVisible: false,
      };

    default:
      return state;
  };
}

export default alertReducer;
