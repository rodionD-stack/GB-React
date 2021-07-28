import { Message } from './Message';
import { MessageList } from './components/MessageList/MessageList';
import { Form } from './components/Form/Form'
import './App.css';
import { useCallback, useEffect, useState } from 'react';
import { AUTHORS } from './components/constants';



function App() {

  const someName = 'GeekBrains'

  const [messages, setMessages] = useState([]);

  const handleSendMessage = useCallback((newMessage) => {
    setMessages([...messages, newMessage]);

  }, [messages]);

  useEffect(() => {
    if (!messages.length || messages[messages.length - 1].author === AUTHORS.robot) {
      return;
    }

    const timeOut = setTimeout(() => {

      const newMessage = {
        text: 'I am a robot',
        author: AUTHORS.robot,
        id: Date.now(),
      }
      setMessages([...messages, newMessage]);

    }, 1500);
    
    return () => clearTimeout(timeOut);

  }, [messages]);


  return (
    <div className="App">
      <header className="App-header">
          <Message name={someName}/>

          <Form onSendMessage={handleSendMessage} />
      <MessageList messages={messages}/>
      </header>
      
      
      
      
      
      
          
      
    </div>
  );
}

export default App;
