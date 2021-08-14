import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addChat } from '../../store/chats/actions';

export const AddChat = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      return;
    }

    const newId = `chat-${Date.now()}`;
    dispatch(addChat(newId, value));
  };

    return (
        <form>
            <input onChange={handleChange} value={value}/>
            <button onClick={handleSubmit}>ADD NEW CHAT</button>
        </form>
    )
}