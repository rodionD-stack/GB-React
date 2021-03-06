import { Message } from '../../Message';
import { MessageList } from '../MessageList/MessageList';
import { Form } from '../Form/Form';
import './Home.css';
import { ChatUi } from '../ChatUi/ChatUi';
import { Link, Redirect, useParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { AUTHORS } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectChats } from '../../store/chats/selectors';
import { selectMessages } from '../../store/messages/selectors';
import { selectName } from '../../store/profile/selectors';
import { connectChatsToFB } from '../../store/chats/actions';
import { connectMessagesToFB, sendMessageWithFB } from '../../store/messages/action';


function Home() {
  return (
    <div className='home'>
      
      <h2 className="home__heading">Home</h2>
      <div>
        <Link to='/login'>Sign In</Link>
      </div>
      <div>
      <Link to='/signup'>Sign Up</Link>
      </div>
    
  </div>
  )
 }

export default Home;
