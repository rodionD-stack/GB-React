import { AUTHORS } from "../components/constants";
import { addChat, sendMessage } from "./chats/actions"
import { SEND_MESSAGE } from "./chats/actionTypes"

export const middleware = store => next => action => {
    if (
        action.type === SEND_MESSAGE && action.payload.message.author !== AUTHORS.robot 
        ) {
        setTimeout(() => {
            store.dispatch(sendMessage(action.payload.chatId, { text: 'generated', author: AUTHORS.robot }));
        }, 1000);
    }

    return next(action);
}