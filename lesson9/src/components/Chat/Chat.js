import React, { useState } from 'react';
import { Message } from '../../Message';
import { MessageList } from '../MessageList/MessageList';
import { Form } from '../Form/Form';
import { ChatUi } from '../ChatUi/ChatUi';
import { Redirect, useParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { AUTHORS } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { connectChatsToFB } from '../../store/chats/actions';
import { connectMessagesToFB, sendMessageWithFB,
} from "../../store/messages/action";
import './Chat.css';
import firebase from 'firebase';
import { selectName } from '../../store/profile/selectors';
import { selectChats } from '../../store/chats/selectors';
import { selectMessages } from '../../store/messages/selectors';



export const Chat = () => {
  const someName = 'GeekBrains'

  
  const { chatId } = useParams();

  const dispatch = useDispatch();

  const chats = useSelector(selectChats);
  const messages = useSelector(selectMessages);
  const name = useSelector(selectName);


  useEffect(() => {
    dispatch(connectChatsToFB());
    dispatch(connectMessagesToFB());
  }, []);

  const handleSendMessage = useCallback(
    (newMessage) => {
      dispatch(sendMessageWithFB(chatId, 
        { ...newMessage, author: name }));
    },
    [chatId, name, dispatch]
    );


  return (
    <div className="Home">
      <header className="Home-header">
          <Message name={someName}/>
      </header>
      <div className="chat__area">
          <ChatUi chats={chats}/>
          {!!chatId && (
          <div className="chat__box">
              <Form onSendMessage={handleSendMessage} />
              <div className="box__message">
                <MessageList messages={messages[chatId] || []} />
              </div>
         </div>)}
      </div>  
    </div>
  );
}
