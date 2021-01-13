import { Message } from "../domain/Message";

export const addMessageForDon = (message: string): AddMessageAction => {
  return {
    type: "ADD_MESSAGE",
    message: {
      author: "Der Don",
      message,
      date: Date.now(),
      id: `${Date.now()}-derdon-${Math.random()}`,
    },
  };
};

export const addMessage = (message: Message): AddMessageAction => {
  return {
    type: "ADD_MESSAGE",
    message,
  };
};

export interface ApplicationState {
  messages: Message[];
}
const intialState: ApplicationState = {
  messages: [],
};

interface AddMessageAction {
  type: "ADD_MESSAGE";
  message: Message;
}

interface InitAction {
  type: "@@INIT";
}

type Action = AddMessageAction | InitAction;

export const appReducer = (
  state: ApplicationState = intialState,
  action: Action
): ApplicationState => {
  if (action.type === "ADD_MESSAGE") {
    return {
      messages: [...state.messages, action.message],
    };
  }
  console.debug(action);
  return state;
};
