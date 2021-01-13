import { createStore } from "redux";
import { appReducer } from "./redux/reducer";
import { addMessageForDon } from "./redux/messages/actions";

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
