import React from 'react';
//arrow not working wont pass 
const Message = ({chat, user}) => (
    <li className={`chat ${user === chat.username ? "right" : "left"}`}>
        {user !== chat.username
            && <img src={chat.img} alt={`${chat.username}s profile pic`} />
        }
        {chat.content}
    </li>
);

export default Message;
