import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";
import hookCounterReducer from "./HookCounter/counterReducer";

// create middleware

const rootReducer = combineReducers({
  counter: counterReducer,
  hookCounter: hookCounterReducer,
  dynamicCounter: dynamicCounterReducer,
});
export default rootReducer;
