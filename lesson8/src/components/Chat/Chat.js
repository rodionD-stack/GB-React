import React from 'react';
import { Message } from '../../Message';
import { MessageList } from '../MessageList/MessageList';
import { Form } from '../Form/Form';
import { ChatUi } from '../ChatUi/ChatUi';
import { Redirect, useParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { AUTHORS } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, sendMessageWithReply } from '../../store/chats/actions';
import './Chat.css';


export const Chat = ({ onAddMessage }) => {
    const someName = 'GeekBrains'

  
  const {chatId} = useParams();
  const  chats = useSelector(state => state.chats);
  const dispatch = useDispatch();

  const handleSendMessage = useCallback((newMessage) => {
    dispatch(sendMessageWithReply(chatId, newMessage));
  }, [chatId, onAddMessage]);
 

  //  if (!!chats[chatId]) {
  //   return (
  //   <Redirect to="/nochat" />
  //   )};

  return (
    <div className="Home">
      <header className="Home-header">
          <Message name={someName}/>
      </header>
      <div className="chat__area">
          <ChatUi chats={chats} chatId={chatId}/>
          {!!chatId && (<div className="chat__box">
              <Form onSendMessage={handleSendMessage} />
              <div className="box__message">
                <MessageList messages={chats[chatId].messages}/>
              </div>
         </div>)}
      </div>  
    </div>
  );
}

