import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from "../src/redux/store";
import HookCounter from "./components/HookCounter";
import DynamicCounter from "./components/dynamicCounter";
import NewDynamicCounter from "./components/newDynamicCounter";

export default function App() {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>

        <div className="max-w-md mx-auto mt-10 space-y-5">
          <div>
            <h3 className=" text-red-400 text-xl font-semibold text-center py-5">
              Old Method of Redux using "mapStateToProps" and
              "mapDispatchToProps"
            </h3>
            <Counter />
          </div>

          <div>
            <h3 className=" text-gray-500 text-xl font-semibold text-center py-5">
              New Method of Redux using "useDispatch" and "useSelector"
            </h3>
            <HookCounter />
          </div>
          <div>
            <h3 className=" text-blue-400 text-xl font-semibold text-center my-5">
              Manage dynamic counting
            </h3>
            <DynamicCounter />
            <NewDynamicCounter />
            <NewDynamicCounter dynamic />
          </div>
        </div>
      </div>
    </Provider>
  );
}
