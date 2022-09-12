import rootReducer from "../rootReducer";
// create middleware
const myLogger = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Action: ${JSON.stringify(store.getState())}`);
  const upComingState = [action].reduce(rootReducer, store.getState());
  console.log(JSON.stringify(upComingState));
  return next(action);
};
export default myLogger;
