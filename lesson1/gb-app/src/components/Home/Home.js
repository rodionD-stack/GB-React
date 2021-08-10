import { Message } from '../../Message';
import { MessageList } from '../MessageList/MessageList';
import { Form } from '../Form/Form';
import './Home.css';
import { ChatUi } from '../ChatUi/ChatUi';
import { Redirect, useParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { AUTHORS } from '../constants';


function Home() {
  return (
    <div className='home'>
      
      <h2 className="home__heading">Home</h2>
    
  </div>
  )
  

 }

export default Home;
