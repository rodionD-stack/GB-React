import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import './Form.css';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { AUTHORS } from '../constants';

export const Form = ({onSendMessage}) => {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        onSendMessage({
            author: AUTHORS.human,
            id: Date.now(),
            text: value,
        });
        setValue('');
    }

    //Автофокус на инпут при старте страницы и после отправки сообщения при нажатии на кнопку
    const searchInput = useRef(null);

     useEffect(() => {
        searchInput.current.focus();
    }, [])

     function handleFocus() {
        searchInput.current.focus();
    }

    
    return (
        
        <form className="forms"  onSubmit={handleSubmit} ref={handleFocus} >
            
            <TextField className="chageInput"  id="outlined-basic" inputRef={searchInput} value={value} onChange={handleChange} label="Type message..." variant="outlined" />

            <Button style={{marginTop:"20px"}}  type="submit" variant="contained" color="primary">Send</Button>

            
        </form>
       
    )
}