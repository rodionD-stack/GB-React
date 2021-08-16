import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Link, Switch, Route, useParams, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import { NoChat } from '../NoChat/NoChat';
import { Profile } from '../Profile/Profile';
import { AUTHORS } from '../constants';
import { Chat } from '../Chat/Chat';
import './Router.css';


export const Router = () => {
    const [chats, setChats] = useState('');

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
            <ul className='routerNav'>
                <li className='navItem'>
                    <Link to="/home">HOME</Link>
                </li>
                <li className='navItem'>
                    <Link to="/profile">PROFILE</Link>
                </li>
                <li className='navItem'>
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
                    <NoChat/>
                </Route>
                <Route path="*">
                    <h2>404</h2>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}