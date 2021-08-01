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

const myChats = [
  {
    name: 'Mark chat',
    id: '1',
    text: "— I'll be in your neighborhood doing errands this…",
  },

  {
    name: 'Rodion chat',
    id: '2',
    text: "— Wish I could come, but I'm out of town this…",
  },
];

export const ChatUi = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {myChats.map((c) => (
        <ListItem alignItems="flex-start" key={c.id}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={c.name}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Ali Connors
                </Typography>
                {c.text}
              </React.Fragment>
            }
          />
        </ListItem> 
      ))}
      <Divider variant="inset" component="li" />
    </List>
  );
}