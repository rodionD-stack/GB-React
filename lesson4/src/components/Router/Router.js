import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Link, Switch, Route, useParams, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import { NoChat } from '../NoChat/NoChat';
import { Profile } from '../Profile/Profile';
import { AUTHORS } from '../constants';
import { Chat } from '../Chat/Chat';

const initialChats = {
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
}

export const Router = () => {
    const [chats, setChats] = useState(initialChats);

    const handleSendMessage = useCallback((newMessage, chatId) => {
        setChats({
            ...chats,
            [chatId]: {
                ...chats[chatId],
                messages: [...chats[chatId].messages, newMessage]
            },
        });
     
       }, [chats]);

    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to="/home">HOME</Link>
                </li>
                <li>
                    <Link to="/profile">PROFILE</Link>
                </li>
                <li>
                    <Link to="/chat">CHAT</Link>
                </li>

            </ul>

            <Switch>
                <Route path="/profile" render={(data) => (
                    <Profile match={data.match}/>
                )}>
                </Route>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/chat/:chatId?">
                    <Chat chats={chats} onAddMessage={handleSendMessage}/>
                </Route>
                <Route path="/" exact>
                    <h2>WELCOME</h2>
                </Route>
                <Route path="/nochat">
                    <NoChat chats={chats}/>
                </Route>
                <Route path="*">
                    <h2>404</h2>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}