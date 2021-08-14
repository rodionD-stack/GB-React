import { AUTHORS } from "../../components/constants";
import { ADD_CHAT, DELETE_CHAT, SEND_MESSAGE } from "./actionTypes";

export const addChat = (chatId, name) => ({
    type: ADD_CHAT,
    payload: {
        chatId,
        name,
    },
});

export const sendMessage = (chatId, message) => ({
    type: SEND_MESSAGE,
    payload: {
        chatId,
        message,
    },
});

export const delChat = (chatId) => ({
    type: DELETE_CHAT,
    payload: {
        chatId,
    }
});

let timeOut;

export const sendMessageWithReply = (chatId, message) => (dispatch) => {
    dispatch(sendMessage(chatId, message));

    if (timeOut) {
        clearTimeout(timeOut);
    }

   timeOut = setTimeout(() => {
        dispatch(sendMessage(chatId, {author: AUTHORS.robot, text: 'Message from thunk'}))
    }, 1500);
}