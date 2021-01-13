import { createStore } from "redux";
import { addMessageForDon, appReducer } from "./redux/reducer";

const configureStore = () => {
  return createStore(
    appReducer,
    // @ts-expect-error yolo
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      // @ts-expect-error yolo
      window.__REDUX_DEVTOOLS_EXTENSION__({
        actionCreators: { addMessageForDon },
      })
  );
};

export default configureStore;
