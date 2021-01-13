// import { convertCompilerOptionsFromJson } from "typescript";
// import { Message } from "./domain/Message";
export const foo = "bar";

// export class User {
//   // getName() {
//   //   return "Don";
//   // }
// }

// let user: User = new User();
// user = "";

// interface MessageListProps {
//   messages: string[];
// }

// const MessageList2 = (props: MessageListProps) => {};
// // @ts-expect-error
// MessageList2(4711);

// MessageList2({ messages: [] });

// const printStringUppercase = (foo?: string) => {
//   // foo könnte undefined sein
//   if (foo === undefined) {
//     // foo ist undefined
//     console.log("kein string");
//     return;
//   }
//   // foo ist string
//   console.log(foo.toUpperCase());
// };

// type MessageWithoutAuthor = Pick<
//   Message,
//   Exclude<keyof Message, "id" | "author">
// >;

// const foo: MessageWithoutAuthor = {
//   date: 123,
//   message: "",
// };

// type numberOrString = string | number;
// const acceptsNumberOrString = (parameter: string | number) => {
//   if (typeof parameter === "string") {
//     return parameter.toLocaleLowerCase();
//   }
//   return parameter.toFixed();
// };

// interface PropsFromRedux {
//   author: string;
// }

// interface PropsFromUser {
//   messageText: string;
// }

// const MessageCompose3: React.FunctionComponent<
//   PropsFromUser & PropsFromRedux
// > = (props) => {
//   props.messageText;
// };

// MessageCompose3({ author: "§", messageText: "sad" });

// type PartialMessaage = Partial<Message>;
// const partialMessage: PartialMessaage = {
//   author: 1_322_132_313_124_213,
// };

// type Foobaradsdsa = {
//   dfasijasdij: string;
// } & Message;

// interface AddMessageAction {
//   type: "ADD_MESSAGE";
//   message: string;
// }

// interface ClearMessagesAction {
//   type: "CLEAR_MESSAGE";
// }

// type Action = AddMessageAction | ClearMessagesAction;

// const messageReducer = (action: Action) => {
//   switch (action.type) {
//     case "ADD_MESSAGE":
//       console.log(action.message);
//       return;
//   }
//   console.log(action.type);
// };

// messageReducer({ type: "CLEAR_MESSAGEds" });

// type Color = "blue" | "red" | "black";
// type ColorToRgbMapping = {
//   [C in Color]: string;
// };

// const mapping: Partial<ColorToRgbMapping> = {
//   blue: "213",
// };
