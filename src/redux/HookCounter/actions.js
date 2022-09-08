import { HDECREMENT, HINCREMENT } from "./actionTypes";


export const increment = () => {
  return {
    type: HINCREMENT,
    
  };
};

export const decrement = () => {
  return {
    type: HDECREMENT,
    
  };
};
