import { createStore } from "redux";

const reducer = (state = {}) => {
  return state;
};

const configureStore = () => {
  return createStore(
    reducer,
    // @ts-expect-error yolo
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};

export default configureStore;
