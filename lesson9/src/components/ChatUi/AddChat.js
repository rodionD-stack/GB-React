import { Button, TextField } from '@material-ui/core';
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
            <TextField id="outlined-basic" label="Type Chat name.." variant="outlined" onChange={handleChange} value={value}/>
            <br/>
            <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>ADD NEW CHAT</Button>
        </form>
    )
}