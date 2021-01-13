import { combineReducers } from "redux";
import { Message } from "../domain/Message";
import { MessagesAction } from "./messages/actions";
import { messagesReducer, MessagesState } from "./messages/reducer";

export type ApplicationAction = MessagesAction;
export interface ApplicationState {
  messages: MessagesState;
}

export const getMessagesState = (state: ApplicationState): MessagesState =>
  state.messages;

export const appReducer = combineReducers({ messages: messagesReducer });

// export const appReducer = (
//   state: ApplicationState = intialState,
//   action: Action
// ): ApplicationState => {
//   if (action.type === "ADD_MESSAGE") {
//     return {
//       messages: [...state.messages, action.message],
//     };
//   }
//   console.debug(action);
//   return state;
// };
