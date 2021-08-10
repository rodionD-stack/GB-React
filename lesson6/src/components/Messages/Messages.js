import React from 'react';
import './Messages.css'

export const Messages = ({text, author}) => {
    return (
        
            <div className="messages">
                {author}: {text}
            </div>
    
        
    )
    
};