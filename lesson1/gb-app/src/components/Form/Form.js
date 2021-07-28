import React from 'react';
import { useState } from 'react';
import { AUTHORS } from '../constants';
import './Form.css';
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

    
    return (
        
        <form className="forms" onSubmit={handleSubmit} >
            <label className="forms__label">Write your text:</label>
            <input className="forms__input" type='text' value={value} onChange={handleChange}  placeholder='...'></input>
        
            <input className="forms__btn" type="submit" />


            
        </form>
       
    )
}