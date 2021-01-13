import { Message } from "../../domain/Message";
interface AddMessageAction {
  type: "ADD_MESSAGE";
  message: Message;
}

interface InitAction {
  type: "@@INIT";
}

export type MessagesAction = AddMessageAction | InitAction;

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
