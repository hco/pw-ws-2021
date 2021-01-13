import { Message } from "../../domain/Message";
import {
  ApplicationAction,
  ApplicationState,
  getMessagesState,
} from "../reducer";

export interface MessagesState {
  messages: Message[];
}
const intialState: MessagesState = {
  messages: [],
};

// Reducer
export const messagesReducer = (
  state: MessagesState = intialState,
  action: ApplicationAction
): MessagesState => {
  if (action.type === "ADD_MESSAGE") {
    return {
      messages: [...state.messages, action.message],
    };
  }

  return state;
};

// Selectors

export const getMessages = (state: ApplicationState): Message[] =>
  getMessagesState(state).messages;
