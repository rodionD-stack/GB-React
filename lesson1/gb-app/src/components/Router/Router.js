import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Link, Switch, Route, useParams, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import { NoChat } from '../NoChat/NoChat';
import { Profile } from '../Profile/Profile';
import { Chat } from '../Chat/Chat';
import './Router.css';
import { News } from '../News/News';
import { Login } from '../Login/Login';
import { PublicRoute } from '../../hocs/PublicRoute';
import { PrivateRoute } from '../../hocs/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { connectProfileToFB } from '../../store/profile/actions';
import { Logout } from '../Logout/Logout';



export const Router = () => {
    // const [chats, setChats] = useState('');

    // const handleSendMessage = useCallback((newMessage, chatId) => {
    //     setChats({
    //         ...chats,
    //         [chatId]: {
    //             ...chats[chatId],
    //             messages: [...chats[chatId].messages, newMessage]
    //         },
    //     });
     
    //    }, [chats]);

    const dispatch = useDispatch();

    useEffect(() => {
           dispatch(connectProfileToFB());
       }, [])

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
                <li className='navItem'>
                    <Link to="/news">NEWS</Link>
                </li>
            </ul>

            <Logout/>

            <Switch>
                <PrivateRoute path="/profile" render={(data) => (
                    <Profile match={data.match}/>
                )}>
                </PrivateRoute>
                <PrivateRoute path="/home/">
                    <Home/>
                </PrivateRoute>
                <PublicRoute path="/login">
                    <Login/>
                </PublicRoute>
                <PublicRoute path="/signup">
                    <Login isSignUp/>
                </PublicRoute>
                <Route path="/news">
                    <News/>
                </Route>
                <PublicRoute path="/chat/:chatId?">
                    <Chat/>
                </PublicRoute>
                <PublicRoute path="/" exact>
                    <h2>WELCOME</h2>
                </PublicRoute>
                <PrivateRoute path="/nochat">
                    <NoChat/>
                </PrivateRoute>
                <PublicRoute path="*">
                    <h2>404</h2>
                </PublicRoute>
            </Switch>
        </BrowserRouter>
    )
}