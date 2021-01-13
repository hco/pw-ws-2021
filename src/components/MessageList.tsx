import {Message} from "../domain/Message";
import {MessageView} from "./MessageView";


const MessageList: React.FunctionComponent = () => {
    const messages: Message[] = [{
        id: "das",
        date: 4711,
        message: "Hallo Welt",
        author: "Don Fabian"
    }, {
        id: "das",
        date: 4712,
        message: "Hallo Welt",
        author: "Don Fabian"
    },
        {
            id: "das",
            date: 4713,
            message: "Hallo Welt",
            author: "Don Fabian"
        }
    ]

    return (
        <div>
            {messages.map(message => <MessageView message={message}/>)}
        </div>
    )
}

// const foobar = ({id}: Message): object => ({_id: id})
export default MessageList

