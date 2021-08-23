import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profile/reducer";
import { chatsReducer } from './chats/reducer';
import { middleware } from "./middlewares";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { articlesReducer } from './articles/reducer';
import { messagesReducer } from "./messages/reducer";


const persistConfig = {
    key: 'GB-messager',
    storage,
}

const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
    articles: articlesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);