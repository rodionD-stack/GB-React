import React from 'react';
import { useSelector } from 'react-redux';
import { selectName } from '../../store/profile/selectors';
import { AUTHORS } from '../constants';
import './Messages.css'

export const Messages = ({text, author}) => {
    const name = useSelector(selectName);
    return (
            <div className="messages">
                {author === AUTHORS.human ? name: author}: {text}
            </div>
    )
    
};