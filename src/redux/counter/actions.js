import { DECREMENT, INCREMENT } from "../counter/actionTypes";

export const increment = () => {
  return {
    type: INCREMENT,
    
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
    
  };
};
