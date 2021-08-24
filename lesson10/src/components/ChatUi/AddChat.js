import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addChat, addChatWithFB } from '../../store/chats/actions';
import { useInput } from '../../utils/useInput';

export const AddChat = () => {
  const dispatch = useDispatch();

  const {value, handleChange, reset} = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      return;
    }

    dispatch(addChatWithFB(value));
    reset();

  }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={value}/>
            <button onClick={handleSubmit}>ADD NEW CHAT</button>
        </form>
    )
}