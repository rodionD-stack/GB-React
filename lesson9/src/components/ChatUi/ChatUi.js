import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './ChatUi.css'
import { Link } from 'react-router-dom';
import { AddChat } from './AddChat';
import { useDispatch } from 'react-redux';
import { ChatItem } from './ChatItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: 'rgb(168, 166, 166)',
  },
  inline: {
    display: 'inline',
  },
}));


export const ChatUi = ({ chats, onDeleteChat, onAddChat }) => {
  const classes = useStyles();

  return (
    <>
    <List className={classes.root}>
      {Object.values(chats).map((c) => (
        <ChatItem
        name={c.name}
        key={c.key}
        id={c.id}
        onDelete={onDeleteChat}/>
      ))}
      <ListItem>
        <AddChat onAddChat={onAddChat}/>
      </ListItem>
    </List>
    </>
  );
  
};