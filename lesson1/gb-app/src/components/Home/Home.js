import { Message } from '../../Message';
import { MessageList } from '../MessageList/MessageList';
import { Form } from '../Form/Form';
import './Home.css';
import { useCallback, useEffect, useState } from 'react';
import { AUTHORS } from '../constants';
import { ChatUi } from '../ChatUi/ChatUi';
import { Redirect, useParams } from 'react-router-dom';


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

function Home() {
  
  const someName = 'GeekBrains'

  const {chatId} = useParams();

  //const [messages, setMessages] = useState([]);

  const [chats, setChats] = useState(initialChats);

  const handleSendMessage = useCallback((newMessage) => {
   // setMessages([...messages, newMessage]);
   setChats({
       ...chats,
       [chatId]: {
           ...chats[chatId],
           messages: [...chats[chatId].messages, newMessage]
       },
   });

  }, [chats, chatId]);

  useEffect(() => {
    if (
        !chatId ||
        !chats[chatId]?.messages.length || 
            chats[chatId]?.messages[chats[chatId]?.messages.length - 1].author === AUTHORS.robot
        
    ){
      return;
    } 

    const timeOut = setTimeout(() => {

      const newMessage = {
        text: 'I am a robot',
        author: AUTHORS.robot,
        id: Date.now(),
      }
      handleSendMessage(newMessage);

    }, 1500);
    
    return () => clearTimeout(timeOut);

  }, [chats]);

  if (!chats[chatId]) {
    return (<Redirect to="/nochat" />);
    }

  return (
    <div className="Home">
      <header className="Home-header">
          <Message name={someName}/>
      </header>
      <div className="chat__area">
          <ChatUi chats={chats} chatId={chatId}/>
          {!!chatId && <div className="chat__box">
              <Form onSendMessage={handleSendMessage} />
              <div className="box__message">
                <MessageList messages={chats[chatId].messages}/>
              </div>
              
         </div>}
      </div>  
    </div>
  );
}

export default Home;
