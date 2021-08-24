import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import './Form.css';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { AUTHORS } from '../constants';
import { useInput } from '../../utils/useInput';

export const Form = ({onSendMessage}) => {
    const inputRef = useRef();

    const { value, handleChange, reset } = useInput('')

    const handleSubmit = (e) => {
        e.preventDefault();
    
        onSendMessage({
          id: Date.now(),
          text: value,
        });
        reset();
      }
    
      useEffect(() => {
        inputRef.current?.focus();
      }, []);

    //Автофокус на инпут при старте страницы и после отправки сообщения при нажатии на кнопку
    // const searchInput = useRef(null);

    //  useEffect(() => {
    //     searchInput.current.focus();
    // }, [])

    //  function handleFocus() {
    //     searchInput.current.focus();
    // }

    
    return (
        
        <form className="forms" onSubmit={handleSubmit} >
            
            <TextField className="chageInput"  id="outlined-basic" inputRef={inputRef} value={value} onChange={handleChange} label="Type message..." variant="outlined" />

            <Button style={{marginTop:"20px"}}  type="submit" variant="contained" color="primary">Send</Button>
        </form>
       
    )
}