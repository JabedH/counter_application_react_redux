import { HDECREMENT, HINCREMENT } from "./actionTypes";

const initialState = {
  value: 0,
};

const hookCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case HINCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };

    case HDECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }
};

export default hookCounterReducer;
