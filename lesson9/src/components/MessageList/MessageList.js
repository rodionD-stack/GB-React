import React, { useCallback } from 'react';
import { Messages } from '../Messages/Messages';

export const MessageList = ({ messages }) => {

    const renderMessage = useCallback(
      (mess) => (
      <Messages 
        text={mess.text} 
        author={mess.author} 
        key={mess.id} />
    ), []);
  
    return messages.map(renderMessage);
  };