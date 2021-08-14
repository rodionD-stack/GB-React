import { AUTHORS } from "../../components/constants";
import { ADD_CHAT, DELETE_CHAT, SEND_MESSAGE } from './actionTypes';

const initialState = {
    chat1: {
        messages: [{text: '', author: AUTHORS.human, id: 'chat1-1'}],
        name: 'Rodion Chat',
        id: 'chat1',
},
    chat2: {
        messages: [{text: '', author: AUTHORS.human, id: 'chat2-1'}],
        name: 'Mark Chat',
        id: 'chat2',
},
    chat3: {name: 'Victory Chat', id: 'chat3', messages: []},
};

export const chatsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_CHAT: {
            return {
                ...state,
                [payload.chatId]: {
                    name: payload.name,
                    id: payload.chatId,
                    messages: [],
                },
            };
        }
        case SEND_MESSAGE: {
            return {
                ...state,
                [payload.chatId]: {
                    ...state[payload.chatId],
                    messages: [...state[payload.chatId].messages, payload.message],
                },
            };
        }
        case DELETE_CHAT: {
            delete state[payload.chatId]
            return {
                ...state,
            };
        }
        default:
            return state;
    }
};